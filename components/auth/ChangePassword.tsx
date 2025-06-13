"use client";
import React, {FunctionComponent} from 'react';
import {CustomInput} from "@/atoms/forms/CustomInput";
import {Button} from "@/ui/button";
import {Form} from "@/ui/form";
import PasswordStrengthBar from "react-password-strength-bar";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {resetPasswordSchema} from "@/lib/validations/auth";
import toast from "react-hot-toast";
import * as z from "zod";

interface OwnProps {
}

type Props = OwnProps;
type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
const defaultValues: Partial<ResetPasswordFormValues> = {
    password: "",
    confirmPassword: "",
};

const ChangePassword: FunctionComponent<Props> = (props) => {
    const form = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues,
    });

    function onSubmit(data: ResetPasswordFormValues) {
        console.log(data);
        toast.custom((t) => (
            <pre className="mt-2 w-[440px] rounded-md bg-slate-700 p-4">
				<code className="text-white">
					{JSON.stringify(data, null, 2)}
				</code>
			</pre>
        ));
        // router.push("/dashboard");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" mx-auto mb-0 mt-8 w-full space-y-4">

                <CustomInput
                    form={form}
                    type="password"
                    label={"Password"}
                    placeholder={"xxxxxx"}
                    name={"password"}
                />
                <PasswordStrengthBar
                    password={form.getValues("password")}
                    barColors={[
                        "#ddd",
                        "#ef4836",
                        "#f8b54c",
                        "#2b90ef",
                        "#15A112",
                    ]}
                />
                <CustomInput
                    form={form}
                    type="confirmPassword"
                    label={"Confirm Password"}
                    placeholder={"xxxxxx"}
                    name={"confirmPassword"}
                />

                <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 hover:underline">
                    Change Password
                </Button>
            </form>
        </Form>
    );
};

export default ChangePassword;
