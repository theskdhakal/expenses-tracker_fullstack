import express from "express";
import { addTransaction } from "../models/transaction/TransactionModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await addTransaction(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "successfully added transaction",
        })
      : res.json({
          status: "Error",
          message: "Unable to add transaction, try again later",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    res.json({
      status: "success",
      message: "todo",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
