import { FoodOrderModel } from "../../model/foodorder-model.js";

export const CreateFoodOrder = async (req, res) => {
  const dbuser = await FoodOrderModel.create(req.body.id, {
    user: req.body.user,
    totalPrice: req.body.totalPrice,
    foodOrderItems: req.body.foodOrderItems,
    status: req.body.status,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbuser);
};
