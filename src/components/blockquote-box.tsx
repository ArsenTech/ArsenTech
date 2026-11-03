import { BlockquoteVariant } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";
import { extractTextFromReactNode, stripDirective } from "@/lib/helpers/blockquotes";
import { VARIANTS } from "@/lib/constants/variants";

interface BlockquoteProps{
     children: React.ReactNode
}
export function Blockquote({children}: BlockquoteProps){
     const rawText = extractTextFromReactNode(children).replaceAll(/\n/g,"").replaceAll(/\r/g,"");
     const match = rawText.match(/^\[!(\w+)\]\s*(.*)/i);
     const bqType = (match ? (match[1] as BlockquoteVariant) : "").toLowerCase();
     const variant = bqType ? VARIANTS[bqType as BlockquoteVariant] : null;
     const bqTitle = bqType ? bqType[0].toUpperCase() + bqType.slice(1) : ""
     return !variant ? (
          <blockquote className="mt-3.5 border-l-2 pl-6 italic text-sm md:text-base">{children}</blockquote>
     ) : (
          <div aria-label={bqTitle} className={cn(
               "mt-3.5 border-2 rounded-md shadow-sm transition-all duration-200 hover:shadow-md py-5 px-4 *:my-0 space-y-2 flex flex-col items-start",
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