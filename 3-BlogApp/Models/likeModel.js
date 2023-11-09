//import mongoose
const mongoose=require("mongoose");
const Post =require("../Models/postModel")
//route handler
 const likeSchema=new mongoose.Schema({
    like:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //reference to the post model
    },
    user:{
        type:String,
        reuired:true,
    },
   

 });

//exports

module.exports=mongoose.model("Like",likeSchema);