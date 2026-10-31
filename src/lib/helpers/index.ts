import { TOCItem, IBlogPostBase, IBlogPostFull, BlogPostMetadata } from "@/lib/types";
import {unified} from "unified"
import remarkParse from "remark-parse"
import {visit} from "unist-util-visit"
import type {Heading} from "mdast"
import {toString} from "mdast-util-to-string"
import GithubSlugger from "github-slugger"
import matter from "gray-matter"
import {promises as fs} from "fs";
import { MAX_RELATED_POSTS } from "../constants";
import path from "path";
import { cache, Children, isValidElement, ReactElement, ReactNode } from "react";

const postsFolder = path.join(process.cwd(), "src", "posts");

export default function extractTOC(content: string): TOCItem[]{
     const {content: mdxContent} = matter(content);
     const tree = unified().use(remarkParse).parse(mdxContent);
     const headings: TOCItem[] = [];
     const slugger = new GithubSlugger();
     visit(tree,"heading",(node: Heading)=>{
          const text = toString(node);
          if(!text) return;
          const id = slugger.slug(text)
          headings.push({ id, text, level: node.depth })
     })
     return headings
}

export const getAllPosts = cache(async(): Promise<IBlogPostBase[]> => {
     const files = await fs.readdir(postsFolder);
     const posts = await Promise.all(
          files.map(async file =>{
               const blog = await getPostBySlug(path.parse(file).name.replace(".mdx", ""))
               if(!blog) return null
               // eslint-disable-next-line @typescript-eslint/no-unused-vars
               const {content, toc, ...rest} = blog;
               return rest
          })
     );
     return posts.filter((post): post is IBlogPostBase=> post !== null && post.published).sort((a, b) => b.date.getTime() - a.date.getTime());
})

export const getPostBySlug = cache(async(slug: string): Promise<IBlogPostFull | null> => {
     try {
          const fullPath = path.join(postsFolder, `${slug}.mdx`);
          const contents = await fs.readFile(fullPath, "utf8");
          const toc = extractTOC(contents);
          const { data: frontmatter, content } = matter(contents) as unknown as {data: BlogPostMetadata, content: string}
          return {
               title: frontmatter.title,
               slug: frontmatter.slug ?? slug,
               description: frontmatter.description,
               date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
               editDate: frontmatter.editDate,
               tags: frontmatter.tags ?? [],
               categories: frontmatter.categories ?? [],
               published: frontmatter.published ?? true,
               featured: frontmatter.featured ?? false,
               author: {
                    name: frontmatter.author ?? "ArsenTech",
                    url: frontmatter.authorURL ?? "https://github.com/ArsenTech"
               },
               toc,
               content
          };
     } catch (e) {
          console.error(`Failed to load post: ${slug}`);
          console.error(e);
          return null;
     }
})

export const getRelatedPosts = cache(async(currentSlug: string, tags: string[]): Promise<IBlogPostBase[]> => {
     const posts = await getAllPosts()
     const related = posts.filter(post => post.slug !== currentSlug && post.tags.some(tag => tags.includes(tag)));
     const seen = new Set<string>();
     return related.filter(p => {
          if (seen.has(p.slug)) return false;
          seen.add(p.slug);
          return true;
     }).slice(0, MAX_RELATED_POSTS);
})

export const getCategories = cache(async(posts?: ReadonlyArray<IBlogPostBase>): Promise<string[]> => {
     const arr = !posts ? await getAllPosts() : posts
     return [...new Set(arr.flatMap(post => post.categories))];
})

export const getAllTags = cache(async(limit?: number) => {
     const posts = await getAllPosts();
     return [...new Set(posts.flatMap(post => post.tags))].slice(0, limit);
});

export const getPostsByTag = cache(async(tag: string) => {
     const posts = await getAllPosts();
     return posts.filter(post =>post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())));
});

export const getAllSlugs = cache(async(limit?: number) => {
     const posts = await getAllPosts()
     return posts.map(post=>post.slug).slice(0,limit)
})

export const getAllCategories = cache(async(limit?: number) => {
     const posts = await getAllPosts();
     return [...new Set(posts.flatMap(post => post.categories))].slice(0, limit);
})

export const getPostsByCategory = cache(async(category: string) => {
     const posts = await getAllPosts();
     return posts.filter(post =>post.categories.some(cat => cat.toLowerCase() === category.toLowerCase()));
});


interface ElementWithChildren {
  children?: ReactNode
}

export function flattenChildrenToString(children: ReactNode): string {
     return Children.toArray(children).reduce<string>((text, child) => {
          if (typeof child === "string" ||typeof child === "number" ||typeof child === "bigint") return text + String(child)
          if (isValidElement<ElementWithChildren>(child)) return text + flattenChildrenToString(child.props.children)
          return text
     },"")
}