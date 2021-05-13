const express = require('express')
const router = express.Router();
const path = require("path");

// const mongojs = require('mongojs');

router.get('/', (req,res) => {
    console.log("hello");
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
})

router.get('/stats', (req,res) => {
    res.sendFile(path.resolve(__dirname, "../public/stats.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/exercise.html"));
  });


module.exports = router;