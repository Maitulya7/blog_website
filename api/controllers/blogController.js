// blogController.js
const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// Create blogPost
const blogPost = asyncHandler(async (req, res) => {
  const { title, summary, content } = req.body;
  const image = req.file;

  if (!title || !summary || !content) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const post = await Post.create({
    title,
    summary,
    content,
    image: image.filename,
    userId: req.user.id,
  });

  if (post) {
    res.status(201).json({ post });
  } else {
    res.status(400);
    throw new Error("Failed to create post");
  }
});

// Get blog by ID
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);
  if (blog) {
    res.json(blog);
    res.json({message:"blog by ID"})
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// Update blog
const updateBlog = asyncHandler(async (req, res) => {
  const { title, summary, content } = req.body;
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  blog.title = title || blog.title;
  blog.summary = summary || blog.summary;
  blog.content = content || blog.content;

  const updatedBlog = await blog.save();
  res.json(updatedBlog);
});

// Delete blog
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const removedBlog = await Post.findByIdAndDelete(req.params.blogId);
  res.status(200).json({ removedBlog });
});


// Like a blog
const likeBlog = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }
  
  if (!blog.likes.includes(req.user.id)) {
    blog.likes.push(req.user.id);
    await blog.save();
    res.json({ message: "Liked the blog" });
  } else {
    res.status(400);
    throw new Error("Blog already liked");
  }
});

// Get likes on a blog
const getLikes = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.json({ likes: blog.likes.length });
});

// Comment on a blog
const commentOnBlog = asyncHandler(async (req, res) => {
  const { comment } = req.body;
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  blog.comments.push({ comment, userId: req.user.id });
  await blog.save();
  res.json({ message: "Comment added" });
});

// Get comments on a blog
const getComments = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.json({ comments: blog.comments });
});

// Save a blog
const saveBlog = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  // Add user id to saves array if not already saved
  if (!blog.saves.includes(req.user.id)) {
    blog.saves.push(req.user.id);
    await blog.save();
    res.json({ message: "Saved the blog" });
  } else {
    res.status(400);
    throw new Error("Blog already saved");
  }
});

// Unsave a blog (remove from saved blogs)
const unSaveBlog = asyncHandler(async (req, res) => {
  const blog = await Post.findById(req.params.blogId);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const index = blog.saves.indexOf(req.user.id);
  if (index > -1) {
    blog.saves.splice(index, 1);
    await blog.save();
    res.json({ message: "Unsaved the blog" });
  } else {
    res.status(400);
    throw new Error("Blog not saved");
  }
});

// Get all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Post.find();
  res.json(blogs);
});

module.exports = {
  blogPost,
  getBlogById,
  updateBlog,
  deleteBlog,
  likeBlog,
  getLikes,
  commentOnBlog,
  getComments,
  saveBlog,
  unSaveBlog,
  getAllBlogs,
};
