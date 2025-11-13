import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";
export const deletedUsers = async (req, res) => {
  const dbUser = await userModel.findByIdAndDelete(req.body.id);
  res.status(200).json({ message: "Deleted", deletedId: dbUser });
  const token = req.headers.authorization;

  try {
    jwt.verify(token, "secret-key");
    const dbUser = await userModel.findByIdAndDelete(req.body.id);
    res.send("User deleted successfully!");
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};
