"use client";
import React, {FunctionComponent, useState} from "react";
import {authSchema} from "@/lib/validations/auth";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {Form,} from "@/ui/form";
import {Button} from "@/ui/button";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import Link from "next/link";
import {Icons} from "@/components/icons";
import {CustomInput} from "@/atoms/forms/CustomInput";

// import { useForm, SubmitHandler } from "react-hook-form"
interface OwnProps {
}

type Props = OwnProps;
type SignInFormValues = z.infer<typeof authSchema>;
const defaultValues: Partial<SignInFormValues> = {
    // name: "Your name",
    // email: "Email",
};
const Login: FunctionComponent<Props> = (props) => {
    const router: AppRouterInstance = useRouter();
    const [visible, setVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<Boolean>(false);
    const form = useForm<SignInFormValues>({
        resolver: zodResolver(authSchema),
        defaultValues,
    });

    function onSubmit(data: SignInFormValues) {
        console.log(data);
        toast.custom((t) => (
            <pre className="mt-2 w-[440px] rounded-md bg-slate-700 p-4">
				<code className="text-white">
					{JSON.stringify(data, null, 2)}
				</code>
			</pre>
        ));
        router.push("/dashboard");
    }

    return (
        <>
            {/* <div className="space-y-1"></div> */}
            <p className={"text-center "}>Login</p>
            <p className="text-2xl text-center">Welcome Back</p>
            <div className="grid gap-4">
                <div className="grid  gap-6">
                    {/* <Button
                        variant="outline"
                        className={"w-[250px] md:w-[300px] mx-auto"}>
                        <Icons.google className="mr-2 h-4 w-4"/>
                        Google
                    </Button> */}
                </div>
                <div className="relative">
                    <div className="relative flex flex-col justify-center text-xs  items-center align-middle">
						<span className=" text-center px-2 text-muted-foreground uppercase">
							Or continue with
						</span>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className=" mx-auto mb-0 mt-8 w-full space-y-4">
                                <CustomInput
                                    form={form}
                                    type="email"
                                    label={"Email"}
                                    placeholder={"John@email.com"}
                                    name={"email"}
                                />
                                <CustomInput
                                    form={form}
                                    type="password"
                                    label={"Password"}
                                    placeholder={"xxxxxx"}
                                    name={"password"}
                                />
                                {/*<PasswordStrengthBar*/}
                                {/*    password={form.getValues("password")}*/}
                                {/*    barColors={[*/}
                                {/*        "#ddd",*/}
                                {/*        "#ef4836",*/}
                                {/*        "#f8b54c",*/}
                                {/*        "#2b90ef",*/}
                                {/*        "#15A112",*/}
                                {/*    ]}*/}
                                {/*/>*/}
                                <Link
                                    href={"/forgot-password"}
                                    className={
                                        "text-indigo-600 hover:underline text-start"
                                    }>
                                    <p>Forgot Password</p>
                                </Link>
                                <Button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 hover:underline">
                                    Login
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
                <p className={"text-sm text-center"}>
                    Not registered?{" "}
                    <Link
                        href={"/sign-up"}
                        className={"text-indigo-600 hover:text-indigo-500"}>
                        Create account
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;
