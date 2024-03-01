const jwt = require("jsonwebtoken");
const jwtsec = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, laudantium!";


const fetchuser = (req, res, next) => {

    // Get the user id from jwt token and add it to req
    const token = req.header("auth-token")
    console.log(token)

    if (!token) {
        res.status(401).send({ error: "Please Authenticate using valid token" })
    }

    try {
        const string = jwt.verify(token, jwtsec)
        req.user = string
        next();

    } catch (error) {
        res.status(401).send({ error: "Please Authenticate using valid token" })

    }
}

module.exports = fetchuser;