import * as z from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const zipRegex = new RegExp(
    /^\d{5}(?:[-\s]\d{4})?$/
);
const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)





export const propertySchema = z.object({

    street: z.string().min(3).max(50),
    streetNumber: z.number(),
    city: z.string().min(3).max(50),
    state: z.string().min(2).max(50),
    zip: z.string(),
    type: z.string(),
    occupancy: z.string().default("vacant"),
    tenant: z.string().optional(),
    leaseStart: z.string().optional(),
    leaseEnd: z.string().optional(),
    rent: z.string(),
    bathrooms: z.string(),
    bedrooms: z.string(),
    parking: z.string(),


})
