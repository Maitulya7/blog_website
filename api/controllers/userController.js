const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require('bcrypt')

const userLogin = asyncHandler( async (req , res) =>{
    const {username , password } = req.body
    res.json({requestData : {
        username,
        password
    }})
    res.json({message:"you are successfully login"})
})

const userRegister = asyncHandler( async (req , res) =>{
    const {username , password} = req.body

    if(!username || !password){
        res.status(400);
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({email})

    if(userAvailable){
        res.status(400);
        throw new Error("User already Available")
    }

    const hashPassword = await bcrypt.hash(password , 10)

})

module.exports = {
    userLogin ,
    userRegister
}