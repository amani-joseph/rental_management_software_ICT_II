import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {Input} from "@/ui/input";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/ui/form";
import {Control, FieldErrors, UseFormReturn} from "react-hook-form";
import ShowPassword from "@/atoms/forms/ShowPassword";

interface OwnProps {
    name: string;
    type: string;
    label: string;
    form: UseFormReturn<any>;
    errors?: FieldErrors<any>;
    placeholder?: string;
    autofocus?: boolean;
    autoCapitalize?: string;
    autocomplete?: string;
    autoCorrect?: string;
    description?: string;
}

type Props = OwnProps;

// @ts-ignore
export interface CustomInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: string;
    label: string;
    className?: string;
    form: UseFormReturn<any>;
    errors?: FieldErrors<any>;
    placeholder?: string | undefined;
    autofocus?: boolean;
    autoCapitalize?: string;
    autocomplete?: string;
    autoCorrect?: string;
    description?: string | undefined;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    ({className, type = "text", ...props}, ref) => {
        const [visible, setVisible] = useState<boolean>(false);
        const {name, label, description} = props;
        const {formState} = props.form;
        const {errors} = formState;
        const control: Control<any, any> = props.form.control;
        return (
            <FormField
                control={control}
                name={name}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <div className={"relative w-full"}>
                                <Input
                                    type={
                                        type !== "password"
                                            ? type
                                            : visible
                                                ? "text"
                                                : "password"
                                    }
                                    {...field}
                                    placeholder={props.placeholder}
                                    autoCapitalize={props.autoCapitalize}
                                    autoComplete={props.autocomplete}
                                    autoCorrect={props.autoCorrect}
                                    className={cn(
                                        `${
                                            errors[name]
                                                ? " border border-destructive "
                                                : "border-accent"
                                        }`,
                                        className
                                    )}
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
									{type === "password" ? (
                                        <ShowPassword
                                            setVisible={setVisible}
                                            visible={visible}
                                        />
                                    ) : null}
								</span>
                            </div>
                        </FormControl>
                        <FormDescription>{description}</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        );
    }
);
CustomInput.displayName = "Custom Input";

export {CustomInput};
