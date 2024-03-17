const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const port = 3000;

const app = express();
app.use(express.json());

const ALL_USERS = [{
        name: "JOhn",
        email: "john@gmail.com",
        password: "123",
    },
    {
        name: "Raj",
        email: "raj@gmail.com",
        password: "0000"
    }
];

function userExist(email, password) {
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].email === email && ALL_USERS[i].password === password) {
            return true;
        }
    }
    return false;
}

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!userExist(email, password)) {
        return res.status(403).json({
            msg: "User doesn't exist with this email/password."
        });
    }

    var token = jwt.sign({ email: email }, jwtpassword);
    console.log(token);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtpassword);
    const email = decoded.email;

    // Ensure the request is coming from an authenticated user
    if (!email) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    res.json({
        users: ALL_USERS
    });
});

app.listen(port, () => {
    console.log("server is running;");
});
