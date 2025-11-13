import express from "express";
import { router } from "./src/routes/users.js";
import mongoose from "mongoose";
import { foods } from "./src/routes/foods.js";
import { foodcategory } from "./src/routes/foodcategory.js";
import { FoodOrder } from "./src/routes/foodorder.js";
import cors from "cors";
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(`/user`, router);
app.use(`/food`, foods);
app.use(`/category`, foodcategory);
app.use(`/FoodOrder`, FoodOrder);

mongoose
  .connect(
    `mongodb+srv://angarag:1Angarag123@fooddelivery.ciiazid.mongodb.net/`
  )
  .then(() => console.log(`Connected`));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/user`);
});

// let users = fs.readFile(text.json);
// app.get("/user", (req, res) => {
//   res.status(200).json(users);
// });

// app.post("/user", (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);

//   res.send(`5th User Added`);
// });

// app.put(`/user`, (req, res) => {
//   const updatedUser = req.body;
//   users = users.map((user) =>
//     user.id === updatedUser.id ? updatedUser : user
//   );

//   res.send(`User updated seccessfully`);
// });

// app.delete(`/user/:id`, (req, res) => {
//   const id = req.params.id;

//   const index = users.findIndex((user) => user.id === id);
//   if (index !== -1) {
//     const deletedUser = users.splice(index, 1)[1];
//   }
//   res.json({ message: "User deleted", user: deletedUser });
// });
