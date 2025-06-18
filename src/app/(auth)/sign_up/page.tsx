import React, { FunctionComponent } from "react";
import SignUp from "@/components/auth/Sign-up";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
	return <SignUp />;
};

export default page;
