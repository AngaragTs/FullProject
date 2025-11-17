"use client";
import { useState, useEffect } from "react";
import { FoodCard } from "../feature/foodcard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon } from "../../icons/imageicon";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FoodInfo } from "./foodinfo";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Head = ({ categoryName, id, foodCategoryData }) => {
  const [food, setfood] = useState([]);
  const [addfood, setAddFood] = useState(false);
  const [foodname, setFoodName] = useState("");
  const [foodprice, setFoodPrice] = useState("");
  const [foodingredients, setFoodIngredients] = useState("");
  const [foodimage, setFoodImage] = useState("");

  const getFoodData = async () => {
    const data = await fetch(`http://localhost:8000/food/${id}`, options);
    const jsonData = await data.json();
    setfood(jsonData);
    console.log("categoryfoodssss", jsonData);
  };

  useEffect(() => {
    getFoodData();
  }, []);

  const [logoUrl, setLogoUrl] = useState("");

  const [uploading, setUploading] = useState(false);

  const UPLOAD_PRESET = "FoodDelivery";

  const CLOUD_NAME = "dmzewvhlz";

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,

        {
          method: "POST",

          body: formData,
        }
      );

      const data = await response.json();
      console.log("adsasdadddasd", data);

      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);

      setLogoUrl(url);
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          foodname: foodname,
          price: foodprice,
          ingredients: foodingredients,
          category: id,
          image: logoUrl,
        }),
      });
      setAddFood(false);
      getFoodData();
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-460 h-auto bg-white rounded-2xl flex flex-col mt-5">
      <p className="font-semibold mt-2 ml-2">{categoryName}</p>
      <div className="flex ">
        <div className="w-full   rounded-2xl ml-2 flex-wrap flex p-2 gap-2 ">
          <div className="w-70 h-60 border rounded-2xl flex items-center justify-around border-dashed border-red-700">
            <div>
              <div className="flex justify-center  items-center">
                <button
                  onClick={() => setAddFood(true)}
                  className="w-10 h-10 rounded-3xl bg-[#EF4444] flex items-center  justify-center cursor-pointer text-white"
                >
                  +
                </button>
              </div>
              <div className="w-40 h-10 flex justify-center">
                add new dish to {categoryName}
              </div>
            </div>
          </div>
          {food.map((food) => {
            return (
              <FoodInfo
                key={food._id}
                foodCategoryData={foodCategoryData}
                ingredients={food.ingredients}
                foodname={food.foodname}
                price={food.price}
                image={food.image || "../head.png"}
              />
            );
          })}
        </div>
      </div>
      {addfood && (
        <div className="fixed  inset-0 w-screen h-screen bg-black/60 flex justify-center items-center z-50">
          <div className="w-130 h-170 bg-white flex flex-col rounded-2xl items-center justify-around">
            <div className="w-120 h-13 flex justify-between">
              <p className="text-[#09090B] font-semibold text-lg mt-2">
                Add new Dish to Appetizers
              </p>
              <button
                onClick={() => setAddFood(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F4F4F5] cursor-pointer"
              >
                <p>x</p>
              </button>
            </div>

            <div className="w-120 h-20 flex justify-between gap-10">
              <div>
                <p className="text-sm text-black font-medium">Food name</p>
                <input
                  onChange={(e) => setFoodName(e.target.value)}
                  value={foodname}
                  placeholder="Food name"
                  className="w-50 h-10 border border-[#E4E4E7] rounded-xl text-black px-2"
                ></input>
              </div>
              <div>
                <p className="text-sm text-black font-medium">Food Price</p>
                <input
                  onChange={(e) => setFoodPrice(e.target.value)}
                  value={foodprice}
                  placeholder="Food name"
                  className="w-50 h-10 border border-[#E4E4E7] rounded-xl text-black px-2"
                ></input>
              </div>
            </div>
            <div className="w-120">
              <p className="text-sm text-black font-medium">Ingredients</p>
              <Textarea
                onChange={(e) => setFoodIngredients(e.target.value)}
                value={foodingredients}
                className="w-120"
              />
            </div>
            <div className="w-120 mt-5">
              <p className="text-sm text-black font-medium">Food image</p>
              <div className="w-120 h-30 border border-dashed bg-[#2563EB33] border-[#2563EB33] flex justify-center items-center">
                {uploading && (
                  <p className="text-blue-400 w-full h-full justify-center items-center flex">
                    Uploading...
                  </p>
                )}

                {!logoUrl ? (
                  <div>
                    {!uploading && (
                      <Label htmlFor="input-tag" className="flex-col flex ">
                        <div className="w-8 h-8 rounded-2xl bg-white flex justify-center items-center">
                          <ImageIcon />
                        </div>

                        <p className="text-sm text-black font-medium">
                          Choose a file or drag & drop it here
                        </p>
                      </Label>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      id="input-tag"
                      onChange={handleLogoUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="w-full h-30 relative object-cover">
                    <Image
                      src={logoUrl}
                      alt="Uploaded logo"
                      fill
                      className="object-contain rounded border border-gray-300 "
                    />
                  </div>
                )}
              </div>

              <div className="w-120 h-30 flex items-end justify-end ">
                <button
                  onClick={handleSubmit}
                  className="bg-black w-20 h-10 rounded-xl cursor-pointer"
                >
                  <p className="text-white">Add Dish</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
