// connection between databse and server using mongoose

const mongoose=require('mongoose')

require("dotenv").config();

const dbConnect=()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/blogAppDatabase',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("databse connected successfully"))
    .catch((error)=>{
        console.log("databse error");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;