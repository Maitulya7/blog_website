const express = require("express")
const router = express.Router()
const {userLogin , userRegister , userInfo , blogPost} = require("../controllers/userController")
const validateToken = require("../middleware/tokenHandler");


router.post("/login",userLogin)
router.post("/register",userRegister)
router.post("/post" , validateToken,blogPost)
router.get("/userInfo",validateToken , userInfo)



module.exports = router