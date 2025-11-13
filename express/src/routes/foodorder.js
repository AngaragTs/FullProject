import express from "express";

import { CreateFoodOrder } from "../resolvers/foodorder/create-foodorder.js";
import { DeleteFoodOrder } from "../resolvers/foodorder/delete-foodorder.js";
import { GetFoodOrder } from "../resolvers/foodorder/get-foodorder.js";
import { UpdateFoodOrder } from "../resolvers/foodorder/update-foodorder.js";

export const FoodOrder = express.Router();

FoodOrder.get(`/`, GetFoodOrder);
FoodOrder.post(`/`, CreateFoodOrder);
FoodOrder.put(`/`, UpdateFoodOrder);
FoodOrder.delete(`/`, DeleteFoodOrder);
