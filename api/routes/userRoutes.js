const express = require("express");
const router = express.Router();
const { userLogin, userRegister, userInfo } = require("../controllers/userController");
const {blogPost} = require("../controllers/blogController")
const validateToken = require("../middleware/tokenHandler");
const uploadMiddleware = require("../middleware/uploadMiddleware");
const checkUpload = require("../middleware/checkUpload");

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/post", uploadMiddleware.single("image"), checkUpload, validateToken, (req, res, next) => {
    blogPost(req, res, next);
});

router.get("/userInfo", validateToken, userInfo);

module.exports = router;
