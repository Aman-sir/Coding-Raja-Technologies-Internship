import React, { useState } from 'react'
import Context from './createContext'

const BlogFunctionality = (props) => {

  const [blogData, setblogData] = useState({
    title: "",
    blog: ""
  })

  const updateBlog = (blog) => {
    console.log("blog", blog)
  }
const [fetchedBlog, setfetchedBlog] = useState()
  const [showModal, setShowModal] = React.useState(false);

  const setUpdateBlog = (blog) => {
    // blogData=blog
    console.log("blog", blog)
    // console.log("blogData",blogData)
    setblogData({
      title: blog.title,
      blog: blog.blog


    })

  }

  const setModel = () => {
    showModal === true ? setShowModal(false) : setShowModal(true)
  }

  const bloginitial = [
    {
      "_id": "65cf6b42714d7e1fe5b8d96a",
      "user": "65cf208ccba71b06a1830ee6",
      "title": "Day-awesome",
      "blog": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quam obcaecati molestiae dignissimos ad quisquam quis perspiciatis nesciunt beatae sit dolores, quidem, eum aliquam. Aut quo quasi saepe assumenda, veniam enim quos vel ut, incidunt ea illum voluptates distinctio voluptate maxime magnam a vero nostrum. Inventore ipsum tenetur id illum.",
      "date": "2024-02-16T14:03:46.207Z",
      "__v": 0
    },
    {
      "_id": "65d03e978e0620799b81ee5a",
      "user": "65cf208ccba71b06a1830ee6",
      "title": "Day-2",
      "blog": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quam obcaecati molestiae dignissimos ad quisquam quis perspiciatis nesciunt beatae sit dolores, quidem, eum aliquam. Aut quo quasi saepe assumenda, veniam enim quos vel ut, incidunt ea illum voluptates distinctio voluptate maxime magnam a vero nostrum. Inventore ipsum tenetur id illum.",
      "date": "2024-02-17T05:05:27.594Z",
      "__v": 0
    },
    {
      "_id": "65d050278e0620799b81ee61",
      "user": "65cf208ccba71b06a1830ee6",
      "title": "Day-2",
      "blog": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quam obcaecati molestiae dignissimos ad quisquam quis perspiciatis nesciunt beatae sit dolores, quidem, eum aliquam. Aut quo quasi saepe assumenda, veniam enim quos vel ut, incidunt ea illum voluptates distinctio voluptate maxime magnam a vero nostrum. Inventore ipsum tenetur id illum.",
      "date": "2024-02-17T06:20:23.912Z",
      "__v": 0
    },
    {
      "_id": "65d050368e0620799b81ee63",
      "user": "65cf208ccba71b06a1830ee6",
      "title": "Day-5",
      "blog": " a vero nostrum. Inventore ipsum tenetur id illum.",
      "date": "2024-02-17T06:20:38.198Z",
      "__v": 0
    }
  ]

  const [blogs, setblogs] = useState(bloginitial)


  // add blog

  const addBlog = async ({ title, blog }) => {
    console.log("addBlog", title, blog)

    const response = await fetch(`http://localhost:3001/api/Blog/addBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")

      },
      body: JSON.stringify({ title, blog }),
    });

    const json = await response.json()
    setblogs(json);

    let data = {
      "_id": "647d7941f68761306d58c8c1",
      "title": title,
      "blog": blog,
      "__v": 0
    }
    setblogs(blogs.concat(data))
  }



  // delete blog

  const deleteBlog = async (id) => {
    const response = await fetch(`http://localhost:3001/api/Blog/deleteblog/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")

      }
    });
    const newblogs = blogs.filter((item) => { return item._id !== id })
    setblogs(newblogs)
  }





  // fetch all blogs

  const fetchBlogs = async () => {

    const response = await fetch(`http://localhost:3001/api/Blog/fetchallblogs`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token")

      }
    });
    const json = await response.json()
    setblogs(json);
  }






  //fetch specific blog
  const fetchSpecificBlog = async (id) => {

    const response = await fetch(`http://localhost:3001/api/Blog/fetchblog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token")
      }
    });
    let data = await response.json()
    setfetchedBlog(data)

  }


  // update Blogs

  const updateBlogs = async (data) => {
    const { id, title, blog } = data
    console.log('id of Note :', id)
    const response = await fetch(`http://localhost:3001/api/Blog/updateblog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")

      },
      body: JSON.stringify({ title, blog }),
    });
    const json = response.json();

    let blogContent = JSON.parse(JSON.stringify(blogs))
    for (let i = 0; i < blogs.length; i++) {
      let item = blogContent[i];
      if (item._id === id) {
        blogContent[i].title = title;
        blogContent[i].blog = blog;
        break;
      }

    }
    setblogs(blogContent);
  }


  console.log("blogData in blog", blogData)
  return (<Context.Provider value={{ showModal, setModel, blogs, addBlog, deleteBlog, fetchBlogs, fetchSpecificBlog, setfetchedBlog, fetchedBlog, setUpdateBlog, updateBlogs, blogData }}>{props.children}</Context.Provider>
  )
}

export default BlogFunctionality
