const express=require('express')
const router=express.Router()
const multer=require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' });

const {createPostController,allPostsController, singlePostController}=require('../controllers/PostController.js')
const {requireSignIn,isAdmin,isAuthor}=require('../middlewares/authMiddleware.js')


router.post('/create-post',requireSignIn,uploadMiddleware.single('file'),createPostController)

router.get('/all-posts',allPostsController)

router.get('/single-post/:id',singlePostController)

module.exports=router