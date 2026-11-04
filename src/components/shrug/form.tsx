import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"
import { Controller } from "react-hook-form"
import { Field, FieldError, FieldGroup } from "../ui/field"
import useSearchForm from "@/hooks/use-search-form"

interface FallbackSearchFormProps{
     pageSize: number,
     query: string,
}
export default function FallbackSearchForm({pageSize, query}: FallbackSearchFormProps){
     const {form, onSubmit} = useSearchForm(query, pageSize)
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
                                             <InputGroupButton type="submit">Search</InputGroupButton>
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