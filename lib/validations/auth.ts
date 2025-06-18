import * as z from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
export const authSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z
        .string()
        .min(8, {
            message: "Password must be at least 8 characters long",
        })
        .max(100)
        .regex(passwordRegex, {
            message:
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
        }),
})

export const signUpSchema = z.object({
    firstName: z.string().min(3, {
        message: "First Name must be at least 3 characters long",
    }).max(20, {
        message: "First Name must be less than 20 characters long",
    }),
    surname: z.string().min(3, {
        message: "Surname must be at least 3 characters long",
    }).max(20, {
        message: "Surname must be less than 20 characters long",
    }),
    otherName: z.string().min(3, {
        message: "Other Name must be at least 3 characters long",
    }).max(20, {
        message: "Other Name must be less than 20 characters long",
    }).nullish(),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    phone: z.string().min(10, {message: 'Must be a valid mobile number'})
        .max(14, {message: 'Must be a valid mobile number'}).regex(phoneRegex, 'Invalid Number!'),
    password: authSchema.shape.password,
    confirmPassword: authSchema.shape.password,
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})


export const verfifyEmailSchema = z.object({
    code: z
        .string()
        .min(6, {
            message: "Verification code must be 6 characters long",
        })
        .max(6),
})

export const checkEmailSchema = z.object({
    email: authSchema.shape.email,
})

export const resetPasswordSchema = z
    .object({
        password: authSchema.shape.password,
        confirmPassword: authSchema.shape.password,
        // code: verfifyEmailSchema.shape.code,
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })
