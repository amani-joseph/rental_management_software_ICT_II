import React, {FunctionComponent} from 'react';
import Login from "@/components/auth/Login";

interface OwnProps {
}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {

    return (
        <Login/>
    );
};

export default page;
