const express = require('express')
const { body, validationResult } = require('express-validator')

const bcryptjs = require('bcryptjs')
const jwt = require("jsonwebtoken")


const jwtsec = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, laudantium!";

const { userModel } = require('../database');
const fetchuser = require('../middleware/fetchUser');

const router = express.Router()

//  Route-1 Add a new user or check existing user  using Post  api/auth/addUser

router.post("/addUser", [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter the valid EmailId').isEmail()
], (req, res) => {

    const errors = validationResult(req);

    // if there are errors return bad request

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        // check whether user exists or not

        userModel.findOne({ email: req.body.email }).then((user) => {
            if (user) {
                return res.status(400).json({ errors: "Sorry a user with this email is already exists" })
            }
            else {
                
                // Add a new user

                const salt = bcryptjs.genSaltSync(10)
                const pass = bcryptjs.hashSync(req.body.password, salt)

                let user = {
                    username: req.body.username,
                    email: req.body.email,
                    password: pass
                }

                userModel.insertMany(user).then((user) => {
                    console.log('Data is saved in the database');

                    const data = {
                        id: user.id
                    }

                    const authtoken = jwt.sign(data, jwtsec)
                    console.log(authtoken)

                    res.json({ authtoken })
                })

            }
        }).catch((err) => {
            res.json({ errors: "Internal Server Error" })
        })

    } catch (error) {

    }


})


// Route-2 Authenticate a user using Post  api/auth/login


router.post("/login", [body("email", 'Enter a valid email').isEmail(),
body('password', 'Password cannot be blanked').exists()
], async (req, res) => {

    // if there are errors return bad request


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // check whether user email exists or not

        userModel.findOne({ email: req.body.email })
            .then((user) => {
                if (!user) {
                    return res.status(400).json({ errors: "UserDoesn't Exists" })
                }

                else {

                    const passComp = bcryptjs.compareSync(req.body.password, user.password)
                    if (!passComp) {
                        return res.status(400).json({ errors: "Please try to login with correct credentials" })

                    }
                    else {
                        const data = {
                            id: user._id
                        }
                        console.log("dataId",data.id)
                        console.log("data",data)
                        const authtoken = jwt.sign(data, jwtsec)
                        console.log("auth-token",authtoken)

                        res.json({ authtoken })
                    }

                }
            }).catch((err) => {
                res.json(err)
            })

    } catch (error) {
        res.json({ errors: "Internal Server Error" })
    }

});


// Route-3  fetch User using POST api/auth/getUser


router.post("/getuser", fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        console.log("userid",userId)        

        let user = await userModel.findOne({ _id: userId }).select("-password")
        res.json(user)

    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({ errors: "Internal Server Error2" })
    }

});


module.exports = router