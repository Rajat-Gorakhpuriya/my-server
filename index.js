// const express = require('express');    ---- can use directly
import express from "express";

const app = express();
const PORT = 5111;

app.all("/", (req, res)=> {
    console.log(`Request :`, req);
    console.log(`Response :`, res);
    res.send("I am sending response");
});

app.listen(POST, () =>{
    console.log(`Server is Started at : ${PORT}`);
});
