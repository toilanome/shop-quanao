import express from 'express';
import dotenv from 'dotenv';
import router from "./routes"
import mongoose from 'mongoose';
import cors from 'cors'
dotenv.config();

const {PORT, DB_URL} = process.env;


const app = express();
app.use(express.json())
app.use(cors())
app.use("/api" , router);
mongoose.connect(DB_URL).then(()=>{
    console.log("database connection")
})

app.listen(PORT,()=>{
    console.log(`dang chay o port ${PORT}` )
})


