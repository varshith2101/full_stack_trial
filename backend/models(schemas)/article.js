const mongoose = require('mongoose');

const article = new mongoose.Schema(
    {
        title: {
            type : String,
            required : true
        },

        content: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },

        thumbnail: {
            type: String
        },

        date: {
            type: Date
        }
    }
);

module.exports =  mongoose.model('article', article);