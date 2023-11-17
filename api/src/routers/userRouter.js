import express from "express";
import { insertUser } from "./models/userModel/UserModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "please check your email to verify your account",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "There is another user already exist with this email";
    }
    next(error);
  }
});

export default router;
