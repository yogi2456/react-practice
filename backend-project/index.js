import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AllRoutes from "./routes/index.js"

const app = express();

app.use(express.json());
app.use(cors())
dotenv.config();



// app.use("/", (req, res) => {
//     res.send("hello yogesh")
// })

app.use("/api/v1", AllRoutes);


mongoose.connect(process.env.MONGODB_URL).then(() => {console.log("Database Connected..")})


app.listen(4000, () => {console.log("App is running on port 4000.")})