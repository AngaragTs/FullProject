import mongoose from "mongoose";

const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserShema = new Schema({
  id: ObjectId,
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});
export const foodCategoryModel = mongoose.model("foodcategory", UserShema);
