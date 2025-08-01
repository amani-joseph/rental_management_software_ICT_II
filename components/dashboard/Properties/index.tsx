"use client";
import React from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Button} from "@/ui/button";
import {DialogAtom} from "@/atoms/Modal";
import {Form} from "@/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {propertySchema} from "@/lib/validations/property";
import axios from "axios";
import toast from "react-hot-toast";
import * as z from "zod";
import {CustomInput} from "@/atoms/forms/CustomInput";
const properties = [
  {
    id: 1,
    address: "12 Queen St",
    type: "Apartment",
    occupancy: "occupied",
    tenant: "James Gordon",
    leaseStart: "2024-01-01T00:00:00.000Z",
    leaseEnd: "2025-01-01T00:00:00.000Z",
    monthlyRent: 1800,
    bathroomNumber: 3,
    roomNumber: 2.5,
    carParks: 2,
    action: "View",
  },
  {
    id: 2,
    address: "45 King Rd",
    type: "Townhouse",
    occupancy: "occupied",
    tenant: "Sarah Chen",
    leaseStart: "2024-03-15T00:00:00.000Z",
    leaseEnd: "2025-03-15T00:00:00.000Z",
    monthlyRent: 2200,
    bathroomNumber: 2,
    roomNumber: 3,
    carParks: 1,
    action: "View",
  },
  {
    id: 3,
    address: "8 Victoria Ave",
    type: "Apartment",
    occupancy: "vacant",
    tenant: null,
    leaseStart: null,
    leaseEnd: null,
    monthlyRent: 1950,
    bathroomNumber: 1,
    roomNumber: 1,
    carParks: 0,
    action: "View",
  },
  {
    id: 4,
    address: "33 Main St",
    type: "House",
    occupancy: "occupied",
    tenant: "Robert Kim",
    leaseStart: "2023-11-01T00:00:00.000Z",
    leaseEnd: "2024-11-01T00:00:00.000Z",
    monthlyRent: 2800,
    bathroomNumber: 2,
    roomNumber: 4,
    carParks: 2,
    action: "View",
  },
  {
    id: 5,
    address: "19 Park Lane",
    type: "Duplex",
    occupancy: "occupied",
    tenant: "Emily Wong",
    leaseStart: "2024-02-10T00:00:00.000Z",
    leaseEnd: "2025-02-10T00:00:00.000Z",
    monthlyRent: 2400,
    bathroomNumber: 2.5,
    roomNumber: 3,
    carParks: 1,
    action: "Edit",
  },
  {
    id: 6,
    address: "7 Ocean Dr",
    type: "Apartment",
    occupancy: "occupied",
    tenant: "Michael Torres",
    leaseStart: "2024-05-20T00:00:00.000Z",
    leaseEnd: "2025-05-20T00:00:00.000Z",
    monthlyRent: 2100,
    bathroomNumber: 1,
    roomNumber: 2,
    carParks: 1,
    action: "View",
  },
  {
    id: 7,
    address: "22 Hill St",
    type: "Condo",
    occupancy: "vacant",
    tenant: null,
    leaseStart: null,
    leaseEnd: null,
    monthlyRent: 1750,
    bathroomNumber: 1,
    roomNumber: 1.5,
    carParks: 0,
    action: "View",
  },
  {
    id: 8,
    address: "5 Maple Cres",
    type: "House",
    occupancy: "occupied",
    tenant: "Jennifer Lopez",
    leaseStart: "2024-04-01T00:00:00.000Z",
    leaseEnd: "2026-04-01T00:00:00.000Z",
    monthlyRent: 3200,
    bathroomNumber: 3,
    roomNumber: 4,
    carParks: 2,
    action: "Renew",
  },
  {
    id: 9,
    address: "101 Pine Rd",
    type: "Townhouse",
    occupancy: "occupied",
    tenant: "David Smith",
    leaseStart: "2023-12-15T00:00:00.000Z",
    leaseEnd: "2024-12-15T00:00:00.000Z",
    monthlyRent: 2300,
    bathroomNumber: 2,
    roomNumber: 2.5,
    carParks: 1,
    action: "View",
  },
  {
    id: 10,
    address: "15 Bayview Blvd",
    type: "Apartment",
    occupancy: "occupied",
    tenant: "Amanda Johnson",
    leaseStart: "2024-06-01T00:00:00.000Z",
    leaseEnd: "2025-06-01T00:00:00.000Z",
    monthlyRent: 1900,
    bathroomNumber: 1,
    roomNumber: 1,
    carParks: 1,
    action: "Edit",
  },
  {
    id: 11,
    address: "28 River St",
    type: "House",
    occupancy: "vacant",
    tenant: null,
    leaseStart: null,
    leaseEnd: null,
    monthlyRent: 2600,
    bathroomNumber: 2,
    roomNumber: 3,
    carParks: 2,
    action: "View",
  },
  {
    id: 12,
    address: "3 Sunset Ave",
    type: "Condo",
    occupancy: "occupied",
    tenant: "Thomas Wright",
    leaseStart: "2024-07-01T00:00:00.000Z",
    leaseEnd: "2025-07-01T00:00:00.000Z",
    monthlyRent: 2050,
    bathroomNumber: 2,
    roomNumber: 2,
    carParks: 1,
    action: "View",
  },
  {
    id: 13,
    address: "9 Mountain Dr",
    type: "Apartment",
    occupancy: "occupied",
    tenant: "Lisa Anderson",
    leaseStart: "2024-01-15T00:00:00.000Z",
    leaseEnd: "2025-01-15T00:00:00.000Z",
    monthlyRent: 1850,
    bathroomNumber: 1,
    roomNumber: 1.5,
    carParks: 0,
    action: "View",
  },
  {
    id: 14,
    address: "47 Elm St",
    type: "Duplex",
    occupancy: "occupied",
    tenant: "Brian Miller",
    leaseStart: "2023-09-01T00:00:00.000Z",
    leaseEnd: "2024-09-01T00:00:00.000Z",
    monthlyRent: 2500,
    bathroomNumber: 2,
    roomNumber: 3,
    carParks: 2,
    action: "Renew",
  },
  {
    id: 15,
    address: "6 Oak Cir",
    type: "Townhouse",
    occupancy: "vacant",
    tenant: null,
    leaseStart: null,
    leaseEnd: null,
    monthlyRent: 2350,
    bathroomNumber: 2.5,
    roomNumber: 3,
    carParks: 1,
    action: "View",
  },
  {
    id: 16,
    address: "14 Lakeview Rd",
    type: "House",
    occupancy: "occupied",
    tenant: "Kevin Brown",
    leaseStart: "2024-08-12T00:00:00.000Z",
    leaseEnd: "2025-08-12T00:00:00.000Z",
    monthlyRent: 2900,
    bathroomNumber: 3,
    roomNumber: 4,
    carParks: 3,
    action: "View",
  },
  {
    id: 17,
    address: "21 Forest Ave",
    type: "Apartment",
    occupancy: "occupied",
    tenant: "Michelle Garcia",
    leaseStart: "2024-03-01T00:00:00.000Z",
    leaseEnd: "2025-03-01T00:00:00.000Z",
    monthlyRent: 2000,
    bathroomNumber: 2,
    roomNumber: 2,
    carParks: 1,
    action: "Edit",
  },
  {
    id: 18,
    address: "30 Cedar Ln",
    type: "Condo",
    occupancy: "occupied",
    tenant: "Daniel Wilson",
    leaseStart: "2024-05-01T00:00:00.000Z",
    leaseEnd: "2026-05-01T00:00:00.000Z",
    monthlyRent: 2250,
    bathroomNumber: 1,
    roomNumber: 1.5,
    carParks: 1,
    action: "View",
  },
  {
    id: 19,
    address: "11 Sunrise Dr",
    type: "House",
    occupancy: "vacant",
    tenant: null,
    leaseStart: null,
    leaseEnd: null,
    monthlyRent: 3100,
    bathroomNumber: 3,
    roomNumber: 5,
    carParks: 2,
    action: "View",
  },
  {
    id: 20,
    address: "25 Meadow St",
    type: "Apartment",
    occupancy: "occupied",
    tenant: "Jessica Taylor",
    leaseStart: "2024-02-01T00:00:00.000Z",
    leaseEnd: "2025-02-01T00:00:00.000Z",
    monthlyRent: 1700,
    bathroomNumber: 1,
    roomNumber: 1,
    carParks: 0,
    action: "View",
  },
];
type PropertyFormValues = z.infer<typeof propertySchema>;
const baseURL = process.env.NEXT_PUBLIC_BASE_API;

