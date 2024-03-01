const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router()
const { Blogmodel } = require("../database")

const fetchuser = require("../middleware/fetchuser")


// Route 1 get all blogs login required

router.get("/fetchallblogs", fetchuser, (req, res) => {
   try {

      Blogmodel.find({ user: req.user.id }).then((data) => {
         console.log("data", data)
         res.json(data)
      })

   } catch (error) {
      res.json({ errors: error })
   }

})


// Route 2  Add a new blog


router.post("/addBlog", fetchuser, [
   body("blog", 'Blog length cannot be shorter than minLength:20 ').isLength({ min: 5 }),
   body('title', 'Title cannot be emptied').exists(),
], (req, res) => {

   try {
      // if there are errors return bad request

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

   
      let Blog = new Blogmodel({
         title: req.body.title,
         blog: req.body.blog,
         user: req.user.id
      })

      Blogmodel.insertMany(Blog).then((data) => {
         res.json(data)
      }).catch((err) => {
         console.log(err)
      })


   } catch (error) {
      res.json({ errors: "Internal Server Error" })
   }

})



// Route 3 get aspecificblog blogs login required

router.get("/fetchblog/:id", fetchuser, (req, res) => {
   try {
      Blogmodel.findById(req.params.id).then((blog) => {
         // console.log(req.params.id)
         if (!blog) {
            return res.status(404).send("Not Found")
         }
         else if (blog.user.toString() !== req.user.id) {
            return res.status(401).send('UnAuthorized Access');
         }
         else {
            res.json(blog)
         }

      })
   }
   catch (error) {
      res.json({ errors: "Internal Server Error" })
   }

})



// Route 4 Update existing blog


router.put("/updateblog/:id", fetchuser, [
   body("blog", 'Blog length cannot be shorter than minLength:20 ').isLength({ min: 5 }),
   body('title', 'Title cannot be emptied').exists(),
], (req, res) => {

   try {
      // create a new blog object
      let blogup = {
         title: req.body.title,
         blog: req.body.blog
      }

      // find the user which he want to update

      Blogmodel.findById(req.params.id).then((blogs) => {
         console.log(req.params.id)
         if (!blogs) {
            return res.status(404).send("Not Found")
         }
         else if (blogs.user.toString() !== req.user.id) {
            return res.status(401).send('UnAuthorized Access');
         }
         else {

            Blogmodel.findByIdAndUpdate(req.params.id, { $set: blogup }).then((updatedata) => {
               console.log('Blog is Updated in the database')
               res.json(updatedata);
            }).catch((err) => {
               console.log(err)
            })
         }
      })

   } catch (error) {
      res.json({ errors: "Internal Server Error2" })
   }
})



// Route 5 Delete  existing blog


router.delete("/deleteblog/:id", fetchuser, (req, res) => {

   try {

      // find the user which he want to delete the blog

      Blogmodel.findById(req.params.id).then((blogs) => {
         console.log(req.params.id)
         if (!blogs) {
            return res.status(404).send("Not Found")
         }
         else if (blogs.user.toString() !== req.user.id) {
            return res.status(401).send('UnAuthorized Access');
         }
         else {

            Blogmodel.findByIdAndDelete(req.params.id).then((deletedata) => {
               console.log('Blog is Deleted from the database')
               res.json(deletedata);
            }).catch((err) => {
               console.log(err)
            })
         }
      })

   } catch (error) {
      res.json({ errors: "Internal Server Error2" })
   }
})

module.exports = router