import * as z from "zod"

export const ContactSchema = z.object({
     username: z.string().trim().min(2,"The username is required").max(100,"The username is too long"),
     email: z.email("Enter a valid email address").max(254,"the provided email is too long").trim().transform(email => email.toLowerCase()),
     subject: z.string().trim().min(2,"The subject is required").max(100,"the subject is too long"),
     message: z.string().trim().min(20,"The message provided here is too short").max(500,"The provided message is too long")
})
export type ContactType = z.infer<typeof ContactSchema>