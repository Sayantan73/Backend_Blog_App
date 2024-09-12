const express = require("express");
const router = express.Router()

// import controllers
const {dummyPage} = require("../controlers/dummyPage");
const {createComment} = require("../controlers/commentController")
const {createPost, getAllPost} = require("../controlers/postController")
const {likePost, unLikePost} = require("../controlers/likeController")



// create mapping 
router.get("/dummyPage", dummyPage);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unLikePost);




// export
module.exports = router;