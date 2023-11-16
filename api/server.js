import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;

// db connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

// APIs
import userRouter from "./src/routers/userRouter.js";

app.use("/api/v1/user", userRouter);

// server side rendering
app.use("/", (req, res, next) => {
  try {
    res.send("<h1>Coming soon...</h1>");
  } catch (error) {
    next;
  }
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`your server is serving at http://localhost:${PORT}`);
});
