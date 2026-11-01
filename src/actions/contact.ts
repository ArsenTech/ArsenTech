"use server"
import { ContactSchema, ContactType } from "@/lib/schemas";

export async function sendMessage(values: ContactType): Promise<{
     success?: string,
     error?: string
}>{
     const validatedFields = ContactSchema.safeParse(values);
     if(!validatedFields.success) return {error: "Make sure to validate each provided field."}
     const request = {
          name: validatedFields.data.username,
          _replyTo: validatedFields.data.email,
          _subject: validatedFields.data.subject,
          message: validatedFields.data.message
     }
     const res = await fetch("https://formspree.io/f/xnqolaog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(request),
     });
     return res.ok ? { success: "Message sent successfully" } : { error: "Failed to send message" }
}