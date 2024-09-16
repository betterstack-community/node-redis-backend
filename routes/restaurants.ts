import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";
const router = express.Router();

router.post("/", validate(RestaurantSchema), async (req, res) => {
  const data = req.body as Restaurant;
  res.send("Hello world");
});

export default router;
