import React from 'react';
import {DataTable} from "@/atoms/tables/data-table";
import {columns, Payment} from "@/atoms/tables/columns";
import {promises as fs} from "fs";
import path from "path";
import {z} from "zod";
import {taskSchema} from "@/atoms/tables/schema";

const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
]

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return payments
}

async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "/atoms/tables/tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
}

interface OwnProps {
}

type Props = OwnProps;

const Tenants = async (): Promise<JSX.Element> => {
    const data = await getData()
    const tasks = await getTasks()
    return (
        <div className="container mx-auto py-10">
            <DataTable data={tasks} columns={columns}/>
        </div>
    );
};

export default Tenants;
