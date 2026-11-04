import React from "react";

export function extractTextFromReactNode(node: React.ReactNode): string {
     if (typeof node === "string") return node;
     if (Array.isArray(node)) return node.map(extractTextFromReactNode).join("");
     if (React.isValidElement<React.ComponentProps<"div">>(node)) return extractTextFromReactNode(node.props.children);
     return "";
}

export function stripDirective(children: React.ReactNode): React.ReactNode {
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