const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let BookSchema = new Schema(
    {
        // 書的標題
        title: {type: String, required: true},
        // 書作者
        author: {type: Schema.ObjectId, ref: "Author", required: true}, //引用Author模型
        // 書概要
        summary: {type: String, required: true},
        // 書ISBN
        isbn: {type: String, required: true},
        // 書的類型
        genre: [{type: Schema.ObjectId, ref: "Genre"}] //引用Genre模型
    }
);

// Virtual for book's URL
BookSchema
    .virtual("url")
    .get(function () {
        return "/catalog/book/" + this._id;
    });

//Export model
module.exports = mongoose.model("Book", BookSchema);