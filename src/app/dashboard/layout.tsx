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

import data from "./data.json";

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
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							{/* <SectionCards /> */}
							{/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div> */}
							{/* <DataTable data={data} /> */}
							{children}
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
