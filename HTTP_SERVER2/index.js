const express=require("express")
const bodyParser=require("body-parser")
const port=3000;
const app=express();
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    console.log(req.body)
    setTimeout(function(){
        res.send("HEllo world")
    },5000)
    console.log("hello.....")
    
})
 
app.listen(3000,()=>{
    console.log("Server is running")
})