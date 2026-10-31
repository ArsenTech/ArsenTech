"use client";
import { Button } from "@/components/ui/button";
import { DownloadIcon, FileCodeIcon } from "lucide-react";
import React from "react";
import { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader, CodeBlockLine, CodeBlockTitle } from "./ui/code-block";
import { useHighlightedCode } from "@/hooks/use-highlighted-code";

interface CodeBlockProps {
  code: string
  lang?: string,
}


const extensions: Record<string, string> = {
  // Windows command scripts
  cmd: "cmd",
  bat: "bat",
  batch: "bat",

  // JavaScript / TypeScript
  js: "js",
  javascript: "js",
  jsx: "jsx",
  ts: "ts",
  typescript: "ts",
  tsx: "tsx",

  // Shell
  bash: "sh",
  sh: "sh",
  shell: "sh",
  shellscript: "sh",
  zsh: "zsh",
  fish: "fish",

  // PowerShell
  powershell: "ps1",
  ps: "ps1",
  ps1: "ps1",
  pwsh: "ps1",

  // Other languages
  css: "css",
  diff: "diff",
  html: "html",
  json: "json",
  markdown: "md",
  md: "md",
  python: "py",
  py: "py",
  sql: "sql",
  yaml: "yaml",
  yml: "yaml",

  // Plain text
  txt: "txt",
  text: "txt",
  plain: "txt",
}

export default function CodeSnippetBlock({ code, lang }: CodeBlockProps) {
  const lines = useHighlightedCode(code, lang ?? "txt")
  const id = React.useId()

  function download(value: string, filename: string) {
    const url = URL.createObjectURL(new Blob([value], { type: "text/plain" }))
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }
  const filename = `snippet.${extensions[lang ?? ""] ?? "txt"}`
  return (
    <div className="not-prose typeset w-full my-2">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <FileCodeIcon />
            {lang ?? "txt"}
          </CodeBlockTitle>
          <CodeBlockActions>
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Download"
              onClick={() => download(code, filename)}
            >
              <DownloadIcon />
            </Button>
            <CodeBlockCopyButton value={code} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent
          wrap
          lineNumbers
          id={id}
        >
          {lines.map((line, index) => (
            <CodeBlockLine
              key={index}
              variant={index >= 5 && index <= 9 ? "highlighted" : "default"}
            >
              {line}
            </CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
    </div>
  );
}