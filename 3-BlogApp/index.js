const express=require('express')
const app=express();


require("dotenv").config();
const PORT =process.env.PORT || 4000;


//middleware
app.use(express.json());


//Route
const craetePostBlogRoute=require("./Routes/blog");
//mount route
app.use("/api/v1",craetePostBlogRoute);


app.get("/",(req,res)=>{
    res.send(`<h1>hii blog</h1>`)
})

//db connect
const dbConnect=require("./Config/databse")
dbConnect();


app.listen(PORT,()=>{
    console.log(`server on port ${PORT} connected successfully`)
})

 
