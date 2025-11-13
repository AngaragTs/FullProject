import { userModel } from "../../model/user-model.js";
export const updatedUser = async (req, res) => {
  const dbUser = await userModel.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    ttl: req.body.req,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbUser);
};
