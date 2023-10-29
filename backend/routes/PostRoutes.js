const express=require('express')
const router=express.Router()
const multer=require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' });

const {createPostController}=require('../controllers/PostController.js')
const {requireSignIn,isAdmin,isAuthor}=require('../middlewares/authMiddleware.js')


router.post('/create-post',requireSignIn,uploadMiddleware.single('file'),createPostController)

module.exports=router