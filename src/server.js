
import express from "express";
import "dotenv/config";

import loginRouter from "./routes/userRouter.js";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(loginRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
