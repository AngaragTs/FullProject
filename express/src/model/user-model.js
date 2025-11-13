import mongoose from "mongoose";

const model = [];

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserShema = new Schema({
  id: ObjectId,
  name: { type: String, require: true },
  email: String,
  password: String,
  phone: Number,
  role: { type: String, enum: ["Custumor", "Admin"] },
  address: String,
  orderedFoods: ObjectId,
  ttl: Date,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});
export const userModel = mongoose.model("user", UserShema);
