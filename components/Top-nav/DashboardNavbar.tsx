"use client"
import React, {FC} from "react";
import Image from "next/image";
import Logo from "@/public/mobile-logo.svg";
import {PropertySelect} from "@/components/PropertySelect";
import {ProfileMenu} from "@/components/Top-nav/ProfileMenu";
import {NotificationsMenu} from "@/components/Top-nav/NotifiactionsMenu";
import Drawer from "@/atoms/Drawer/drawer";


interface NavbarProps {

}

const DashboardNavbar: FC<NavbarProps> = (): JSX.Element => {


    return (
        <div className=" w-full  top-0 flex flex-row justify-between   items-center py-2">
            <div className="flex flex-row items-center">
                <div className={"lg:hidden"}>
                    <Drawer/>
                </div>
                <Image src={Logo}
                       alt="Logo"
                    // placeholder='blur'
                       className={"md:hidden h-auto w-10 sm:w-12 mx-2"}/>
                <div className={'mx-2 hidden md:inline'}>
                    <PropertySelect/>
                </div>
            </div>
            <div className="flex flex-row space-x-2 items-center align-middle p-2">
                <div className="flex flex-row space-x-2 items-center align-middle">
                    <NotificationsMenu/>
                    <ProfileMenu/>
                </div>
            </div>
        </div>);
}

export default DashboardNavbar;