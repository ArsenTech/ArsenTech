import { Field, FieldGroup } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoader(){
     return (
          <>
          <div className="space-y-4">
               <div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
                    {Array.from({length: 3}).map((_,i)=>(
                         <div key={`contact-item-${i+1}`} className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 rounded-md p-2.5 border border-muted">
                              <div className="flex justify-center items-center gap-2.5">
                                   <Skeleton className="size-8 shrink-0" />
                                   <Skeleton className="h-6 md:h-7 lg:h-8 w-33"/>
                              </div>
                              <Skeleton className="h-9 w-24 lg:w-9 xl:w-24"/>
                         </div>
                    ))}
               </div>
               <FieldGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <Field>
                              <Skeleton className="h-4.5 w-30!"/>
                              <Skeleton className="h-8 w-full"/>
                         </Field>
                         <Field>
                              <Skeleton className="h-4.5 w-30!"/>
                              <Skeleton className="h-8 w-full"/>
                         </Field>
                    </div>
                    <Field>
                         <Skeleton className="h-4.5 w-30!"/>
                         <Skeleton className="h-8 w-full"/>
                    </Field>
                    <Field>
                         <Skeleton className="h-4.5 w-30!"/>
                         <Skeleton className="h-25 w-full"/>
                    </Field>
                    <Field orientation="horizontal">
                         <Skeleton className="h-10 w-43.75"/>
                    </Field>
               </FieldGroup>
          </div>
          </>
     )
}