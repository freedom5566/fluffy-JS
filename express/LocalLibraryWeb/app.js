const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//引入路由
const index = require("./routes/index");
const users = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views")); //設定view資料夾
app.set("view engine", "ejs"); //使用哪種模版引擎

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//這串還看不懂......
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //載入靜態文件目錄


//使用路由資料夾
app.use("/", index);
app.use("/users", users);

// catch 404 and forward to error handler
// 404方法
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
// middlewares錯誤處理?
app.use((err, req, res,next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
    next();
});

// set mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb://dbname:passwork@ds012578.mlab.com:12578/local_librarywow";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = app; //讓它可以在別的地方引入
