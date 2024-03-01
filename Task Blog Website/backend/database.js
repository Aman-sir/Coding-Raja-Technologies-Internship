const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/blogDaily"

let promise = mongoose.connect(url).then(() => {
    console.log("Server is connected with the Database")
})


const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const userModel = mongoose.model("user", userschema)

const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,

    date: { type: Date, default: Date.now },
})

const contactModel = mongoose.model("ContactBlog", contactSchema)

let BlogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    blog: {
        type: String
    },
    date: { type: Date, default: Date.now },
})

const Blogmodel = mongoose.model("Blog", BlogSchema)

module.exports = {
    connect: promise,
    BlogSchema: BlogSchema,
    Blogmodel: Blogmodel,
    contactModel: contactModel,
    userModel: userModel

}
