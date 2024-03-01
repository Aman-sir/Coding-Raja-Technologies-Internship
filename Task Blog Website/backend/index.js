const express = require('express')
const bodyparser = require('body-parser')
const mongo = require("./database")
const port = 3001
var cors = require('cors') 

const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))

mongo.connect   // mongo.connect is come from database.js


// let Blogmodel = mongo.Blogmodel;
let contact = mongo.contactModel;

app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/Blog',require('./routes/Blog.js'));

app.post("/contact",(req,res)=>{
    let contacts = new contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message

    })
    contacts.save()
    res.send(contacts)
})
app.listen(port, () => {
    console.log(`Server is listening at https://localhost:${port}`)
})

