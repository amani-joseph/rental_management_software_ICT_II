"use client";

import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import React from "react";
import {Input} from "@/ui/input";
import {ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight, ArrowBigRightDash} from "lucide-react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const table = useReactTable(
        {
            data,
            columns,
            state: {
                sorting,
                columnVisibility,
                rowSelection,
                columnFilters,
            },
            enableRowSelection: true,
            onRowSelectionChange: setRowSelection,
            onSortingChange: setSorting,
            onColumnFiltersChange: setColumnFilters,
            onColumnVisibilityChange: setColumnVisibility,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFacetedRowModel: getFacetedRowModel(),
            getFacetedUniqueValues: getFacetedUniqueValues(),
        });

    return (
        <div className="rounded-md border">
            <Table className={`overflow-x-hidden `}>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef
                                                    .header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex items-center gap-2 px-2 text-gray-600">
                <button
                    className={`border rounded p-1 hover:text-gray-800 ${!table.getCanPreviousPage() ? "text-gray-300 hover:text-gray-300" : ""} `}
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ArrowBigLeftDash/>
                </button>
                <button
                    className={`border rounded p-1 hover:text-gray-800 ${!table.getCanPreviousPage() ? "text-gray-300 hover:text-gray-300" : ""} `}
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ArrowBigLeft/>
                </button>
                <button
                    className={`border rounded p-1 hover:text-gray-800 ${!table.getCanNextPage() ? "text-gray-300 hover:text-gray-300" : ""} `}
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ArrowBigRight/>
                </button>
                <button
                    className={`border rounded p-1 hover:text-gray-800 ${!table.getCanNextPage() ? "text-gray-300 hover:text-gray-300" : ""} `}
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <ArrowBigRightDash/>
                </button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                      <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                          {table.getPageCount()}
                      </strong>
                </span>
                <span className="flex items-center gap-1">
          | Go to page:
          <Input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
              }}
              className="border p-1 rounded w-16"
          />
        </span>

                <select
                    className={"rounded border border-border"}
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize} className={" my-2 text-center hover:bg-indigo-500 "}>
                            {pageSize}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    );
}
