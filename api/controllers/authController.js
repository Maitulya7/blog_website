const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const userLogin = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                id: user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken, username });
    } else {
        res.status(401);
        throw new Error("Username or Password is invalid");
    }
});

const userRegister = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userAvailable = await User.findOne({ username });

    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword: ", hashedPassword, password);

    try {
        const user = await User.create({
            username,
            password: hashedPassword
        });
        console.log(`User created ${user}`);
        res.status(201).json({ _id: user.id, username: user.username });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

const userInfo = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    const userBlogs = await Post.find({ userId: userId });
    res.status(200).json({
        user: {
            id: user._id,
            username: user.username,
        },
        blogs: userBlogs,
    });
});



module.exports = {
    userLogin,
    userRegister,
    userInfo,
};
