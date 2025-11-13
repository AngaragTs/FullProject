import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";

export const createUsers = async (req, res) => {
  const hashedpassword = await bcrypt.hash(req.body.password, 10);
  const dbUser = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedpassword,
    phone: req.body.phone,
    address: req.body.address,
    ttl: req.body.req,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  res.status(200).json(dbUser);
};
