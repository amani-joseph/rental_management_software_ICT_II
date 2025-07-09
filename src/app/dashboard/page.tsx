import React from "react";
import {promises as fs} from "fs";
import {DataTable} from "@/atoms/tables/data-table";
import {columns, Payment} from "@/atoms/tables/columns";
import path from "path";
import {taskSchema} from "@/atoms/tables/schema";
import {z} from "zod";

const payments: Payment[] = [
	{
		id: "728ed52f",
		amount: 100,
		status: "pending",
		email: "m@example.com",
	},
];

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return payments;
}

async function getTasks() {
	const data = await fs.readFile(
		path.join(process.cwd(), "/atoms/tables/tasks.json")
	);

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

export default async function Home() {
	const data = await getData();
	const tasks = await getTasks();
	return (
		<div className=" mx-auto py-2">
			<DataTable data={tasks} columns={columns}/>
		</div>
	);
}
