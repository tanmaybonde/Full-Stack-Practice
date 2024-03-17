const express = require("express")
const app = express();


// Basic how you fetch ahe write the validation ahe all
app.get("/healthy", (req, res) => {
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId


    if (username != "Tanmay" && password != "1234") {
        res.json({
            msg: "Worng UP"
        });

        return;
    }


    if (kidneyId != 1 && kidneyId != 2) {
        res.json({
            msg: "Wrong ID"
        });
        return
    }


    res.send("You are healthy")

})



app.get("/healthy-check", (req, res) => {

    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if (!(username == "Tanmay" && password == "pass")) {
        if (!(kidneyId == 1 && kidneyId == 2)) {
            res.json({
                msg: "Your are given wrong data"
            })
        }
    }
    res.json({
        Message: "You are now fine......"
    })

})
function Validity(req,res,next) {
    const username=req.headers.username;
    const password=req.headers.password;
    if (username!= "Tanmay" && password != "1234") {
        res.json({
            msg: "Worng UP"
        });

    }else{
        next()
    }
}


function checkID(req,res,next) {
    const kidneyId=req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.json({
            msg: "Wrong ID"
        })
    }else{
        next()
    }
}

app.get("/via-middleware",Validity,checkID,(req,res)=>{

   
    res.json({
        Message:"You are fine and Healthy..........."
    })
})


app.listen(3000, () => {
    console.log("Server is running")
})