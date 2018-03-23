const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let GenreSchema= new Schema({
        // 書的類別名稱
        name: {type: String, required: true, max: 100,min:3},
});

// Virtual for genre's URL
GenreSchema
    .virtual("url")
    .get(function () {
        return "/catalog/genre/" + this._id;
    });

//Export model
module.exports = mongoose.model("Genre", GenreSchema);