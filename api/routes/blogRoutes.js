const express = require("express");
const router = express.Router();
const { blogPost } = require("../controllers/blogController");
const validateToken = require("../middleware/tokenHandler");
const uploadMiddleware = require("../middleware/uploadMiddleware");
const checkUpload = require("../middleware/checkUpload");

// Create blog post
router.post("/", uploadMiddleware.single("image"), checkUpload, validateToken, (req, res, next) => {
  blogPost(req, res, next);
});

router.route("/:blogId")
  .get()
  .put()
  .delete(); // CRD IN SPECIFIC BLOG

router.get("/"); // get all blogs

router.route("/:blogId/like")
  .post()
  .get()
  .delete(); // CRD IN LIKE

router.route("/:blogId/comment")
  .post()
  .get()
  .delete(); // CRD IN COMMENT

router.route("/:blogId/save")
  .post()
  .get()
  .delete(); // CRD IN BLOG SAVE

module.exports = router;
