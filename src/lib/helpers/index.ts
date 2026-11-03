import { Children, isValidElement, ReactNode } from "react";

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
export function formatBytes(bytes: number) {
     if (bytes === 0) return "0 B"
     const units = ["B", "KiB", "MiB", "GiB"]
     const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)),units.length - 1)
     return `${(bytes / 1024 ** index).toFixed(2)} ${units[index]}`
}