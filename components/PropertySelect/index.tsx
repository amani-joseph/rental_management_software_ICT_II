import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function PropertySelect() {
    return (
        <Select>
            <SelectTrigger className="w-[145px] md:w-[180px]">
                <SelectValue placeholder="Select Property"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Properties</SelectLabel>
                    <SelectItem value="property_1">Property 1</SelectItem>
                    <SelectItem value="property_2">Property 2</SelectItem>
                    <SelectItem value="property_3">Property 3</SelectItem>
                    <SelectItem value="property_4">Property 4</SelectItem>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
