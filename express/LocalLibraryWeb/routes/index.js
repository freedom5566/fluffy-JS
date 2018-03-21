const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index/index", { title: "Express" });
});

module.exports = router; //讓他可以被appjs引入
