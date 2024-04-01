const express = require("express")
const router = express.Router();

router.post("/profile" ,) // create profile 
router.route("/profile/:userId").put().get().delete() // CRUD IN USER PROFILE
router.route("/profile/:userId/follow").post().get().delete() // CRD IN USER FOLLOW

module.exports = router

