const express = require('express');
// creating the router
const blogRouter = express.Router();
const blogController = require('../controllers/blogController');


// get all movies
blogRouter.get('/', blogController.getBlogs);

// create new movie
blogRouter.post('/', blogController.createBlog);

// update movie
blogRouter.post('/:id', blogController.updateBlog);

// exporting our post router
module.exports = {
     blogRouter
};