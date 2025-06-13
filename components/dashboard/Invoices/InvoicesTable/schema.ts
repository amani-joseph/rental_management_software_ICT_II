import {z} from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const invoiceSchema = z.object({
    id: z.string(),
    title: z.string(),
    amount: z.number(),
    status: z.string(),
    label: z.string(),
    priority: z.string(),
})

export type InvoiceType = z.infer<typeof invoiceSchema>
