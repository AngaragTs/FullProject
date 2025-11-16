import { useState } from "react";
import { PenIcon } from "../../icons/penicon";

export const FoodInfo = ({
  ingredients,
  foodname,
  price,
  image,
  foodCategoryData,
}) => {
  const [dishinfo, setDishInfo] = useState(false);
  console.log("foodCategoryDataahaaahhahahh", foodCategoryData);

  return (
    <div className="w-70 h-60 border rounded-2xl flex flex-col items-center justify-around border-[#E4E4E7]">
      <div className="w-60 h-30 border border-[#E4E4E7] rounded-2xl relative">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="../head.png"
        />

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

                <input className="w-72 h-9 border border-[#E4E4E7] px-1 rounded-2xl"></input>
              </div>
              <div className="w-120 h-15 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Dish category</p>
                </div>

                <input className="w-72 h-9 border border-[#E4E4E7] px-1 rounded-2xl"></input>
              </div>
              <div className="w-120 h-50 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Ingredients</p>
                </div>

                <textarea className="w-72 h-30 border border-[#E4E4E7] px-1 rounded-2xl py-1" />
              </div>
              <div className="w-120 h-15 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Price</p>
                </div>

                <input className="w-72 h-9 border border-[#E4E4E7] px-1 rounded-2xl"></input>
              </div>
              <div className="w-120 h-50 flex justify-between">
                <div className="w-30">
                  <p className="text-xs text-[#71717A]">Image</p>
                </div>

                <textarea className="w-72 h-30 border border-[#E4E4E7] px-1 rounded-2xl py-1" />
              </div>
            </div>
            <div className="w-120 h-30 flex items-end justify-end ">
              <button></button>
              <button className="bg-black w-30 h-10 rounded-xl cursor-pointer">
                <p className="text-white">Save Changes</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
