"use client"
import SectionTitle from "@/components/section-title";
import SiteSection from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SiGithub, SiPatreon, SiYoutube } from "react-icons/si";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, Send, User } from "lucide-react";
import ContactCard from "@/components/cards/contact";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { useTransition } from "react";
import { Spinner } from "@/components/ui/spinner";
import { sendMessage } from "@/actions/contact";
import { toast } from "sonner";
import { ContactType, ContactSchema } from "@/lib/schemas";

export default function ContactSection(){
     const [isSubmitting, startTransition] = useTransition();
     const form = useForm<ContactType>({
          resolver: zodResolver(ContactSchema),
          defaultValues: {
               username: "",
               email: "",
               subject: "",
               message: ""
          }
     })
     const onSubmit = (values: ContactType) => {
          if(isSubmitting) return;
          startTransition(async()=>{
               try {
                    const res = await sendMessage(values);
                    if(res.error) {
                         toast.error(res.error);
                         return;
                    }
                    if(res.success) {
                         toast.success(res.success);
                         form.reset();
                         return;
                    }
               } catch (err){
                    console.error(err)
                    toast.error("Something went wrong",{
                         description: err instanceof Error ? err.message : String(err)
                    })
               }
          })
     }
     return (
          <SiteSection id="contact">
               <SectionTitle className="mb-5">Get in Touch</SectionTitle>
               <div className="space-y-4">
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
                         <ContactCard
                              Icon={SiYoutube}
                              username="ArsenTech"
                              cta="Subscribe"
                              url="https://www.youtube.com/@ArsenTech"
                         />
                         <ContactCard
                              Icon={SiGithub}
                              username="ArsenTech"
                              cta="Follow"
                              url="https://github.com/ArsenTech"
                         />
                         <ContactCard
                              Icon={SiPatreon}
                              username="ArsenTech"
                              cta="Join"
                              url="https://www.patreon.com/arsentech"
                         />
                    </div>
                    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                         <FieldGroup>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                   <Controller
                                        control={form.control}
                                        name="username"
                                        disabled={isSubmitting}
                                        render={({field, fieldState})=>(
                                             <Field data-invalid={fieldState.invalid}>
                                                  <FieldLabel htmlFor="username">User name</FieldLabel>
                                                  <InputGroup className="bg-card">
                                                       <InputGroupInput {...field} aria-invalid={fieldState.invalid} id="username" placeholder="TheCoolFan1234"/>
                                                       <InputGroupAddon>
                                                            <User/>
                                                       </InputGroupAddon>
                                                  </InputGroup>
                                                  {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                             </Field>
                                        )}
                                   />
                                   <Controller
                                        control={form.control}
                                        name="email"
                                        disabled={isSubmitting}
                                        render={({field, fieldState})=>(
                                             <Field data-invalid={fieldState.invalid}>
                                                  <FieldLabel htmlFor="email">Email</FieldLabel>
                                                  <InputGroup className="bg-card">
                                                       <InputGroupInput {...field} aria-invalid={fieldState.invalid} type="email" id="email"  placeholder="name@example.com"/>
                                                       <InputGroupAddon>
                                                            <Mail/>
                                                       </InputGroupAddon>
                                                  </InputGroup>
                                                  {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                             </Field>
                                        )}
                                   />
                              </div>
                              <Controller
                                   control={form.control}
                                   name="subject"
                                   disabled={isSubmitting}
                                   render={({field, fieldState})=>(
                                        <Field data-invalid={fieldState.invalid}>
                                             <FieldLabel htmlFor="subject">Subject</FieldLabel>
                                             <Input {...field} aria-invalid={fieldState.invalid} id="subject" className="bg-card" placeholder="Write the subject here"/>
                                             {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                        </Field>
                                   )}
                              />
                              <Controller
                                   control={form.control}
                                   name="message"
                                   disabled={isSubmitting}
                                   render={({field, fieldState})=>(
                                        <Field data-invalid={fieldState.invalid}>
                                             <FieldLabel htmlFor="message">Message</FieldLabel>
                                             <InputGroup className="bg-card">
                                                  <InputGroupTextarea {...field} maxLength={500} aria-invalid={fieldState.invalid} id="message" rows={10} placeholder="What's your message about?"/>
                                                  <InputGroupAddon align="block-end">
                                                       <InputGroupText className="tabular-nums">
                                                            {field.value.length}/500
                                                       </InputGroupText>
                                                  </InputGroupAddon>
                                             </InputGroup>
                                             {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                                        </Field>
                                   )}
                              />
                         </FieldGroup>
                    </form>
                    <Button type="submit" size="xl" form="contact-form">
                         {isSubmitting ? <Spinner/> : <Send/>}
                         {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
               </div>
          </SiteSection>
     )
}