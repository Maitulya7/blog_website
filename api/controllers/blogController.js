const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

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

module.exports = {
    blogPost
}