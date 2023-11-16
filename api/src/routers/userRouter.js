import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "please check your email to verify your account",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
