import { FoodOrderModel } from "../../model/foodorder-model.js";

export const UpdateFoodOrder = async (req, res) => {
  const dbuser = await FoodOrderModel.findByIdAndUpdate(req.body.id, {
    user: req.body.user,
    totalPrice: req.body.totalPrice,
    foodOrderItems: req.body.foodOrderItems,
    status: req.body.status,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbuser);
};
