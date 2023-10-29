const express=require('express')
const router=express.Router()

const {registerController,loginController}=require('../controllers/UserController.js')
const {requireSignIn,isAdmin,isAuthor}=require('../middlewares/authMiddleware.js')

router.post('/register',registerController)
router.post('/login',loginController)


module.exports=router