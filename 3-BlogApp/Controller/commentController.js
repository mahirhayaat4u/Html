//import model

const Comment=require("../Models/commentModel");
const Post=require("../Models/postModel");


//business logic
exports.commentCreate= async (req,res) =>{

    try {
        //fetch data from body of req

        const {user,post,body}= req.body; //body means comment 

        //create a comment object
        const comment=new Comment({
            post,user,body
        });

        //save the new comment in the databse

        const savecomment=await comment.save();

        //find the id of the post and new comment into the array of in post database
        const updatedPost=await Post.findByIdAndUpdate(post,{$push :{comments:savecomment._id}}, {new:true})
                          .populate("comments") //populate the comments array with comment document
                          .exec();

        res.json({
            post:updatedPost,
        });


    } catch (error) {
        return res.status(500).json({
            error:"error while creating comment",
            
            
        });
    };

};