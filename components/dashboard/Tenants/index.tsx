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
const tenants = [
	{
		id: 1,
		email: "alice@example.com",
		phone: "+61412345678",
		status: "active",
		leaseStart: "2024-01-01T00:00:00.000Z",
		leaseEnd: "2025-01-01T00:00:00.000Z",
		monthlyRent: 1800,
	},
	{
		id: 2,
		email: "bob@example.com",
		phone: "0412345678",
		status: "inactive",
		leaseStart: "2023-06-15T00:00:00.000Z",
		leaseEnd: "2024-06-15T00:00:00.000Z",
		monthlyRent: 1500,
	},
	{
		id: 3,
		email: "carol@example.net",
		phone: "+61234567890",
		status: "pending",
		leaseStart: "2024-07-01T00:00:00.000Z",
		leaseEnd: "2025-06-30T00:00:00.000Z",
		monthlyRent: 2000,
	},
	{
		id: 4,
		email: "daniel@example.org",
		phone: "+61487654321",
		status: "active",
		leaseStart: "2023-08-01T00:00:00.000Z",
		leaseEnd: "2024-08-01T00:00:00.000Z",
		monthlyRent: 1750,
	},
	{
		id: 5,
		email: "eve@example.com",
		phone: "0423456789",
		status: "terminated",
		leaseStart: "2022-09-01T00:00:00.000Z",
		leaseEnd: "2023-09-01T00:00:00.000Z",
		monthlyRent: 1600,
	},
	{
		id: 6,
		email: "frank@example.com",
		phone: "+61345678901",
		status: "active",
		leaseStart: "2024-04-01T00:00:00.000Z",
		leaseEnd: "2025-04-01T00:00:00.000Z",
		monthlyRent: 1900,
	},
	{
		id: 7,
		email: "grace@example.org",
		phone: "0499123456",
		status: "inactive",
		leaseStart: "2023-11-01T00:00:00.000Z",
		leaseEnd: "2024-11-01T00:00:00.000Z",
		monthlyRent: 1650,
	},
	{
		id: 8,
		email: "henry@example.net",
		phone: "+61498765432",
		status: "active",
		leaseStart: "2024-02-01T00:00:00.000Z",
		leaseEnd: "2025-02-01T00:00:00.000Z",
		monthlyRent: 1700,
	},
	{
		id: 9,
		email: "irene@example.com",
		phone: "0488123456",
		status: "pending",
		leaseStart: "2024-05-15T00:00:00.000Z",
		leaseEnd: "2025-05-14T00:00:00.0",
		monthlyRent: 4600,
	},
];

const Tenants = () => {
	return (
		<Table className="">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Email</TableHead>
					<TableHead>Phone</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Lease Start</TableHead>
					<TableHead>Lease end</TableHead>
					<TableHead className="text-right">Monthly Rent</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tenants.map((tenant) => (
					<TableRow key={tenant.id}>
						<TableCell className="font-medium">
							{tenant.email}
						</TableCell>
						<TableCell className="font-medium">
							{tenant.phone}
						</TableCell>
						<TableCell>{tenant.status}</TableCell>
						<TableCell>
							{format(new Date(), "MMMM do, yyyy")}
						</TableCell>
						<TableCell>{tenant.leaseEnd}</TableCell>
						<TableCell className="text-right">
							{tenant.monthlyRent}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow></TableRow>
			</TableFooter>
		</Table>
	);
};

export default Tenants;
