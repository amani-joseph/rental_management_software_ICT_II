import { Tenant } from '../../../atoms/tables/columns';
import { checkEmailSchema } from "@/lib/validations/auth";
// import {z} from "zod"
import * as z from "zod/v4";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

const phoneRegex = new RegExp(
	/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const tenantSchema = z.object({
	id: z.number(),
	email: z.string(),
	phone: z.string(),
	status: z.string(),
	leaseStart: z.string(),
	leaseEnd: z.string(),
	monthlyRent: z.number(),
});

export type Tenant = z.infer<typeof tenantSchema>;
