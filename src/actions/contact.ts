"use server"
import { ContactSchema, ContactType } from "@/lib/schemas";

type ContactResult = {
     success?: string
     error?: string
}

export async function sendMessage(values: ContactType): Promise<ContactResult> {
     const validated = ContactSchema.safeParse(values)
     if (!validated.success) return { error: "Please check the provided fields."}
     const { username, email, subject, message } = validated.data
     try {
          const res = await fetch("https://formspree.io/f/id", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
               },
               body: JSON.stringify({
                    name: username,
                    email,
                    subject,
                    message,
               }),
               cache: "no-store",
          })
          if (res.status === 429) return { error: "Too many requests. Please try again later." }
          if (!res.ok) return { error: "Failed to send message." }
          return { success: "Message sent successfully!" }
     } catch (error) {
          console.error("Formspree request failed:", error)
          return { error: "Internal server error.", }
     }
}