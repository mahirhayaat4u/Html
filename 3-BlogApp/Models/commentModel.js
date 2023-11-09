//import mongoose
const mongoose=require("mongoose");
const Post=require("../Models/postModel")
//route handler
 const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //reference to the post model
    },
    user:{
        type:String,
        reuired:true,
    },
    body:{
        type:String,
        reuired:true,
    },

 });

//export

module.exports=mongoose.model("Comment",commentSchema);