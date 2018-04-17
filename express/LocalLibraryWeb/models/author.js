const mongoose = require("mongoose");
let moment = require("moment");

let Schema = mongoose.Schema;

let AuthorSchema = new Schema(
    {
        //作者名稱
        first_name: { type: String, required: true, max: 100 }, //驗證
        //作者姓
        family_name: { type: String, required: true, max: 100 }, //驗證
        //出生日期
        date_of_birth: { type: Date },
        //死亡日期
        date_of_death: { type: Date },
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
AuthorSchema
    .virtual('lifespan')
    .get(function () {
        var lifetime_string = '';
        if (this.date_of_birth) {
            lifetime_string = moment(this.date_of_birth).format('MMMM Do, YYYY');
        }
        lifetime_string += ' - ';
        if (this.date_of_death) {
            lifetime_string += moment(this.date_of_death).format('MMMM Do, YYYY');
        }
        return lifetime_string;
    });

AuthorSchema
    .virtual('date_of_birth_yyyy_mm_dd')
    .get(function () {
        return moment(this.date_of_birth).format('YYYY-MM-DD');
    });

AuthorSchema
    .virtual('date_of_death_yyyy_mm_dd')
    .get(function () {
        return moment(this.date_of_death).format('YYYY-MM-DD');
    });
//Export model
module.exports = mongoose.model("Author", AuthorSchema);