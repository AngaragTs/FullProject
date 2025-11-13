import { foodCategoryModel } from "../../model/foodcategory-model.js";

export const CreateFoodCategory = async (req, res) => {
  const dbUser = await foodCategoryModel.create({
    categoryName: req.body.categoryName,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbUser);
};
