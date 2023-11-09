const Post=require("../Models/postModel")
const Like=require("../Models/likeModel");
 

//like a post
exports.likepost=async (req,res)=>{ 

    try {
        const{post,user}=req.body;
        const like =new Like({
            post,user
        });

        const savedLike=await like.save();
         
        const updatedPost=await Post.findByIdAndUpdate(post , {$push :{likes :savedLike._id}},{new:true})
                             .populate("likes")
                             .exec();

            res.json({
                post:updatedPost,
            })                 

    } catch (error) {
        return res.status(500).json({
            error:"error while creating like",
              
            
        });
    }
}

//unlike a post

exports.unlikePost=async (req,res)=>{
    try {
        const{post,like}=req.body;


        //find and delete like collection me se
        const deletedLike=await Like.findOneAndDelete({post:post , _id:like});

        console.log("req ki body se data aa rahai aur delete ho rahi")

        console.log(deletedLike)

        //update the post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{ $pull: {likes:deletedLike._id}},{new:true});
  
        
        
console.log("post update ho gayi")
        res.json({
            post:updatedPost,
        })
    } catch (error) {
        return res.status(500).json({
            error:"error while deleting like",
              
            
        });
    }
}



exports.dummylink=(req,res)=>{
    res.send("this is dummy page")
};