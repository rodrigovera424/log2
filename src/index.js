import express from "express";
import "dotenv/config";
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("test");

export default app;
