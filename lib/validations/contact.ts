import { z } from "zod"

export const contactSchema = z.object({
    email: z
        .string()
        .email("Invalid email")
        .max(100),
    idea: z
        .string()
        .min(10, "Message too short")
        .max(500, "Message too long"),
})

export type ContactInput = z.infer<typeof contactSchema>