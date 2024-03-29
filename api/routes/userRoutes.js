const express = require("express");
const router = express.Router();
const { userLogin, userRegister, userInfo, blogPost } = require("../controllers/userController");
const validateToken = require("../middleware/tokenHandler");

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploadMiddleware = multer({ storage: storage });

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/post", uploadMiddleware.single("image"), validateToken, (req, res, next) => {
    if (req.file) {
        blogPost(req, res, next);
    } else {
        const error = new Error('Failed to upload image');
        next(error); 
    }
});
router.get("/userInfo", validateToken, userInfo);

module.exports = router;
