import express from "express";
import dotenv from "dotenv"
import router from "./routes/user.js"
import connectDB from "./config/connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json())
app.use('/api/users', router)

app.get('/', (req,res) => {
    res.status(201).json("Login API");
})

app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
    })