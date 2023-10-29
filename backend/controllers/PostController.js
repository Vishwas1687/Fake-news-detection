const PostModel=require('../models/PostModel')
const fs=require('fs')
const createPostController=async(req,res)=>{
    try{
        console.log(req.file)
  const ext = 'png';
  const newPath = req.file?.path+'.'+ext;
  fs.renameSync(req.file?.path, newPath);

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

module.exports={createPostController}