import { BlockquoteVariant, IBlockquoteBox } from "@/lib/types";
import {Info, Lightbulb, CircleAlert, TriangleAlert, ShieldAlert} from "lucide-react"

export const VARIANTS: Record<BlockquoteVariant,IBlockquoteBox> = {
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