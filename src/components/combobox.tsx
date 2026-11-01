import { Noop } from "react-hook-form";
import { Command, CommandInput, CommandEmpty, CommandList, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface ComboboxFieldProps{
     onChange: (value: string | null) => void;
     onBlur?: Noop;
     value: string;
     disabled?: boolean;
     name?: string;
     invalid?: boolean,
     items: string[],
     placeholder?: string,
     Icon?: LucideIcon,
     triggerBtn?: React.ReactNode
}
export default function ComboboxField({
     items,
     placeholder = "Search...",
     invalid,
     onChange,
     Icon,
     value,
     disabled,
     name,
     onBlur,
     triggerBtn
}: ComboboxFieldProps){
     const [open, setOpen] = useState(false)
     const [search, setSearch] = useState("")
     const filtered = useMemo(() =>items.filter(item =>
          item.toLowerCase().includes(search.toLowerCase())
     ),[items, search])
     return (
          <Popover open={open} onOpenChange={setOpen}>
               <PopoverTrigger asChild>
                    {!triggerBtn ? (
                         <Button
                              name={name}
                              aria-invalid={invalid}
                              disabled={disabled}
                              onBlur={onBlur}
                              variant="outline"
                              type="button"
                              className="justify-start font-normal"
                         >
                              {Icon && <Icon className="size-4 text-muted-foreground"/>}
                              {value || placeholder}
                         </Button>
                    ) : triggerBtn}
               </PopoverTrigger>
               <PopoverContent className="w-(--radix-popover-trigger-width) p-0 overflow-hidden">
                    <Command>
                         <CommandInput
                              value={search}
                              onValueChange={setSearch}
                              placeholder={placeholder}
                         />
                         <CommandEmpty>
                              No items found.
                         </CommandEmpty>
                         <CommandList className="max-h-64 overflow-y-auto overscroll-contain" onWheel={(e) => e.stopPropagation()}>
                              <CommandGroup>
                                   {filtered.slice(0,20).map(item => (
                                        <CommandItem
                                             key={item}
                                             value={item}
                                             onSelect={() => {
                                                  onChange?.(item)
                                                  setOpen(false)
                                             }}
                                             className="truncate"
                                        >
                                             {item}
                                        </CommandItem>
                                   ))}
                              </CommandGroup>
                         </CommandList>
                    </Command>
               </PopoverContent>
          </Popover>
     )
}