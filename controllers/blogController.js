const {
     Blogs
} = require('../models/Blog');

// Get All Movies
const getBlogs = async (req, res) => {
     try {
          const blogs = await Blogs.find()
          res.json(blogs);
     } catch (error) {
          res.status(500).json(error);
     }
}

// Create Blog
const createBlog = async (req, res) => {
     try {
          const newPost = new Blogs(req.body);
          const savedPost = newPost.save(function () {});
          res.status(200).json({
               status: true,
               message: "Blog Posted Successful"
          });
     } catch (error) {
          res.status(500).json(error);
     }
};

// Update Blog
const updateBlog = async (req, res) => {

     if (req.body.id === req.params.id) {
          try {
               const blog = await Blogs.findById(req.params.id);
               console.log(blog);
               const updatedBlog = await Blogs.findByIdAndUpdate(req.params.id, req.body)
               res.json({
                    status: true,
                    message: "Blog Update Successful"
               })
          } catch (error) {
               res.status(500).json(error)
          }
     } else {
          res.json({
               status: false,
               error: "I guess You lost your way itterating through the Ids"
          })
     }

}


module.exports = {
     getBlogs,
     createBlog,
     updateBlog
}