// const express = require('express')
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { userModel } from "../src/models/userSchema.js";
const app = express();
const port = 3000;


// db connection
mongoose.connect("mongodb://127.0.0.1:27017/test");


app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});


// handling post request
app.post("/data", async(req, res) => {
    const { name, email, phone, course } = req.body;
    let result=await userModel.create({name,email,phone,course})
    console.log(result)
    res.json(result)

});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
