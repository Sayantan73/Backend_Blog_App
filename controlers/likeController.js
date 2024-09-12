const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res)=>{
    try {
        const {post, user} = req.body;
        const like = new Like({post, user});
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}}, {new: true}).populate("likes").exec();

        res.status(200).json({post: updatedPost});
        
    } catch(e){
        res.status(500).json({message:"error while creating post",error: e})
    }
}

exports.unLikePost = async (req, res) => {
    try {
        const {post, like} = req.body;
        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true}).populate("likes").exec();
        res.status(200).json({post: updatedPost})
    } catch(e){
        res.status(500).json({message:"error while creating post",error: e.message})
    }
}