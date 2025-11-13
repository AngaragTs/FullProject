import express from "express";

import { CreateFoodCategory } from "../resolvers/foodcategory/create-foodcategory.js";
import { DeleteFoodCategory } from "../resolvers/foodcategory/delete-foodcategory.js";
import { GetFoodCategory } from "../resolvers/foodcategory/get-foodcategory.js";
import { UpdateFoodCategory } from "../resolvers/foodcategory/update-foodcategory.js";

export const foodcategory = express.Router();

foodcategory.get(`/`, GetFoodCategory);
foodcategory.post(`/`, CreateFoodCategory);
foodcategory.put(`/`, UpdateFoodCategory);
foodcategory.delete(`/`, DeleteFoodCategory);
