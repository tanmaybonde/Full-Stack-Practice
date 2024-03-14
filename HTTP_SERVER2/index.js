const express=require("express")
const bodyParser=require("body-parser")
const port=3000;
const app=express();
app.use(bodyParser.json())

app.get('/demo', (req,res)=>{
    console.log(req.body)
    res.send("HEllo world")
})
 
app.listen(3000,()=>{
    console.log("Server is running")
})