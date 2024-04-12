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
  .put(updateBlog)
  .delete( deleteBlog);

// Get all blogs
router.get("/", getAllBlogs);

// CRUD for likes on a blog
router.route("/:blogId/like")
  .post(likeBlog)
  .get(getLikes)
  .delete( unSaveBlog);

// CRUD for comments on a blog
router.route("/:blogId/comment")
  .post( commentOnBlog)
  .get(getComments)
  .delete( unSaveBlog);

// CRUD for saving a blog
router.route("/:blogId/save")
  .post( saveBlog)
  .get(getAllBlogs)
  .delete( unSaveBlog);

module.exports = router;
