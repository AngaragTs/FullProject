import { foodCategoryModel } from "../../model/foodcategory-model.js";
import { foodModel } from "../../model/food-model.js";

export const GetFoodCategory = async (req, res) => {
  const dbuser = await foodCategoryModel.find();
  const category = await Promise.all(
    dbuser.map(async (cur) => {
      const foods = await foodModel.find({ category: cur._id });
      return {
        _id: cur._id,
        categoryName: cur.categoryName,
        food: foods.length,
      };
    })
  );
  res.status(200).json(category);
};
