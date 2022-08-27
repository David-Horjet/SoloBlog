const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = {
    Blogs
};