const mongoose = require("mongoose");

let moment = require("moment");
let Schema = mongoose.Schema;

let BookInstanceSchema = new Schema(
    {
        // 書 
        book: { type: Schema.ObjectId, ref: "Book", required: true }, //reference to the associated book
        // 版本
        imprint: { type: String, required: true },
        // 書四種狀態    
        status: { type: String, required: true, enum: ["Available", "Maintenance", "Loaned", "Reserved"], default: "Maintenance" },
        // 還書哦！ 
        due_back: { type: Date, default: Date.now }
    }
);

// Virtual for bookinstance's URL
BookInstanceSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookinstance/' + this._id;
    });

BookInstanceSchema
    .virtual('due_back_formatted')
    .get(function () {
        return moment(this.due_back).format('MMMM Do, YYYY');
    });


BookInstanceSchema
    .virtual('due_back_yyyy_mm_dd')
    .get(function () {
        return moment(this.due_back).format('YYYY-MM-DD');
    });
//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);