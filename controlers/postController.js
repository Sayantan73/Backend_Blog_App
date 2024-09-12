const Post = require("../models/postModel")

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body
        const post = new Post({title, body});
        const savedPost = await post.save();

        res.status(201).json({message:"Post created successfully", post: savedPost})
    }
    catch(e){
        res.status(500).json({message:"error while creating post",error: e.message})
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.find({}).populate("comments").populate("likes").exec();

        res.status(200).json({post: posts})

    } catch (e) {
        res.status(500).json({message:"error while fetching all posts",error: e.message})
    }
}