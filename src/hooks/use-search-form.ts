import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { SearchType, SearchSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"

export default function useSearchForm(query: string, pageSize: number){
     const router = useRouter();
     const form = useForm<SearchType>({
          resolver: zodResolver(SearchSchema),
          defaultValues: { query }
     })
     function onSubmit(values: SearchType) {
          const searchParams = new URLSearchParams({
               query: values.query,
               page: "1",
               pageSize: pageSize.toString()
          })
          router.push(`/blog?${searchParams.toString()}`)
     }
     return {form, onSubmit}
}