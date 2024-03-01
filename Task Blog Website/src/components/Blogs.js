import React, { useContext, useEffect } from 'react'
import Context from '../context/createContext'
import Card from './Card'
import Modal from './Modal';


const Blogs = () => {
    useEffect(() => {
        fetchBlogs()

    }, [])


    const context = useContext(Context)
    const { blogs, fetchBlogs } = context



    return (
        <>
            <Modal />

            <h2 className='text-3xl text-red-300 text-center my-10 font-semibold'>Hey Blogger Your Content is here !</h2>
            <div className='text-white flex flex-wrap space-x-3 space-y-5 flex-row justify-center'>
                <div></div>
                {blogs.map((item, key) => {
                    return <Card title={item.title} blog={item.blog} id={item._id} key={key}  />
                })}
            </div>
        </>
    )
}

export default Blogs