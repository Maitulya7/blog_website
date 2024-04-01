// blogRouter.js
const express = require("express");
const router = express.Router();
const { blogPost, getBlogById, updateBlog, deleteBlog, likeBlog, getLikes, commentOnBlog, getComments, saveBlog, unSaveBlog, getAllBlogs } = require("../controllers/blogController");
const validateToken = require("../middleware/tokenHandler");
const uploadMiddleware = require("../middleware/uploadMiddleware");
const checkUpload = require("../middleware/checkUpload");

// Create blog post
router.post("/", uploadMiddleware.single("image"), checkUpload, validateToken, blogPost);

// CRUD for specific blog
router.route("/:blogId")
  .get(getBlogById)
  .put(validateToken, updateBlog)
  .delete(validateToken, deleteBlog);

// Get all blogs
router.get("/", getAllBlogs);

// CRUD for likes on a blog
router.route("/:blogId/like")
  .post(validateToken, likeBlog)
  .get(getLikes)
  .delete(validateToken, unSaveBlog);

// CRUD for comments on a blog
router.route("/:blogId/comment")
  .post(validateToken, commentOnBlog)
  .get(getComments)
  .delete(validateToken, unSaveBlog);

// CRUD for saving a blog
router.route("/:blogId/save")
  .post(validateToken, saveBlog)
  .get(getAllBlogs)
  .delete(validateToken, unSaveBlog);

module.exports = router;
