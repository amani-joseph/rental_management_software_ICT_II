import React, {FunctionComponent} from 'react';
import {Eye, EyeOff} from "lucide-react";
import {cn} from "@/lib/utils";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/ui/tooltip";

interface OwnProps {
    className?: string | undefined;
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    props?: any
}

type Props = OwnProps;

const ShowPassword: FunctionComponent<Props> = ({className, visible, setVisible, ...props}) => {

    const handleChangeType = (): void => {
        setVisible(!visible)
    }

    return (

        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        {visible ? (
                                <EyeOff onClick={() => handleChangeType()}
                                        className={cn(" h-4 w-4 cursor-pointer", className)}/>) :
                            <Eye onClick={() => handleChangeType()}
                                 className={cn(" h-4 w-4 cursor-pointer", className)}/>}
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{visible ? "Hide " : "Show"}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>


    )

};

export default ShowPassword;
