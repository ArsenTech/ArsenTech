"use client"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message"
import ComboboxField from "@/components/combobox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { FAQSchema, FAQType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircleQuestionMark } from "lucide-react";
import { useState } from "react";
import type { IFAQItem } from "@/lib/types";
import { toast } from "sonner";
import usePFP from "@/hooks/use-pfp";

interface FAQSectionProps{
     list: IFAQItem[]
}
export default function FAQSection({list}: FAQSectionProps){
     const [activeFAQ, setActiveFAQ] = useState<IFAQItem | null>(null);
     const {main} = usePFP()
     const form = useForm<FAQType>({
          resolver: zodResolver(FAQSchema),
          defaultValues: {
               question: ""
          }
     })
     const onReveal = (values: FAQType) => {
          const currFAQ = list.find(val=>val.question===values.question);
          if(!currFAQ) {
               setActiveFAQ(null)
               toast.error("The following answer is not found");
               return;
          }
          setActiveFAQ(currFAQ)
     }
     return (
          <>
               <form onSubmit={form.handleSubmit(onReveal)}>
                    <FieldGroup>
                         <Controller
                              control={form.control}
                              name="question"
                              render={({field, fieldState}) => (
                                   <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="question">Question to answer</FieldLabel>
                                        <ComboboxField
                                             {...field}
                                             onChange={(value) => {
                                                  field.onChange(value)
                                                  setActiveFAQ(null)
                                             }}
                                             invalid={fieldState.invalid}
                                             id="question"
                                             placeholder="Select a frequently asked question..."
                                             items={list.map(val=>val.question)}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                   </Field>
                              )}
                         />
                         <Field orientation="horizontal">
                              <Button type="submit">
                                   <MessageCircleQuestionMark/>
                                   Get an answer
                              </Button>
                         </Field>
                    </FieldGroup>
               </form>
               <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="w-full"
               >
                    {activeFAQ && (
                         <div className="w-full md:max-w-3xl py-12">
                              <Message>
                                   <MessageAvatar>
                                        <Avatar>
                                             <AvatarImage src={main} alt="ArsenTech" />
                                             <AvatarFallback>AT</AvatarFallback>
                                        </Avatar>
                                   </MessageAvatar>
                                   <MessageContent>
                                        <MessageHeader>ArsenTech</MessageHeader>
                                        <Bubble variant="muted">
                                             <BubbleContent>
                                                  {activeFAQ.answer}
                                             </BubbleContent>
                                        </Bubble>
                                   </MessageContent>
                              </Message>
                         </div>
                    )}
               </div>
          </>
     )
}