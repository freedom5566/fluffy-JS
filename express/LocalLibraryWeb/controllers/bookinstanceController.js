let BookInstance = require('../models/bookinstance');
let Book = require("../models/book");
let async = require("async");

// Display list of all BookInstances.
exports.bookinstance_list = function (req, res, next) {

    let query = BookInstance.find();
    query.exec(function (err, docs) {
        if (err) res.send(err);
        else res.send(docs);


    });
    // BookInstance.find({}, function (err, docs) {
    //     console.log(err);
    //     console.log(docs);


    // })
    //     .populate("book")
    //     .exec(function (err, list_bookinstances) {
    //         if (err) {
    //             res.send(err);
    //             return next(err);
    //         }


    //         // Successful, so render
    //         //res.render('catalogView/bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    //         res.json(list_bookinstances);
    //     });
    // BookInstance.find()
    // .populate('book')
    // .exec(function (err, list_bookinstances) {
    //   if (err) { return next(err); }
    //   // Successful, so render
    //   //res.render('catalogView/bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    //     res.send(list_bookinstances);
    // });
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};