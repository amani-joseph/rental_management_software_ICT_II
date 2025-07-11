"use client";

import * as React from "react";
import {
	ArrowUpCircleIcon,
	BarChartIcon,
	CameraIcon,
	ClipboardListIcon,
	DatabaseIcon,
	FileCodeIcon,
	FileIcon,
	FileTextIcon,
	FolderIcon,
	HelpCircleIcon,
	LayoutDashboardIcon,
	ListIcon,
	LogOutIcon,
	SearchIcon,
	SettingsIcon,
	UsersIcon,
	Construction,
	Mail,
	CreditCard,
	Users,
} from "lucide-react";
import Logo from "@/public/Logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./ui/button";
const data = {
	user: {
		name: "user x",
		email: "user@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Analytics",
			url: "/dashboard/",
			icon: BarChartIcon,
		},
		{
			title: "Tenants",
			url: "/dashboard/tenants",
			icon: Users,
		},
		{
			title: "Properties",
			url: "/dashboard/properties",
			icon: LayoutDashboardIcon,
		},
		{
			title: "Payment",
			url: "/dashboard/payments",
			icon: CreditCard,
		},
		{
			title: "Communications",
			url: "/dashboard/communications",
			icon: Mail,
		},
		{
			title: "Maintenance",
			url: "/dashboard/maintenance",
			icon: Construction,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5">
							<a href="/dashboard/">
								<span className="text-base font-semibold">
									<Image
										src={Logo}
										alt={"Logo"}
										width={200}
										height={100}
									/>
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavDocuments items={data.documents} /> */}
				{/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
			</SidebarContent>
			<SidebarFooter>
				<Button variant={"default"} className="bg-red-600">
					{" "}
					<LogOutIcon />
					Log out
				</Button>
				{/* <NavUser user={data.user} /> */}
			</SidebarFooter>
		</Sidebar>
	);
}
