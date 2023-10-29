const mongoose=require('mongoose') 
const {Schema,model}=mongoose
const UserSchema=Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    trustScore:{
        type:String
    },
    role:{
        type:Number,
        default :0
    }
}) 

const userModel=model('User',UserSchema) //Model name is User and the schema for the model is UserSchema
module.exports=userModel; //exporting the model to be available outside this file