const jwt=require('jsonwebtoken')
const userModel = require('../models/UserModel')

const requireSignIn = async(req,res,next)=>{
    try {
        const token = req.headers.authorization
        const decode=jwt.verify(token,process.env.JWT_TOKEN)
        req.user=decode
        console.log(decode)
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:'Error in admin Middleware : Requires SignIn'
        })
    }
}

const isAdmin = async(req,res,next)=>{
    try {
        const id=req.user._id
        const user=await userModel.findById(id)
        if(user.role!==1){
            return res.status(400).send({
                success:false,
                message:'Unauthorized Access'
            })
        }
        else{
            next()
        }
    } catch (error) {
        console.log(error)
    }
}

const isAuthor = async(req,res,next)=>{
    try {
        const id=req.user._id
        const user=await userModel.findById(id)
        if(user.role!==2){
            return res.status(400).send({
                success:false,
                message:'Unauthorized Access'
            })
        }
        else{
            next()
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports={requireSignIn,isAdmin,isAuthor}