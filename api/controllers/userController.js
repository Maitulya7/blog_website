
const userLogin = (req , res) =>{
    const {username , password } = req.body
    res.json({requestData : {
        username,
        password
    }})
    res.json({message:"you are successfully login"})
}

const userRegister = (req , res) =>{
    res.json({message:"you are successfully register"})
}

module.exports = {
    userLogin ,
    userRegister
}