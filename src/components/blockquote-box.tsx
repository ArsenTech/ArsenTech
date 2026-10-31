import { BlockquoteVariant, IBlockquoteBox } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";
import {Info, Lightbulb, CircleAlert, TriangleAlert, ShieldAlert} from "lucide-react"

function extractTextFromReactNode(node: React.ReactNode): string {
     if (typeof node === "string") return node;
     if (Array.isArray(node)) return node.map(extractTextFromReactNode).join("");
     if (React.isValidElement<React.ComponentProps<"div">>(node)) return extractTextFromReactNode(node.props.children);
     return "";
}

function stripDirective(children: React.ReactNode): React.ReactNode {
     if (typeof children === "string") return children.replace(/^\[!\w+]\s*/, "");
     if (Array.isArray(children)) return children.map((child, index) => {
          const stripped = stripDirective(child);
          return React.isValidElement(stripped)
               ? React.cloneElement(stripped, { key: stripped.key ?? `child-${index}` })
               : stripped;
     });
     if (React.isValidElement<React.ComponentProps<"div">>(children)) return React.cloneElement(children, {
          ...children.props,
          children: stripDirective(children.props.children),
     });
     return children;
}

const variantMap: Record<BlockquoteVariant,IBlockquoteBox> = {
     note: {
          boxClass: "border-blue-500 bg-blue-500/10",
          lineClass: "border-blue-600",
          Icon: Info,
          iconClass: "text-blue-700"
     },
     tip: {
          boxClass: "border-emerald-500 bg-emerald-500/10",
          lineClass: "border-emerald-600",
          Icon: Lightbulb,
          iconClass: "text-emerald-700"
     },
     important: {
          boxClass: "border-violet-500 bg-violet-500/10",
          lineClass: "border-violet-600",
          Icon: CircleAlert,
          iconClass: "text-violet-700"
     },
     warning: {
          boxClass: "border-amber-500 bg-amber-500/10",
          lineClass: "border-amber-600",
          Icon: TriangleAlert,
          iconClass: "text-amber-700"
     },
     caution: {
          boxClass: "border-red-500 bg-red-500/10",
          lineClass: "border-red-600",
          Icon: ShieldAlert,
          iconClass: "text-red-700"
     }
}

interface BlockquoteProps{
     children: React.ReactNode
}
export function Blockquote({children}: BlockquoteProps){
     const rawText = extractTextFromReactNode(children).replaceAll(/\n/g,"").replaceAll(/\r/g,"");
     const match = rawText.match(/^\[!(\w+)\]\s*(.*)/i);
     const bqType = (match ? (match[1] as BlockquoteVariant) : "").toLowerCase();
     const variant = bqType ? variantMap[bqType as BlockquoteVariant] : null;
     const bqTitle = bqType ? bqType[0].toUpperCase() + bqType.slice(1) : ""
     return !variant ? (
          <blockquote className="mt-3.5 border-l-2 pl-6 italic text-sm md:text-base">{children}</blockquote>
     ) : (
          <div aria-label={bqTitle} className={cn(
               "mt-3.5 border-2 rounded-md shadow-sm transition-all duration-200 hover:shadow-md py-5 px-4 [&>*]:my-0 space-y-2 flex flex-col items-start",
               variant.boxClass
          )}>
               <span className={cn(
                    "text-md sm:text-lg md:text-xl mb-3 font-semibold flex items-center gap-2 pb-2 border-b text-foreground",
                    variant.lineClass
               )}><variant.Icon className={variant.iconClass}/> {bqTitle}</span>
               {stripDirective(children)}
          </div>
     )
}