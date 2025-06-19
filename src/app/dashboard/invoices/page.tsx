import React from "react";
import {promises as fs} from "fs";
import path from "path";
import {z} from "zod";
import {invoiceSchema} from "@/components/dashboard/Invoices/InvoicesTable/schema";
import {DataTable} from "@/atoms/tables/data-table";
import {InvoiceColumns} from "@/components/dashboard/Invoices/InvoicesTable/invoiceColumns";

interface PropertiesProps {

}

const page: () => Promise<React.JSX.Element> = async () => {
    async function getInvoices() {
        const data = await fs.readFile(
            path.join(process.cwd(), "components/dashboard/Invoices/InvoicesTable/data.json")
        );
        const invoice = JSON.parse(data.toString());
        return z.array(invoiceSchema).parse(invoice);
    }

    const invoices = await getInvoices();
    // console.log("INVOICES ==> :", invoices)
    return (
        <div className=" mx-auto py-10 w-[100%]">
            <DataTable data={invoices} columns={InvoiceColumns}/>
        </div>
    );
}

export default page;