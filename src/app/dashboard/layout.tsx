import "@/styles/globals.css";
import { inter, montserrat, poppins, raleway } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import DashboardNavbar from "@/components/Top-nav/DashboardNavbar";
import SideBar from "@/components/Sidebar/sideBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
	title: "RMS",
	description: "rms app",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-col p-4 ">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
