import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"
import { Controller, UseFormReturn } from "react-hook-form"
import { Field, FieldGroup } from "./ui/field"
import { SearchType } from "@/lib/schemas"
interface NoSearchResultsProps{
     tag: string
     form?: UseFormReturn<SearchType>,
     onSubmit?: (values: SearchType) => void
}
export default function NoSearchResults({tag, form, onSubmit}: NoSearchResultsProps){
     return (
          <Empty>
               <EmptyHeader>
                    <EmptyMedia>
                         <p aria-label="shrug" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-muted-foreground">¯\_(ツ)_/¯</p>
                    </EmptyMedia>
                    <EmptyTitle className="text-xl md:text-2xl">No results found for {tag}</EmptyTitle>
                    <EmptyDescription>Please Try again searching with another keywords</EmptyDescription>
               </EmptyHeader>
               {!!(form && onSubmit) && (
                    <EmptyContent>
                         <form id="blog-search" onSubmit={form.handleSubmit(onSubmit)} className="w-full flex items-center gap-3">
                              <FieldGroup>
                                   <Controller
                                        control={form.control}
                                        name="query"
                                        render={({field, fieldState})=>(
                                             <Field data-invalid={fieldState.invalid}>
                                                  <InputGroup>
                                                       <InputGroupInput {...field} placeholder="Search tutorials, coding tips..." aria-invalid={fieldState.invalid}/>
                                                       <InputGroupAddon>
                                                            <SearchIcon/>
                                                       </InputGroupAddon>
                                                       <InputGroupAddon align="inline-end">
                                                            <InputGroupButton type="submit">Search</InputGroupButton>
                                                       </InputGroupAddon>
                                                  </InputGroup>
                                             </Field>
                                        )}
                                   />
                              </FieldGroup>
                         </form>
                    </EmptyContent>
               )}
          </Empty>
     )
}