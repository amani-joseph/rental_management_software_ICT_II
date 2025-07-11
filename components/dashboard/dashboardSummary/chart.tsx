"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Monthly Rental cashflows";

const chartData = [
	{ month: "January", rent: 4000 },
	{ month: "February", rent: 3500 },
	{ month: "March", rent: 5600 },
	{ month: "April", rent: 6000 },
	{ month: "May", rent: 8000 },
	{ month: "June", rent: 9050 },
	{ month: "July", rent: 8500 },
	{ month: "August", rent: 12000 },
	{ month: "September", rent: 12500 },
];

const chartConfig = {
	rent: {
		label: "rent",
		color: "var(--chart-1)",
	},
} satisfies ChartConfig;

export function ChartBarLabel() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Rental Summary</CardTitle>
				<CardDescription>January - June 2025</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						className="text-purple-500 "
						data={chartData}
						margin={{
							top: 20,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="rent" fill="#8884d8" radius={8}>
							<LabelList
								position="top"
								offset={12}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 leading-none font-medium">
					Trending up by 5.2% this month{" "}
					<TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
