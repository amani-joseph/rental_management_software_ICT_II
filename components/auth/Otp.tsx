"use client";

import React, {FC, useEffect, useState} from "react";
import Link from "next/link";

interface OtpProps {
}

const Otp: FC<OtpProps> = () => {
    const [otp, setOtp] = useState("");
    useEffect(() => {
        console.log(otp)
    }, [otp]);


    return (
        <div className={"text-slate-900 min-h-[50vh]"}>

            <Link href={"/login"} className={"text-indigo-600 hover:underline text-center"}>
                <p>
                    Back to login
                </p>
            </Link>
        </div>
    );
};

export default Otp;
