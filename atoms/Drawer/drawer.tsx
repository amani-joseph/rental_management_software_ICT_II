"use client";
import React, { FunctionComponent, ReactNode } from "react";
import { Button } from "@/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { Separator } from "@/ui/separator";
import { ScrollArea } from "@/ui/scroll-area";
import Link from "next/link";
import {
	communicationMenuItems,
	dashboardMenuItems,
	paymentMenuItems,
	settingsMenuItems,
} from "@/components/Sidebar/sidearMenuItems";
import { usePathname, useRouter } from "next/navigation";

interface OwnProps {}

type Props = OwnProps;

const Drawer: FunctionComponent<Props> = () => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className={"bg-none "} variant={"ghost"}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={"left"} className={"w-[250px] p-0 "}>
				<SheetHeader>
					<SheetTitle>
						<Image
							src={Logo}
							alt="Logo"
							priority
							className={"ml-4 h-auto w-[180px]"}
						/>
					</SheetTitle>
					<SheetDescription>
						<Separator />
					</SheetDescription>
				</SheetHeader>

				<ScrollArea className={"max-h-[88vh] rounded"}>
					<div className="space-y-2 py-4">
						<div className="px-3 py-2">
							<div className="flex flex-col space-y-1">
								{dashboardMenuItems.map(
									(item: any, i: number): ReactNode => {
										return (
											<SheetClose
												key={`${item.heading}_${i}`}
												asChild>
												<Link
													href={item.link}
													className="w-full flex flex-row items-center gap-2">
													<Button
														variant={
															pathname ===
															item.link
																? "secondary"
																: "ghost"
														}
														className={`w-full justify-start 
                                            ${
												pathname === item.link
													? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400"
													: "bg-none hover:bg-indigo-100"
											}`}>
														{
															<item.icon className="mr-2 h-4 w-4" />
														}
														{item.heading}
													</Button>
													{pathname === item.link ? (
														<div className="h-9 w-1 rounded-lg bg-indigo-500"></div>
													) : null}
												</Link>
											</SheetClose>
										);
									}
								)}
							</div>
						</div>

						<div className="px-3 py-2">
							<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
								Payments
							</h2>
							<div className="space-y-1">
								{paymentMenuItems.map(
									(item: any, i: number): ReactNode => {
										return (
											<SheetClose
												key={`${item.heading}_${i}`}
												asChild>
												<Link
													href={item.link}
													className="w-full flex flex-row items-center gap-2">
													<Button
														variant={
															pathname ===
															item.link
																? "secondary"
																: "ghost"
														}
														className={`w-full justify-start 
                                            ${
												pathname === item.link
													? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400"
													: "bg-none hover:bg-indigo-100"
											}`}>
														{
															<item.icon className="mr-2 h-4 w-4" />
														}
														{item.heading}
													</Button>
													{pathname === item.link ? (
														<div className="h-9 w-1 rounded-lg bg-indigo-500"></div>
													) : null}
												</Link>
											</SheetClose>
										);
									}
								)}
							</div>
						</div>
						<div className="px-3 py-2">
							<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
								Communications
							</h2>
							<div className="space-y-1">
								{communicationMenuItems.map(
									(item: any, i: number): ReactNode => {
										return (
											<SheetClose
												key={`${item.heading}_${i}`}
												asChild>
												<Link
													href={item.link}
													className="w-full flex flex-row items-center gap-2">
													<Button
														variant={
															pathname ===
															item.link
																? "secondary"
																: "ghost"
														}
														className={`w-full justify-start 
                                            ${
												pathname === item.link
													? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400"
													: "bg-none hover:bg-indigo-100"
											}`}>
														{
															<item.icon className="mr-2 h-4 w-4" />
														}
														{item.heading}
													</Button>
													{pathname === item.link ? (
														<div className="h-9 w-1 rounded-lg bg-indigo-500"></div>
													) : null}
												</Link>
											</SheetClose>
										);
									}
								)}
							</div>
						</div>
						<div className="px-3 py-2">
							<h2 className="relative px-7 text-lg font-semibold tracking-tight">
								Settings
							</h2>
							<div className="space-y-1">
								{settingsMenuItems.map(
									(item: any, i: number): ReactNode => {
										return (
											<SheetClose
												key={`${item.heading}_${i}`}
												asChild>
												<Link
													href={item.link}
													className="w-full flex flex-row items-center gap-2">
													<Button
														variant={
															pathname ===
															item.link
																? "secondary"
																: "ghost"
														}
														className={`w-full justify-start 
                                            ${
												pathname === item.link
													? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400"
													: "bg-none hover:bg-indigo-100"
											}`}>
														{
															<item.icon className="mr-2 h-4 w-4" />
														}
														{item.heading}
													</Button>
													{pathname === item.link ? (
														<div className="h-9 w-1 rounded-lg bg-indigo-500"></div>
													) : null}
												</Link>
											</SheetClose>
										);
									}
								)}
							</div>
						</div>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

export default Drawer;
