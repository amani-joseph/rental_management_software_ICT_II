"use client";

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon?: LucideIcon;
	}[];
}) {
	const pathname = usePathname();
	
	return (
		<SidebarGroup>
			<SidebarGroupContent className="flex flex-col gap-2">
				<SidebarMenu></SidebarMenu>
				<SidebarMenu>
					{items.map((item) => (
						<Link key={`${item.url}`} href={item.url}>
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton tooltip={item.title} 
								variant={pathname === item.url? `outline`: `default`}
								className={pathname === item.url? `border border-purple-500  text-purple-600`:``}>
									{item.icon && <item.icon />}
									<span>{item.title}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</Link>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
