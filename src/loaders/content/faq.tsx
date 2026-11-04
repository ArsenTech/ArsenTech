import { Field, FieldGroup } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";

export default function FAQLoader(){
     return (
          <FieldGroup>
               <Field>
                    <Skeleton className="h-4.5 w-36!"/>
                    <Skeleton className="h-8 w-full"/>
               </Field>
               <Field orientation="horizontal">
                    <Skeleton className="h-8 w-36"/>
               </Field>
          </FieldGroup>
     )
}