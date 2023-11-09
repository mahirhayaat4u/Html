const express=require('express')
const router=express.Router();

//import controller
 const {dummylink}=require("../Controller/likeController");
const {commentCreate}=require("../Controller/commentController")
const{createPost,getAllPost}=require("../Controller/postController")
const{likepost,unlikePost}=require("../Controller/likeController")



//mapping of controller
 router.get('/dummyroute',dummylink)
 router.post('/comments/create',commentCreate)
router.post('/post/create',createPost)
router.get('/posts',getAllPost)
router.post('/likes/like',likepost)
router.post('/likes/unlike',unlikePost)


//export
module.exports=router;