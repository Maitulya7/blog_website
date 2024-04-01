const express = require("express");
const router = express.Router();
const {userLogin , userRegister } = require("../controllers/authController")

router.post("/login", userLogin); // loign user 
router.post("/register", userRegister); // register user


module.exports = router