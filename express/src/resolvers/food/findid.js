import { foodModel } from "../../model/food-model.js";

export const FindId = async (req, res) => {
  try {
    console.log(req.params.id);
    const dbfindid = await foodModel.find({ category: req.params.id });
    res.status(200).json(dbfindid);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};
