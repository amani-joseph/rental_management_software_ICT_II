"use client"

import {ColumnDef} from "@tanstack/react-table"
import {DataTableColumnHeader} from "@/atoms/tables/data-table-column-header";
import {DataTableRowActions} from "@/atoms/tables/data-table-row-actions";
import {Checkbox} from "@/ui/checkbox";
import {InvoiceType} from "@/components/dashboard/Invoices/InvoicesTable/schema";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const InvoiceColumns: ColumnDef<InvoiceType>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Invoice"/>
        ),
        cell: ({row}) => <div className="min-w-[100px] truncate">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Description"/>
        ),
        cell: ({row}) => {

            return (
                <div className="max-w-[auto] min-w-[300px] truncate font-medium space-x-2">
                    {row.getValue("title")}
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Status"/>
        ),
        cell: ({row}) => {

            return (
                <div className="max-w-[auto] font-medium space-x-2">
                    {row.getValue("status")}
                </div>
            )
        },
        //     ({row}) => {
        //     const status = statuses.find(
        //         (status) => status.value === row.getValue("status")
        //     )
        //
        //     if (!status) {
        //         return null
        //     }
        //
        //     return (
        //         <div className="flex w-[100px] items-center">
        //             {status.icon && (
        //                 <status.icon className="mr-2 h-4 w-4 text-muted-foreground"/>
        //             )}
        //             <span>{status.label}</span>
        //         </div>
        //     )
        // },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "amount",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Amount"/>
        ),
        cell: ({row}) => {
            return (
                <div className="flex items-center">
                    <span>{row.getValue("amount")}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Action"/>
        ),
        cell: ({row}) => <DataTableRowActions row={row}/>,
    },
]