import React, {FunctionComponent} from 'react';
import Link from "next/link";

interface OwnProps {
}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {

    return (
        <div className={"text-slate-900 min-h-[50vh]"}>
            <div>Change password</div>
            <Link href={"/login"} className={"text-indigo-600 hover:underline text-center"}>
                <p>
                    Back to login
                </p>
            </Link>
        </div>
    );
};

export default page;
