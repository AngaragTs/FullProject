import mongoose from "mongoose";
import { foodCategoryModel } from "./foodcategory-model.js";
const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodShema = new Schema({
  id: ObjectId,
  foodname: String,
  price: Number,
  image: String,
  ingredients: String,
  category: { type: ObjectId, ref: "foodcategory" },
  createdAt: Date,
  updatedAt: Date,
});
export const foodModel = mongoose.model("food", foodShema);
