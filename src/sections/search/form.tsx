"use client"
import { Controller } from "react-hook-form"
import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { getRangeAsText } from "@/lib/helpers/seo"
import { Field, FieldError, FieldGroup } from "@/components/ui/field"
import useSearchForm from "@/hooks/use-search-form"

interface SearchFormProps{
     keyword: string,
     totalPages: number,
     page: number,
     pageSize: number
}
export default function SearchForm({keyword, totalPages, page, pageSize}: SearchFormProps){
     const {form, onSubmit} = useSearchForm(keyword, pageSize)
     return (
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
                                             {getRangeAsText(
                                                  page,
                                                  pageSize,
                                                  totalPages
                                             )}
                                        </InputGroupAddon>
                                   </InputGroup>
                                   {fieldState.error && <FieldError errors={[fieldState.error]}/>}
                              </Field>
                         )}
                    />
               </FieldGroup>
          </form>
     )
}