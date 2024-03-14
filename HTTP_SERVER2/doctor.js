const express=require("express");
const port=3000;
const app=express()


var users=[{
    name:"John",
    age:10,
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json())

app.get('/',function(req,res){
    const johnkidneys=users[0].kidneys;
    const noOfKidneys=johnkidneys.length;
    let noOfHealthyKidneys=0;

    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            noOfHealthyKidneys=noOfHealthyKidneys + 1;
        }
    }

    const noOfUnhealthyKidnesy = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidnesy
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy

    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done !!!"
    })

})


app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})


function istheirunhealthykidney() {
    let atLeastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys[i].length;i++){
        atLeastOneUnhealthyKidney=true
    }
    return atLeastOneUnhealthyKidney
  }
 


app.delete("/",function(req,res){
    if(istheirunhealthykidney()){
        const newKidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
       if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
       }
    }
    users[0].kidneys=newKidneys
    res.json({msg:"done"})
    }
    else{
        res.status(411).json({
            msg:"You have bad kidney!!!"
        })
    }
})

app.listen(port)