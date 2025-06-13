import {FC} from "react";
import Logo from '../../public/Logo.svg'
import Image from "next/image";
import {SidearMenuItems} from "@/components/Sidebar/sidearMenuItems";
import {PropertySelect} from "@/components/PropertySelect";

interface SideBarProps {

}

const SideBar: FC<SideBarProps> = ({}) => {

    return (
        <div className="flex flex-col space-y-2 w-full h-full first:divide-y divide-indigo-100">
            <Image src={Logo} alt="Logo" priority className={"ml-4 my-[6px] h-auto w-[180px]"}/>
            {/*<Separator/>*/}
            <div className={'my-4 block md:hidden'}>
                <PropertySelect/>
            </div>
            <SidearMenuItems/>
        </div>
    );
}

export default SideBar;