const defaultValues: Partial<PropertyFormValues> = {
  // name: "Your name",
  // email: "Email",
  tenant:"Vacant"
};


const Properties = () => {
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues,
  });

  function onSubmit(data: PropertyFormValues) {
    console.log("URL::", `${baseURL}/auth/register`);

    console.log("###data###", data);
    // axios
    //     .post(`${baseURL}/auth/register`, data)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data.detail);
    //       toast.error(err.response.data.detail);
    //     });
  }
  return (
    <>
      <div className="flex flex-row">
        <DialogAtom dialogName={"Add Property"}
                    title={"Add Property"}
                    description={"Add Property details below"}
        >
          <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" mx-auto mb-0 mt-8 w-full space-y-4"
            >
              <div className={"flex flex-row gap-3 justify-between"}>
                <div className={"flex flex-col w-[50%]"}>
                  <CustomInput
                      form={form}
                      type="text"
                      label={"Street"}
                      placeholder={"Street"}
                      name={"street"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"Street Number"}
                      placeholder={"Street Number"}
                      name={"streetNumber"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"City"}
                      placeholder={"City"}
                      name={"city"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"State"}
                      placeholder={"State"}
                      name={"state"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"Zip"}
                      placeholder={"Zip"}
                      name={"zip"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"Type"}
                      placeholder={"apartment /  Bungalow  / townhouse"}
                      name={"type"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"Occupancy"}
                      placeholder={"rented / vacant"}
                      name={"occupancy"}
                  />
                </div>
                <div className={"flex flex-col w-[50%]"}>

                  <CustomInput
                      form={form}
                      type="text"
                      label={"Tenant"}
                      placeholder={"Tenant Name"}
                      name={"tenant"}
                  />
                  <CustomInput
                      form={form}
                      type="date"
                      label={"lease Start"}
                      placeholder={"lease Start"}
                      name={"leaseStart"}
                  />
                  <CustomInput
                      form={form}
                      type="date"
                      label={"lease End"}
                      placeholder={"lease End"}
                      name={"leaseEnd"}
                  />
                  <CustomInput
                      form={form}
                      type="number"
                      label={"Rent"}
                      placeholder={"Rent"}
                      name={"rent"}
                  />
                  <CustomInput
                      form={form}
                      type="number"
                      label={"Bathrooms"}
                      placeholder={"Bathrooms"}
                      name={"bathrooms"}
                  />
                  <CustomInput
                      form={form}
                      type="number"
                      label={"Bedrooms"}
                      placeholder={"Bedrooms"}
                      name={"bedrooms"}
                  />
                  <CustomInput
                      form={form}
                      type="text"
                      label={"Parking"}
                      placeholder={"Parking"}
                      name={"parking"}
                  />
                </div>

              </div>
              <Button variant={"default"} type="submit">
                Add Property
              </Button>



              
            </form>
          </Form>
        </DialogAtom>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Address</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Occupancy</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Lease Start</TableHead>
            <TableHead>Lease end</TableHead>
            <TableHead className="text-right">Monthly Rent</TableHead>
            <TableHead>Bathrooms No.</TableHead>
            <TableHead>Bedrooms No.</TableHead>
            <TableHead>Parking</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.address}</TableCell>
              <TableCell className="font-medium">{property.type}</TableCell>
              <TableCell>{property.occupancy}</TableCell>
              <TableCell>{property.tenant}</TableCell>

              <TableCell>{format(new Date(), "MMMM do, yyyy")}</TableCell>
              <TableCell>{format(new Date(), "MMMM do, yyyy")}</TableCell>
              <TableCell className="text-right">
                {property.monthlyRent}
              </TableCell>
              <TableCell>{property.bathroomNumber}</TableCell>
              <TableCell>{property.roomNumber}</TableCell>
              <TableCell>{property.carParks}</TableCell>
              <TableCell>{property.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default Properties;
