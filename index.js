import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import UserRouter from "./controllers/UserController.js"
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/", UserRouter);

mongoose.connect(process.env.MONGODB_LINK)
        .then(() => console.log("Mongodb connected successfully!!!"))
        .catch((err) => console.error(err));

app.listen(5000, () => {
    console.log("Server is listening!!!")
});
