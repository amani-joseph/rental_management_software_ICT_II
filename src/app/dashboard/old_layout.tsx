import "@/styles/globals.css"
import {inter, montserrat, poppins, raleway} from "@/lib/fonts"
import {cn} from "@/lib/utils";
import DashboardNavbar from "@/components/Top-nav/DashboardNavbar";
import SideBar from "@/components/Sidebar/sideBar";
import {ScrollArea} from "@/components/ui/scroll-area";


export const metadata = {
    title: 'Spaces App',
    description: 'Generated by create next app',
}

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className={cn(
                    "min-h-screen flex flex-row divide-x divide-indigo-100 bg-background text-slate-900 antialiased border-separate !scroll-smooth",
                    poppins.variable,
                    inter.variable,
                    montserrat.variable,
                    raleway.variable
                )}
            >
                <div className={"min-h-screen w-[300px] hidden lg:block"}>
                    <SideBar/>
                </div>
                <div className="min-h-[80dvh] flex flex-col  w-full divide-y divide-indigo-100">
                    <div className="">
                        <DashboardNavbar/>
                    </div>
                    <ScrollArea className={"max-h-[90vh] "}>
                        <div className="w-[100%] h-[100%] flex  flex-row">
                            {children}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </>

    )
}
