import mongoose from "mongoose";

const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodItemSchema = new Schema({
  food: { type: ObjectId, ref: "Food" },
  quantity: Number,
});

const UserShema = new Schema({
  id: ObjectId,
  user: { type: ObjectId, ref: "user" },
  totalPrice: Number,
  foodOrderItems: [FoodItemSchema],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  createdAt: Date,
  updatedAt: Date,
});
export const FoodOrderModel = mongoose.model("FoodOrder", UserShema);
