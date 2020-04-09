var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    date: {
        type : String,
        required: true
    },
    priority: {
        type : Number,
        required: true
    },
});

var Todo = mongoose.model("Todo", TodoSchema);

module.exports= Todo