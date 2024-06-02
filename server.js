import express from "express";
const app = express();
require("dotenv").config();
import cors from "cors";
const PORT = 8080;
import initRoutes from "./src/routes";
import connectDB from "./src/config/connectDB";
require("./src/passport/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://sovo2.link/',
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
initRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
