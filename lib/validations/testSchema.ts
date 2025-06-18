import * as z from "zod";

export const testSchema = z.object({
    username: z.string().min(3, {message: "Too short"}).max(18, {message: "Too long"}),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z
        .string()
        .min(8, {
            message: "Password must be at least 8 characters long",
        })
        .max(100)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
})