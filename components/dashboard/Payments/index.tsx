import React from "react";
import { format } from "date-fns";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
const payments = [
	{
		id: 1,
		tenant: "Berke",
		address: "3rd Floor",
		transactionID: "01JZQN1Z1J5CCM9HK219N8QNCG",
		date: "12/13/2024",
		amount: "$4083.13",
	},
	{
		id: 2,
		tenant: "Georgine",
		address: "20th Floor",
		transactionID: "01JZQN1Z1MVN7N4T65X1TK415E",
		date: "10/4/2024",
		amount: "$2751.11",
	},
	{
		id: 3,
		tenant: "Theodoric",
		address: "Apt 336",
		transactionID: "01JZQN1Z1N9Z7F4F453HVT924A",
		date: "4/2/2025",
		amount: "$1080.14",
	},
	{
		id: 4,
		tenant: "Amalea",
		address: "Suite 18",
		transactionID: "01JZQN1Z1QCDS9M4T2AP4X7EVR",
		date: "8/18/2024",
		amount: "$3101.43",
	},
	{
		id: 5,
		tenant: "Noami",
		address: "Room 1043",
		transactionID: "01JZQN1Z1RH1Y2F7BYYZ3HJKSX",
		date: "1/27/2025",
		amount: "$4522.00",
	},
	{
		id: 6,
		tenant: "Barny",
		address: "PO Box 86716",
		transactionID: "01JZQN1Z1SB04JXAVTJWJCYBGV",
		date: "5/26/2025",
		amount: "$3029.22",
	},
	{
		id: 7,
		tenant: "Vikki",
		address: "Room 583",
		transactionID: "01JZQN1Z1SSMSMDR9S0HGRQSV3",
		date: "7/1/2025",
		amount: "$2102.39",
	},
	{
		id: 8,
		tenant: "Holden",
		address: "Apt 1214",
		transactionID: "01JZQN1Z1VWT46N3PBH8DQG4HA",
		date: "2/17/2025",
		amount: "$4524.07",
	},
	{
		id: 9,
		tenant: "Ede",
		address: "Room 715",
		transactionID: "01JZQN1Z1WC8XYXR1R4BT3XQ2V",
		date: "12/18/2024",
		amount: "$3311.82",
	},
	{
		id: 10,
		tenant: "Adelaide",
		address: "Suite 87",
		transactionID: "01JZQN1Z1YR22S4J9HG30HACC9",
		date: "7/24/2024",
		amount: "$2782.11",
	},
];

const Payments = () => {
	return (
		<Table className="">
			<TableHeader>
				<TableRow>
					<TableHead>Tenant</TableHead>
					<TableHead>Address</TableHead>
					<TableHead>Transaction ID</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Amount</TableHead>
					<TableHead>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{payments.map((payment) => (
					<TableRow key={payment.id}>
						<TableCell className="font-medium">
							{payment.tenant}
						</TableCell>
						<TableCell className="font-medium">
							{payment.address}
						</TableCell>
						<TableCell>{payment.transactionID}</TableCell>
						<TableCell>
							{format(new Date(), "MMMM do, yyyy")}
						</TableCell>

						<TableCell>{payment.amount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow></TableRow>
			</TableFooter>
		</Table>
	);
};

export default Payments;
