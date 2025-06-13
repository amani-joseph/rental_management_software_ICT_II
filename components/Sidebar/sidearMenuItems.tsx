"use client"
import React, {ReactNode} from "react";
import {
    Banknote,
    Building,
    CircleDollarSign,
    Construction,
    FileText,
    HardHat,
    LayoutDashboard,
    ListChecks,
    LucideIcon,
    Mail,
    MailWarning,
    ScrollText,
    Settings,
    Users
} from 'lucide-react';
import {Button} from "@/components/ui/button"
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {ScrollArea} from "@/ui/scroll-area";

type MenuItem = {
    icon: LucideIcon,
    heading: string,
    link: string,
    dropdown?: [MenuItem]
}
export const dashboardMenuItems = [
    {
        icon: LayoutDashboard,
        heading: "Dashboard",
        link: "/dashboard",
    },
    {
        icon: Building,
        heading: "Properties",
        link: "/dashboard/property-details",
    },
    {
        icon: Users,
        heading: "Tenants",
        link: "/dashboard/tenants",
    },
    {
        icon: Construction,
        heading: "Maintenance",
        link: "/dashboard/maintenance",
    },


];
export const communicationMenuItems = [
    {
        icon: MailWarning,
        heading: "Complaints",
        link: "/dashboard/complaints",
    },
    {
        icon: Mail,
        heading: "Email",
        link: "/dashboard/email",
    },
    {
        icon: ScrollText,
        heading: "Waiting List",
        link: "/dashboard/waitingList",
    },
    {
        icon: ListChecks,
        heading: "Surveys",
        link: "/dashboard/surveys",
    },
    {
        icon: FileText,
        heading: "Reports",
        link: "/dashboard/reports",
    },


];
export const paymentMenuItems = [
    {
        icon: CircleDollarSign,
        heading: "Payins",
        link: "/dashboard/payins",
    },
    {
        icon: Banknote,
        heading: "Payouts",
        link: "/dashboard/payouts",
    },
    {
        icon: ListChecks,
        heading: "Invoices",
        link: "/dashboard/invoices",
    },
];
export const settingsMenuItems = [
    {
        icon: HardHat,
        heading: "Staff",
        link: "/dashboard/staff",
    },

    {
        icon: Settings,
        heading: "Settings",
        link: "/dashboard/settings",
    },
];


export const SidearMenuItems: React.FC<{}> = props => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <ScrollArea className={"max-h-[88vh] "}>
            <div className="space-y-2 py-4">
                <div className="px-3 py-2">
                    <div className="flex flex-col space-y-1">
                        {dashboardMenuItems.map((item: any, i: number): ReactNode => {
                            return (

                                <Link key={`${item.heading}_${i}`} href={item.link}
                                      className="w-full flex flex-row items-center gap-2">
                                    <Button variant={pathname ===
                                    item.link ? "secondary" : "ghost"}
                                            className={`w-full justify-start 
                                            ${pathname === item.link ? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400" : "bg-none hover:bg-indigo-100"}`}>
                                        {<item.icon className="mr-2 h-4 w-4"/>}
                                        {item.heading}
                                    </Button>
                                    {pathname === item.link ? (
                                        <div className="h-9 w-1 rounded-lg bg-indigo-500"></div>) : null}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Payments
                    </h2>
                    <div className="space-y-1">
                        {paymentMenuItems.map((item: any, i: number): ReactNode => {
                            return (
                                <Link key={`${item.heading}_${i}`} href={item.link}
                                      className="w-full flex flex-row items-center gap-2">
                                    <Button variant={pathname ===
                                    item.link ? "secondary" : "ghost"}
                                            className={`w-full justify-start 
                                            ${pathname === item.link ? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400" : "bg-none hover:bg-indigo-100"}`}>
                                        {<item.icon className="mr-2 h-4 w-4"/>}
                                        {item.heading}
                                    </Button>
                                    {pathname === item.link ? (
                                        <div className="h-9 w-1 rounded-lg bg-indigo-500"></div>) : null}
                                </Link>
                            )
                        })}

                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Communications
                    </h2>
                    <div className="space-y-1">
                        {communicationMenuItems.map((item: any, i: number): ReactNode => {
                            return (
                                <Link key={`${item.heading}_${i}`} href={item.link}
                                      className="w-full flex flex-row items-center gap-2">
                                    <Button variant={pathname ===
                                    item.link ? "secondary" : "ghost"}
                                            className={`w-full justify-start 
                                            ${pathname === item.link ? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400" : "bg-none hover:bg-indigo-100"}`}>
                                        {<item.icon className="mr-2 h-4 w-4"/>}
                                        {item.heading}
                                    </Button>
                                    {pathname === item.link ? (
                                        <div className="h-9 w-1 rounded-lg bg-indigo-500"></div>) : null}
                                </Link>
                            )
                        })}

                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                        Settings
                    </h2>
                    <div className="space-y-1">
                        {settingsMenuItems.map((item: any, i: number): ReactNode => {
                            return (
                                <Link key={`${item.heading}_${i}`} href={item.link}
                                      className="w-full flex flex-row items-center gap-2">
                                    <Button variant={pathname ===
                                    item.link ? "secondary" : "ghost"}
                                            className={`w-full justify-start 
                                            ${pathname === item.link ? "bg-indigo-100 hover:bg-indigo-100 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-400" : "bg-none hover:bg-indigo-100"}`}>
                                        {<item.icon className="mr-2 h-4 w-4"/>}
                                        {item.heading}
                                    </Button>
                                    {pathname === item.link ? (
                                        <div className="h-9 w-1 rounded-lg bg-indigo-500"></div>) : null}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
};
