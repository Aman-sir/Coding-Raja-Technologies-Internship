import React, { useContext, useEffect } from 'react'
import Form from './Form'
import Card from './Card'
import Context from '../context/createContext';
import Modal from './Modal';

const Container = () => {

  const context = useContext(Context)
  const { blogs, fetchBlogs } = context

  useEffect(() => {
    fetchBlogs()
  }, [])



  return (
    <>

      <Modal />
      <div>
        <h2 className="text-2xl text-red-500 text-center mt-10 mb-5 font-semibold">Add a New Blog</h2>
        <Form btnTitle="Add Blog" />
        <h2 className='text-2xl text-red-500 text-center font-semibold mt-24 mb-5'>Latest Blogs </h2>
        <div className='flex flex-wrap px-10 space-x-5 font-semibold space-y-5 justify-center mb-24 '>
          <div></div>
          {localStorage.getItem("token") && blogs.length <= 4 ? (blogs.map((item, index) => {
            return <Card blog={item.blog && item.blog} title={item.title} id={item._id} key={index} />
          })) : blogs.slice(blogs.length - 4, blogs.length).map((item, index) => {
            return <Card blog={item.blog && item.blog} title={item.title} id={item._id} key={index} />
          })}
        </div>

      </div>

    </>
  )
}

export default Container