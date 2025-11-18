"use client";

import Link from "next/link";
import { Icon } from "./icons/icon";
import { Logo } from "./icons/logo";
import { TruckIcon } from "./icons/truckicon";
import { UpDownIcon } from "./icons/updownicon";
import { DownIcon } from "./icons/downicon";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="w-full  flex m-auto">
      <div className="w-80 bg-white gap-10 mt-15 mr-5 flex justify-center">
        <div>
          <div className="flex w-50 h-10">
            <Logo />
            <div>
              <p className="font-semibold text-lg">LolLol</p>

              <p className="text-xs font-normal text-[#71717A]">
                Swift delivery
              </p>
            </div>
          </div>
          <div className="w-40 h-20">
            <Link
              href={`admin/menu`}
              className="w-40 h-10 flex items-center cursor-pointer"
            >
              <Icon />
              <h1 className="cursor-pointer">Food menu</h1>
            </Link>
            <button className="w-40 h-10 flex items-center cursor-pointer">
              <TruckIcon />
              <p className="cursor-pointer">Orders</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-600 bg-[#E4E4E5] ">
        <div className="w-full flex justify-end mt-10 pr-12">
          <img className="w-9 h-9" src="icon.png" />
        </div>
        <div className="w-full h-200 flex justify-center mt-5 border">
          <div className="w-460 h-full bg-white rounded-2xl">
            <div className="w-460 h-18 flex items-center rounded-2xl">
              <div className="w-140 pl-2">
                <p className="text-xl font-bold">Orders</p>
                <p className="text-[#71717A] font-meduim text-xs">32 Items</p>
              </div>
              <div className="flex justify-end w-300 gap-2 pr-2">
                <div className="border  rounded-2xl">
                  <input type="date" />
                  <input type="date" />
                </div>
                <button className="border cursor-pointer rounded-2xl">
                  Change Delivery State
                </button>
              </div>
            </div>

            <div className="w-460 h-10 bg-[#E4E4E7] flex items-center">
              <div className="w-24 h-12 flex items-center  justify-evenly">
                <input type="checkbox" />
                <p>№</p>
              </div>
              <div className="w-460 h-12 flex items-center justify-evenly text-[#71717A]">
                <p>Customer</p>
                <p>Food</p>
                <div className="flex h-12 items-center gap-5">
                  <p>Date</p>
                  <UpDownIcon />
                </div>
                <p>Total </p>
                <p>Delivery Address</p>
                <div className="flex h-12 items-center gap-5">
                  <p>Delivery state</p>
                  <UpDownIcon />
                </div>
              </div>
            </div>
            <div className="w-460 h-10 bg-[#E4E4E7] flex items-center">
              <div className="w-24 h-12 flex items-center  justify-evenly">
                <input type="checkbox" />
                <p>1</p>
              </div>
              <div className="w-460 h-12 flex items-center justify-evenly text-[#71717A]">
                <p>Customer</p>
                <p className="flex items-center gap-8">
                  Food <DownIcon />
                </p>
                <div className="flex h-12 items-center gap-5">
                  <p>Date</p>
                  <UpDownIcon />
                </div>
                <p>Total </p>
                <p>Delivery Address</p>
                <div className="flex h-12 items-center gap-5">
                  <p>Delivery state</p>
                  <UpDownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-460">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
