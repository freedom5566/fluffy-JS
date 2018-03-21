const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
    res.render("users/users", {
        name: "安安",
    });
});
router.get("/cool",(req,res)=>{
    res.send("You're so cool");
});

module.exports = router; //讓他可以被appjs引入
