"use server"
import type { ContactType } from "@/components/sections/main/contact";
import type { ZodSafeParseResult } from "zod";

export async function sendMessage(validatedFields: ZodSafeParseResult<ContactType>): Promise<{
     success?: string,
     error?: string
}>{
     if(!validatedFields.success) return { error: "Make sure to validate each provided field." }
     const {username, email, subject, message} = validatedFields.data;
     const request = {
          name: username,
          _replyTo: email,
          _subject: subject,
          message
     }
     try {
          const res = await fetch("https://formspree.io/f/xnqolaog", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(request),
          });
          return res.ok ? { success: "Message sent successfully" } : { error: "Failed to send message" }
     } catch (e) {
          console.error(e)
          return {error: "Internal server error"}
     }
}