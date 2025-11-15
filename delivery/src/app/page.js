"use client";

import Image from "next/image";

import { Logo } from "./admin/icons/logo";
import { Location } from "./admin/icons/locationicon";
import { SideIcon } from "./admin/icons/sideicon";
import { CartIcon } from "./admin/icons/shoppingcarticon";
import { Button } from "@/components/ui/button";
import { ProfileIcon } from "./admin/icons/profileicon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhiteCartIcon } from "./admin/icons/shopcarticon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Textarea } from "@/components/ui/textarea";
import { ExitIcon } from "./admin/icons/xicon";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { use, useState } from "react";
import { FoodIcon } from "./admin/icons/foodicon";
import { TimeIcon } from "./admin/icons/timeicon";
import { MapIcon } from "./admin/icons/mapicon";

export default function Home() {
  const [step, setstep] = useState(1);
  const [text, setText] = useState("");
  const [addloc, setAddLoc] = useState(false);

  const HandleNextStep = () => {
    setstep(step + 1);
  };
  const BackStep = () => {
    if (step === 1) {
      return step;
    } else {
      setstep(step - 1);
    }
  };
  const Deliver = () => {
    return console.log("fdhjfh");
  };

  return (
    <div className="w-full max-h-fit">
      <div className="w-full h-43 flex bg-black items-center justify-between px-20">
        <div className="flex w-36">
          <Logo />
          <div>
            <p className="text-2xl text-[#FAFAFA]">
              Nom<span className="text-[#EF4444] text-2xl">Nom</span>
            </p>
            <p className="text-[#E4E4E7] text-base">Swift delivery</p>
          </div>
        </div>
        <div className=" flex gap-2">
          <Dialog>
            <DialogTrigger className="text-[#71717A] cursor-pointer">
              <Button variant={`outline`} className={`w-full rounded-full`}>
                <Location />
                <p className="text-[#EF4444] flex gap-2.5">
                  Delivery address:
                  <span className="text-[#404040]">Add Location</span>
                </p>
                <SideIcon />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Please write your delivery address!</DialogTitle>
                <DialogDescription>
                  <div className="flex-col flex w-117">
                    <Textarea
                      className="h-20"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <DialogFooter className="w-full h-20 flex justify-end items-end gap-2">
                      <DialogClose asChild>
                        <Button className="w-25 h-10 bg-white border text-black rounded-2xl cursor-pointer">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        className="w-25 h-10 bg-black border text-white rounded-2xl cursor-pointer"
                        onClick={Deliver}
                      >
                        Deliver Here
                      </Button>
                    </DialogFooter>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger className="w-9 h-9 rounded-3xl flex bg-white items-center justify-center cursor-pointer">
              <CartIcon />
            </SheetTrigger>
            <SheetContent className="bg-[#404040] w-xl">
              <SheetHeader>
                <SheetTitle className="text-white text-xl">
                  <div className="flex items-center gap-5">
                    <WhiteCartIcon />
                    Order Detail
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="account">Card</TabsTrigger>

                      <TabsTrigger value="password">Order</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <div className="w-135 mt-5 h-180 flex rounded-2xl text-xl items-center flex-col justify-around bg-white">
                        <div className=" h-[75%] w-120 flex justify-around flex-col mt-3">
                          <div className="text-[#71717A] h-10 text-2xl w-115 font-semibold ">
                            My cart
                          </div>
                          <div className="w-full h-[90%] overflow-scroll ">
                            <div className="w-120  border-dashed border-b border-[#09090B80]  items-center h-45 flex gap-5 mb-5 ">
                              <div className="w-[28%]  h-35 border rounded-2xl">
                                <img src="facebook.png"></img>
                              </div>
                              <div className="flex flex-col w-[71%]">
                                <div className="  h-35 flex justify-between">
                                  <div className=" w-[85%]">
                                    <p className="text-[#EF4444] text-base">
                                      Sunshine Stackers{" "}
                                    </p>
                                    <p className="text-xs text-black">
                                      Fluffy pancakes stacked with fruits,
                                      cream, syrup, and powdered sugar.
                                    </p>
                                  </div>
                                  <button className="h-9 w-9 border rounded-full flex justify-center items-center border-red-500 cursor-pointer text-red-500">
                                    <ExitIcon />
                                  </button>
                                </div>
                                <div className="w-[330px] gap-3 flex justify-between">
                                  <div className="flex gap-5  ">
                                    <button
                                      onClick={BackStep}
                                      className="cursor-pointer"
                                    >
                                      -
                                    </button>
                                    <button className="cursor-pointer">
                                      {step}
                                    </button>
                                    <button
                                      onClick={HandleNextStep}
                                      className="cursor-pointer"
                                    >
                                      +
                                    </button>
                                  </div>

                                  <p className="font-bold text-base text-black">
                                    $12.99
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-120 h-40">
                          <div className="text-[#71717A] h-10 text-2xl font-semibold">
                            Delivery location
                          </div>
                          <Textarea placeholder="Please share your complete address" />
                          <p className=" text-sm text-[#EF4444]">
                            Please complete your address
                          </p>
                        </div>
                      </div>

                      <div className="bg-white w-135 h-60 rounded-2xl mt-10 flex justify-center">
                        <div className="w-115">
                          <p className="text-[#71717A] h-10 text-xl">
                            Payment info
                          </p>
                          <div className="w-full border border-dashed border-[#09090B80]"></div>
                          <button className="w-full h-10 bg-[#EF4444] cursor-pointer flex items-center justify-center rounded-2xl">
                            <p className="text-white font-medium">Checkout</p>
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="password">
                      <div className="w-135 mt-5 h-180 flex rounded-2xl text-xl items-center flex-col bg-white">
                        <div className=" h-[75%] w-120 flex justify-around flex-col mt-3">
                          <div className="text-black h-10 text-2xl w-115 font-semibold ">
                            My Order
                          </div>
                          <div className="w-full h-[90%] overflow-scroll ">
                            <div className="w-120 h-55 border-dashed border-b border-[#09090B80] flex flex-col gap-5  ">
                              <div className=" flex justify-between">
                                <div className=" w-full flex justify-around">
                                  <p className=" h-8 w-240 font-bold text-base text-black">
                                    $12.99
                                  </p>
                                  <div className="w-240 flex justify-end">
                                    <button className="border border-[#EF4444] w-16 h-8 cursor-pointer rounded-full">
                                      <p className="text-[#09090B] text-xs font-semibold">
                                        Pending
                                      </p>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full flex justify-around">
                                <div className="flex w-140 gap-3">
                                  <FoodIcon />
                                  <p className="text-sm">Sunshine Stackers </p>
                                </div>
                                <div className="w-140 flex justify-end">
                                  <p className="text-sm">x1</p>
                                </div>
                              </div>
                              <div className="w-full flex justify-around items-center">
                                <div className="flex w-140 gap-3">
                                  <FoodIcon />
                                  <p className="text-sm">Sunshine Stackers </p>
                                </div>
                                <div className="w-140 flex justify-end">
                                  <p className="text-sm">x1</p>
                                </div>
                              </div>
                              <div className="gap-3 flex text-sm items-center">
                                <TimeIcon />
                                <p>2024/12/20</p>
                              </div>
                              <div className="flex gap-3 text-sm items-center">
                                <MapIcon />
                                <p>Mongolia, Ub exx</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white w-135 h-60 rounded-2xl mt-10 flex justify-center">
                        <div className="w-115">
                          <p className="text-[#71717A] h-10 text-xl">
                            Payment info
                          </p>
                          <div className="w-full border border-dashed border-[#09090B80]"></div>
                          <button className="w-full h-10 bg-[#EF4444] cursor-pointer flex items-center justify-center rounded-2xl">
                            <p className="text-white font-medium">Checkout</p>
                          </button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-9 h-9 rounded-3xl bg-red-600 items-center justify-center flex cursor-pointer">
              <ProfileIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className="border cursor-pointer flex items-center justify-center rounded-2xl">
                  Sign out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <img className="w-full" src="./head.png" />
      <div className="bg-[#404040] h-100"></div>
      <div className="w-full h-200 bg-black  py-10">
        <div className="w-full h-20 bg-[#EF4444] justify-center items-center flex overflow-hidden">
          <div className="w-full  text-white text-3xl animation-scroll whitespace-nowrap gap-2 font-semibold">
            {Array(10)
              .fill("Fresh fast delivered")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>
        <div className="w-screen h-[90%] flex flex-col justify-evenly items-center">
          <div className="w-[90%] flex h-[50%] justify-between   ">
            <div className="w-[10%] bg-black  flex justify-end">
              <div className="h-full w-auto">
                <Logo />
                <div>
                  <p className="text-[22px] text-white  ">
                    Nom<span className="text-red-400">Nom</span>
                  </p>
                  <p className="text-white">Swift delivery</p>
                </div>
              </div>
            </div>

            <div className="w-[73%] flex ">
              <div className="w-[28%]  flex flex-col items-start ">
                <div>
                  <p className="text-[20px] text-[#d8d6d6] h-10  ">NOMNOM</p>
                </div>
                <div className=" flex w-full text-[17px] ">
                  <div className="  w-[50%]  flex flex-col items-start h-28   justify-between ">
                    <button className="text-white cursor-pointer">Home</button>
                    <button className="text-white cursor-pointer">
                      Contact us
                    </button>
                    <button className="text-white cursor-pointer">
                      Delivery zone
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-full w-[40%]  ">
                <div>
                  <p className="text-[20px] text-[#d8d6d6] h-10  ">MENU</p>
                </div>
                <div className=" flex w-full text-[17px] ">
                  <div className="  w-[40%]  flex flex-col items-start h-50  justify-between ">
                    <button className="text-white cursor-pointer">
                      Appetizers
                    </button>
                    <button className="text-white cursor-pointer">
                      Salads
                    </button>
                    <button className="text-white cursor-pointer">
                      Pizzas
                    </button>
                    <button className="text-white cursor-pointer">
                      Main dishes
                    </button>
                    <button className="text-white cursor-pointer">
                      Desserts
                    </button>
                  </div>

                  <div className=" w-[40%]  flex flex-col items-start h-50 justify-evenly ">
                    <button className="text-white cursor-pointer">
                      Side dish{" "}
                    </button>
                    <button className="text-white cursor-pointer">
                      Brunch
                    </button>
                    <button className="text-white cursor-pointer">
                      Desserts
                    </button>
                    <button className="text-white cursor-pointer">
                      Beverages
                    </button>
                    <button className="text-white cursor-pointer">
                      Fish & Sea foods
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[20%]">
                <div>
                  <p className="text-[20px] text-[#d8d6d6] h-10  ">FOLLOW US</p>
                </div>
                <div className="flex gap-2">
                  <img className="w-7 h-7" src="./facebook.png"></img>
                  <img className="w-7 h-7" src="./instagram.png"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] flex justify-end">
            <div className="w-[96%]  border-t-2 border-[#71717A]  flex gap-10 text-[#71717A] h-15 items-center ">
              <p>Copy right 2024</p>
              <p>Nomnom LLC</p>
              <p>Privacy policy </p>
              <p>Terms and conditoin</p>
              <p>Cookie policy</p>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex justify-center mt-10 ">
          <div className=" flex gap-20 items-center">
            <div>
              <Logo />
              <div>
                <p className="text-2xl text-[#FAFAFA]">
                  Nom<span className="text-[#EF4444] text-2xl">Nom</span>
                </p>
                <p className="text-[#E4E4E7] text-base">Swift delivery</p>
              </div>
            </div>
            <div className="w-30 flex flex-col items-start">
              <p className="text-base text-[#71717A]">NOMNOM </p>
              <button className="text-white text-start cursor-pointer">
                Home{" "}
              </button>
              <button className="text-white text-start cursor-pointer">
                Contact us{" "}
              </button>
              <button className="text-white text-start cursor-pointer">
                Delivery zone{" "}
              </button>
            </div>
            <div className="h-full w-80 ">
              <div>
                <p className="text-base text-[#71717A]">MENU</p>
              </div>
              <div className=" flex">
                <div className="h-20 w-40 flex flex-col items-start ">
                  <button className="text-white cursor-pointer">
                    Appetizers
                  </button>
                  <button className="text-white cursor-pointer">Salads</button>
                  <button className="text-white cursor-pointer">Pizzas</button>
                  <button className="text-white cursor-pointer">
                    Main dishes
                  </button>
                  <button className="text-white cursor-pointer">
                    Desserts
                  </button>
                </div>
                <div className="h-20 w-20 flex flex-col items-start">
                  <button className="text-white cursor-pointer">
                    Side dish{" "}
                  </button>
                  <button className="text-white cursor-pointer">Brunch</button>
                  <button className="text-white cursor-pointer">
                    Desserts
                  </button>
                  <button className="text-white cursor-pointer">
                    Beverages
                  </button>
                  <button className="text-white cursor-pointer">
                    Fish & Sea foods
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#71717A] text-base">Follow us</p>
              <div className="flex">
                <img className="w-7 h-7" src="./facebook.png"></img>
                <img className="w-7 h-7" src="./instagram.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-220  border-t-2 border-[#71717A]  flex gap-10 text-[#71717A] mt-30">
            <p>Copy right 2024</p>
            <p>Nomnom LLC</p>
            <p>Privacy policy </p>
            <p>Terms and conditoin</p>
            <p>Cookie policy</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
