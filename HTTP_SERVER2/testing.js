const express=require("express")
const bodyParser=require("body-parser")
const port=3000;
const app=express();
app.use(bodyParser.json())
 
function sum(a,b){
    var ans=a+b;
    return ans;
  }


app.get('/', (req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const ans=sum(a,b)
    res.send("Our Addition is -> "+ans.toString())
})
 
app.listen(3000,()=>{
    console.log("Server is running")
})