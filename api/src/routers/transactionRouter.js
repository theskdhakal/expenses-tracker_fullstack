import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
} from "../models/transaction/TransactionModel.js";

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

    const filter = {
      userId: authorization,
    };

    const trans = await getTransactions(filter);
    res.json({
      status: "success",
      message: "Transaction are shown below:",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const { _id } = req.params;

    if (authorization && _id) {
      const filter = {
        userId: authorization,
        _id,
      };

      const result = await deleteTransaction(filter);

      console.log(result);

      if (result._id) {
        return res.json({
          status: "success",
          message: "The transaction has been deleted",
        });
      }
    }

    res.json({
      status: "error",
      message: "Invalid request",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
