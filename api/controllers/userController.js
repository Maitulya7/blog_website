const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const userLogin = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are required")
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
        )
        res.status(200).json({ accessToken , username })
    } else {
        res.status(401)
        throw new Error("Username or Password is invalid")
    }

    res.json({ message: "you are successfully login" })
})

const userRegister = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400);
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({ username });

    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hashedPassword: ", hashedPassword, password)

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

    if (user) {
        res.status(201).json({ _id: user.id, username: user.username })
    } else {
        res.status(400);
        throw new Error("User data is not valid")
    }
})

const userInfo = asyncHandler(
    async ( req , res ) =>{
        res.status(200).json(req.user)
    }
)

module.exports = {
    userLogin,
    userRegister,
    userInfo
}