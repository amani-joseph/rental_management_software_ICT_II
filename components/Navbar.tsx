import React, {FunctionComponent} from 'react';
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import {Button} from "@/ui/button";

interface OwnProps {
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {

    return (
        <div
            className={"container absolute top-2 right-[25%] max-w-6xl flex flex-row align-middle items-center space-x-2 justify-between  py-2 px-6 rounded-3xl bg-gradient-to-br from-indigo-100 to-background backdrop-blur"}>
            <Image src={Logo} alt="Logo" className={"h-[50px] w-[200px]"}/>
            <div className={"container flex flex-row align-middle items-center space-x-2  justify-end"}>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
};

export default Navbar;
