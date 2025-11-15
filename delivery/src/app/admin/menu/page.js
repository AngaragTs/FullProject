"use client";
import { useState, useEffect } from "react";
import { Logo } from "../icons/logo";
import { Icon } from "../icons/icon";
import { TruckIcon } from "../icons/truckicon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Head } from "./component/product";
import { FoodCard } from "./feature/foodcard";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function Home() {
  const [foodCategoryData, setFoodCategoryData] = useState([]);

  const [categoryname, setCategoryName] = useState("");
  const [addcategory, setAddCategory] = useState(false);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/category`, options);
    const jsonData = await data.json();
    setFoodCategoryData(jsonData);
    console.log("category", jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          categoryName: categoryname,
        }),
      });
      setAddCategory(false);
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  const Handlecancel = () => {
    return setCategoryName("");
  };
  return (
    <div className="w-full  flex m-auto">
      <div className="w-80 bg-white gap-10 mt-10 flex justify-center">
        <div>
          <div className="flex w-50 h-10">
            <Logo />
            <div>
              <p className="font-semibold text-lg">NomNom</p>

              <p className="text-xs font-normal text-[#71717A]">
                Swift delivery
              </p>
            </div>
          </div>
          <div className="w-40 h-20">
            <button className="w-40 h-10 flex items-center cursor-pointer">
              <Icon />
              <h1 className="cursor-pointer">Food menu</h1>
            </button>
            <Link
              href={`/admin`}
              className="w-40 h-10 flex items-center cursor-pointer"
            >
              <TruckIcon />
              <h1 className="cursor-pointer">Orders</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-300 bg-[#E4E4E5]">
        <div className="flex justify-center mt-5">
          <div className="w-460 mah-h-fit mb-3">
            <div className="w-full flex justify-end">
              <img className="w-9 h-9" src="../icon.png"></img>
            </div>
            <div className="w-full flex justify-center mt-2">
              <div className="w-460 max-h-fit bg-white rounded-2xl p-2">
                <p className="font-semibold mt-2 ml-2">Dishes Category</p>
                <div className="ml-2 gap-2 flex flex-wrap">
                  {foodCategoryData.map((category, index) => {
                    return (
                      <button
                        className="cursor-pointer rounded-xl w-auto p-2 border flex gap-2"
                        key={index}
                      >
                        {category.categoryName}
                        <div className="bg-black rounded-2xl h-6 w-6">
                          <p className="text-white">{category.food}</p>
                        </div>
                      </button>
                    );
                  })}
                  <button
                    className="bg-[#EF4444] cursor-pointer rounded-2xl w-auto p-2 border text-white"
                    onClick={() => setAddCategory(true)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-220 overflow-y-scroll">
          <div className="flex  flex-col items-center ">
            {foodCategoryData.map((category) => {
              return (
                <Head
                  categoryName={category.categoryName}
                  key={category._id}
                  id={category._id}
                />
              );
            })}
          </div>
        </div>
      </div>
      {addcategory && (
        <div className="fixed w-screen h-screen bg-black/60 flex justify-center items-center ">
          <div className="bg-white w-115 h-68 flex justify-around flex-col items-center rounded-2xl">
            <div className="w-103 h-13 flex justify-between">
              <p className="text-[#09090B] font-semibold text-lg mt-2">
                Add new category
              </p>
              <button
                onClick={() => setAddCategory(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F4F4F5] cursor-pointer"
              >
                <p>x</p>
              </button>
            </div>

            <div className="w-103 h-13">
              <p className="text-sm font-medium">Category Name</p>
              <input
                placeholder="Type category name..."
                className="h-10 w-100 gap-2 border pl-1 text-black"
                value={categoryname}
                onChange={(e) => setCategoryName(e.target.value)}
              ></input>
            </div>
            <div className=" text-white h-13 w-103 flex items-end justify-end gap-2">
              {categoryname.length > 3 && (
                <button
                  onClick={Handlecancel}
                  className="w-20 h-10 border border-[#E4E4E7] cursor-pointer bg-white text-black rounded-2xl"
                >
                  Cancel
                </button>
              )}
              <button
                className="w-30 h-10 cursor-pointer bg-black rounded-2xl"
                onClick={handleSubmit}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
