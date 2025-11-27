"use client";
import { useState } from "react";
import { PenIcon } from "../../icons/penicon";
import { DeleteIcon } from "../../icons/deleteicon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FileX, LucideImage } from "lucide-react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export const FoodInfo = ({
  ingredients,
  foodname,
  price,
  image,
  foodCategoryData,
  categoryName,
  id,
  logoUrl,
  uploading,
  getFoodData,
  food,
}) => {
  const [dishinfo, setDishInfo] = useState(false);
  const [changedetail, setChangedetail] = useState({
    foodname: foodname,
    ingredients: ingredients,
    price: price,
  });
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/food", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      setDishInfo(false);
      getFoodData();
    } catch (err) {
      console.log(err);
    }
  };

  const HandleChange = async () => {
    try {
      const res = await fetch(`http://localhost:8000/food`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          id: id,
          foodname: changedetail.foodname,
          ingredients: changedetail.ingredients,
          price: changedetail.price,
        }),
      });
      console.log("tneg angarag ");

      setDishInfo(false);
      getFoodData();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(logoUrl, "dsagfag");

  return (
    <div className="w-70 h-60 border rounded-2xl flex flex-col items-center justify-around border-[#E4E4E7]">
      <div className="w-60 h-30 border border-[#E4E4E7] rounded-2xl relative">
        <img className="w-full h-full object-cover rounded-2xl" src={image} />

        <button
          onClick={() => setDishInfo(true)}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center absolute bottom-2 right-2 cursor-pointer"
        >
          <PenIcon />
        </button>
      </div>
      <div>
        <div className="w-60 h-20 flex flex-col justify-center gap-5">
          <div className="flex h-5 gap-5 justify-between">
            <p className="text-sm text-[#EF4444] font-medium">{foodname}</p>
            <p className="text-xs">${price}</p>
          </div>
          <div className="h-10">
            <p className="text-xs">{ingredients}</p>
          </div>
        </div>
      </div>

      {dishinfo && (
        <div className="fixed  inset-0 w-screen h-screen bg-black/60 flex justify-center items-center z-50">
          <div className="w-130 h-170 bg-white flex flex-col rounded-2xl items-center justify-around">
            <div className="w-120 h-13 flex justify-between">
              <p className="text-[#09090B] font-semibold text-lg mt-2">
                Add new Dish to Appetizers
              </p>
              <button
                onClick={() => setDishInfo(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F4F4F5] cursor-pointer"
              >
                <p>x</p>
              </button>
            </div>
            <div className="h-106 w-120 ">
              <div className="w-120 h-15 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Dish name</p>
                </div>

                <input
                  className="w-72 h-9 border border-[#E4E4E7] px-1 rounded-2xl"
                  value={changedetail.foodname}
                  onChange={(e) =>
                    setChangedetail({
                      ...changedetail,
                      foodname: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="w-120 h-15 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Dish category</p>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={categoryName} />
                  </SelectTrigger>
                  <SelectContent>
                    {foodCategoryData.map((data) => {
                      return (
                        <SelectGroup key={data._id}>
                          <SelectItem value={data._id}>
                            {data.categoryName}
                          </SelectItem>
                        </SelectGroup>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-120 h-50 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Ingredients</p>
                </div>

                <textarea
                  className="w-72 h-30 border border-[#E4E4E7] px-1 rounded-2xl py-1"
                  value={changedetail.ingredients}
                  onChange={(e) =>
                    setChangedetail({
                      ...changedetail,
                      ingredients: e.target.value,
                    })
                  }
                />
              </div>
              <div className="w-120 h-15 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Price</p>
                </div>

                <input
                  className="w-72 h-9 border border-[#E4E4E7] px-1 rounded-2xl"
                  value={changedetail.price}
                  onChange={(e) =>
                    setChangedetail({
                      ...changedetail,
                      price: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="w-120 h-50 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Image</p>
                </div>
                <label
                  htmlFor="food-image"
                  className={`w-72 h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition bg-[#2563EB0D]`}
                >
                  {!logoUrl ? (
                    <div className="flex flex-col items-center gap-2">
                      {/* {!uploading && (
                        <Label htmlFor="input-tag">
                          <img
                            className="w-72 h-30 border border-[#E4E4E7] px-1 rounded-2xl py-1"
                            src={image}
                          />
                        </Label>
                      )} */}
                      <div className="rounded-full bg-white p-2">
                        <LucideImage />
                      </div>
                      <p className="text-sm font-medium">
                        Choose whatever shit you got
                      </p>
                    </div>
                  ) : (
                    <div className="w-72 relative h-40">
                      <Image
                        src={food.image}
                        alt="Uploaded logo"
                        fill
                        className="object-contain rounded border border-gray-300 "
                      />
                      <button className=" absolute top-2 right-2 text-gray-800/50 bg-white/80">
                        <FiX />
                      </button>
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    id="food-image"
                    // onChange={handleLogoUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
                {/* <img
                  className="w-72 h-30 border border-[#E4E4E7] px-1 rounded-2xl py-1"
                  src={image}
                /> */}
              </div>
            </div>
            <div className="w-120 h-30 flex items-end justify-between ">
              <button
                onClick={handleSubmit}
                className="w-12 h-10 bg-white border border-[#EF444480] flex items-center justify-center rounded-xl cursor-pointer"
              >
                <DeleteIcon />
              </button>
              <button
                onClick={HandleChange}
                className="bg-black w-30 h-10 rounded-xl cursor-pointer"
              >
                <p className="text-white">Save Changes</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
