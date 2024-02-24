import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"
import route from "./Router/Router.auth.js";

const app = express();
dotenv.config();


// middleware
app.use(express.json()) //handle the data comes from Clint (it convert into jsone format)
app.use(cors())        // Handle the cors error(cors API)
app.use(morgan('tiny')) // log which api we hit in minimal format
app.disable('x-powered-by') //less hackers know about our stack

// API Routes
app.use('/api',route)   // handle the route

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGODBURL;

app.get('/app',(req,res)=>{
    res.send("App is running")
})

mongoose.connect(URL).then(() => {
    console.log("MongoDB Connection");

    app.listen(PORT, () => {
      console.log(`Server is Start on ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
