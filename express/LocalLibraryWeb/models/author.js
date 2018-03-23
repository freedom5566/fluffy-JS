const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let AuthorSchema = new Schema(
    {
        //作者名稱
        first_name: {type: String, required: true, max: 100}, //驗證
        //作者姓
        family_name: {type: String, required: true, max: 100}, //驗證
        //出生日期
        date_of_birth: {type: Date},
        //死亡日期
        date_of_death: {type: Date},
    }
);

// Virtual for author's full name
AuthorSchema
    .virtual("name")
    .get(function () {
        return this.family_name + ", " + this.first_name;
    });

// Virtual for author's URL
AuthorSchema
    .virtual("url")
    .get(function () {
        return "/catalog/author/" + this._id;
    });

//Export model
module.exports = mongoose.model("Author", AuthorSchema);