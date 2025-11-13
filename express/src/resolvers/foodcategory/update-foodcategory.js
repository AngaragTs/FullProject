import { foodCategoryModel } from "../../model/foodcategory-model.js";

export const UpdateFoodCategory = async (req, res) => {
  const dbUser = await foodCategoryModel.findByIdAndUpdate(req.body.id, {
    categoryName: req.body.categoryName,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbUser);
};
