const PostModel=require('../models/PostModel')
const fs=require('fs')
const createPostController=async(req,res)=>{
    try{
        console.log(req.file)
       const {originalname,path,destination,filename} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = destination+filename+'.'+ext;
  fs.renameSync(path, newPath);

    const {title,summary,content} = req.body;
    const postDoc = await new PostModel({
      title,
      summary,
      content,
      cover:newPath,
      author:req.user._id,
    }).save();
    res.send({
        message:'Successfully created',
        success:true,
        postDoc
    });
    }catch(error)
    {
        res.send({
            message:'Error in creating the post',
            success:false,
            error:error.message
        })
    }
}

const allPostsController=async(req,res)=>{
    try{
    
    const posts=await PostModel.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
      .limit(20)
     res.send({
        message:'Successfully fetched all posts',
        success:true,
        posts
     })
    }catch(error)
    {
        res.send({
            message:'Error in fetching posts',
            success:false,
            error:error.message
        })
    }
}

const singlePostController=async(req,res)=>{
    try{
        const {id} = req.params;
  const postDoc = await PostModel.findById(id).populate('author', ['username']);
  res.send({
    message:'Successfully fetched posts',
    success:true,
    postDoc
  });
        
    }catch(error){
        res.send({
    message:'Error in fetching posts',
    success:false,
    error:error.message
  });
    }
}

module.exports={createPostController,allPostsController,singlePostController}