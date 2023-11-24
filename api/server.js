import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const PORT = 8000;
import path from "path";

// db connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

// APIs
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { authMiddleware } from "./src/middlewares/authMiddleware.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/transaction", authMiddleware, transactionRouter);

//path to server static code made from npm run build
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));

// server side rendering
app.use("/", (req, res, next) => {
  try {
    // res.send("<h1>Coming soon...</h1>");

    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  } catch (error) {
    next;
  }
});

app.use((error, req, res, next) => {
  const status = error.status || 404;

  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`your server is serving at http://localhost:${PORT}`);
});
