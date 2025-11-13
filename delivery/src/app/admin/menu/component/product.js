"use client";
import { useState, useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Head = ({ categoryName, category }) => {
  console.log(category);
  const [food, setfood] = useState([]);
  const getFoodData = async () => {
    const data = await fetch(
      `http://localhost:8000/food/${category._id}`,
      options
    );
    const jsonData = await data.json();
    setfood(jsonData);
    console.log("categoryfood", jsonData);
  };
  console.log("hahah");

  useEffect(() => {
    getFoodData();
  }, []);
  return (
    <div className="w-460 h-80 bg-white rounded-2xl flex flex-col mt-5">
      <p className="font-semibold mt-2 ml-2">{categoryName}</p>
      <div className="flex">
        <div className="w-full  rounded-2xl ml-2 flex-wrap flex p-2 gap-2 ">
          <div className="w-60 h-50 border rounded-2xl flex items-center justify-center border-dashed border-red-700">
            <div className="flex justify-center items-center">
              <button className="w-10 h-10 rounded-3xl bg-[#EF4444] flex items-center  justify-center cursor-pointer">
                +
              </button>
            </div>
            <div>add new dish to {categoryName}</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full  rounded-2xl ml-2 flex-wrap flex p-2 gap-2 ">
            <div className="w-60 h-50 border rounded-2xl flex items-center justify-center border-dashed border-red-700">
              <div className="flex justify-center items-center">
                <button className="w-10 h-10 rounded-3xl bg-[#EF4444] flex items-center  justify-center cursor-pointer">
                  +
                </button>
              </div>
              <div>add new dish to {categoryName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
