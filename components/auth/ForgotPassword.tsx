"use client";
import React, {FunctionComponent} from 'react';
import {CustomInput} from "@/atoms/forms/CustomInput";
import {Button} from "@/ui/button";
import {Form} from "@/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {checkEmailSchema} from "@/lib/validations/auth";
import * as z from "zod";
import toast from "react-hot-toast";

interface OwnProps {
}

type Props = OwnProps;
type ForgotEmailValue = z.infer<typeof checkEmailSchema>;
const defaultValues: Partial<ForgotEmailValue> = {
    email: "",
};
const ForgotPassword: FunctionComponent<Props> = (props) => {
    const form = useForm<ForgotEmailValue>({
        resolver: zodResolver(checkEmailSchema),
        defaultValues,
    });

    function onSubmit(data: ForgotEmailValue) {
        console.log(data);
        toast.custom((t) => (
            <pre className="mt-2 w-[440px] rounded-md bg-slate-700 p-4">
				<code className="text-white">
					{JSON.stringify(data, null, 2)}
				</code>
			</pre>
        ));
    }

    return (
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

                <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 hover:underline">
                    Request Reset link
                </Button>
            </form>
        </Form>
    );
};

export default ForgotPassword;
