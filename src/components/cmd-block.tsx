
import CodeSnippetBlock from "@/components/code-block";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs"

interface CMDBlockProps{
     shell?: "cmd" | "bash" | "zsh" | "text" | "bat" | "sh" | "fish",
     data: {
          [cmd: string]: string
     }
}
export default function CMDBlock({shell = "text", data}: CMDBlockProps){
     const commands = Object.entries(data);
     const cmdTypes = commands.map(val=>val[0]);
     return (
          <Tabs defaultValue={cmdTypes[0]}>
               <TabsList className="w-full h-full flex-wrap">
                    {cmdTypes.map(type=>(
                         <TabsTrigger value={type} key={type} className="flex-1">{type}</TabsTrigger>
                    ))}
               </TabsList>
               {commands.map(([type,cmd])=>(
                    <TabsContent key={`cmd-${type}`} value={type} asChild>
                         <CodeSnippetBlock lang={shell} code={cmd}/>
                    </TabsContent>
               ))}
          </Tabs>
     )
}