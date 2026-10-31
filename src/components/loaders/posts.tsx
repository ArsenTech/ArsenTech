import BlogItemLoader from "./blog-item";

export default function PostsLoader({count = 10}: {count?: number}){
     return Array.from({length: count}).map((_,i)=>(
          <BlogItemLoader key={`post-${i+1}`}/>
     ))
}