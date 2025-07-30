"use client";
import React, { FC } from "react";
import { Button } from "@/ui/button";
import { Icons } from "@/components/icons";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { Form } from "@/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/validations/auth";
import toast from "react-hot-toast";
import { CustomInput } from "@/atoms/forms/CustomInput";
import PasswordStrengthBar from "react-password-strength-bar";
import * as z from "zod";
import Link from "next/link";
import axios from "axios";
import { log } from "console";

interface OwnProps {}

type Props = OwnProps;
type SignUpFormValues = z.infer<typeof signUpSchema>;
const defaultValues: Partial<SignUpFormValues> = {
  // name: "Your name",
  // email: "Email",
};

const baseURL = process.env.NEXT_PUBLIC_BASE_API;
const SignUp: FC<Props> = (props) => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  function onSubmit(data: SignUpFormValues) {
    console.log("URL::", `${baseURL}/auth/register`);

    console.log("###data###", data);
    axios
      .post(`${baseURL}/auth/register`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.detail);
        toast.error(err.response.data.detail);
      });
  }

  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          Create an account
        </CardTitle>
        <CardDescription className={"text-center"}>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid  gap-6">
          {/* <Button variant="outline">
                        <Icons.google className="mr-2 h-4 w-4"/>
                        Google
                    </Button> */}
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            {/* <span className="bg-background px-2 text-muted-foreground">
							Or continue with
						</span> */}
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" mx-auto mb-0 mt-8 w-full space-y-4"
          >
            <div className={"flex flex-col md:flex-row gap-4  justify-between"}>
              <div className="grid gap-2 w-full md:w-1/2">
                <CustomInput
                  form={form}
                  type="text"
                  label={"First Name"}
                  placeholder={"John"}
                  name={"firstName"}
                />
              </div>
              <div className="grid gap-2  w-full md:w-1/2">
                <CustomInput
                  form={form}
                  type="text"
                  label={"Surname"}
                  placeholder={"Doe"}
                  name={"surname"}
                />
              </div>
              <div className="grid gap-2  w-full md:w-1/2">
                <CustomInput
                  form={form}
                  type="text"
                  label={"Other Name"}
                  placeholder={"Smith"}
                  name={"otherName"}
                  description={"(optional)"}
                />
              </div>
            </div>
            <CustomInput
              form={form}
              type="email"
              label={"Email"}
              placeholder={"John@email.com"}
              name={"email"}
            />
            {/*<div*/}
            {/*    className={*/}
            {/*        "flex flex-col md:flex-row gap-4  justify-between"*/}
            {/*    }>*/}
            {/*    <div className="grid gap-2 w-full md:w-1/2">*/}

            {/*    </div>*/}
            {/*    <div className="grid gap-2  w-full md:w-1/2">*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className="grid gap-2">
              <CustomInput
                form={form}
                type="tel"
                label={"Phone"}
                placeholder={"+1 (222) 333 444"}
                name={"phone"}
              />
              <div className={"flex flex-col "}>
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
              </div>
            </div>
            <div className="grid gap-2">
              <CustomInput
                form={form}
                type="password"
                label={"Confirm Password"}
                placeholder={"xxxxxx"}
                name={"confirmPassword"}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500"
            >
              Create Account
            </Button>
          </form>
        </Form>
        <p className={"text-sm text-center"}>
          Already have an account?{" "}
          <Link
            href={"/login"}
            className={"text-indigo-600 hover:text-indigo-500"}
          >
            Login
          </Link>
        </p>
      </CardContent>
    </>
  );
};

export default SignUp;
