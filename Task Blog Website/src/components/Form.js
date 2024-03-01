import React, { useContext, useState } from 'react'
import Context from '../context/createContext'

const Form = () => {




    const context = useContext(Context)
    const { addBlog } = context

    // let title = ""
    // let blog = ""

    // if (btnTitle === "Update Blog") {
    //     title = fetchedBlog.title
    //     blog = fetchedBlog.blog
    //     // console.log("title blog", title, blog)
    // }

    const [newdata, setnewdata] = useState({
        title: "",
        blog: ""
    })


    // console.log("form--->", context)



    let handleChange = (event) => {
        let { name, value } = event.target;
        // console.log(name, value)
        // console.log("data", data)
        setnewdata((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        // console.log("data", data)
        addBlog(newdata)
        // addBlog(data)

    }

    return (
        <div>
            <form className='w-1/3 mx-auto h-fit'>
                <label htmlFor="title" className="text-sm font-medium leading-6 text-white mt-2">Title</label>
                <div className="mt-2">
                    <input type="text" name="title" id="title" autoComplete="title" className="block border-0 w-full py-1.5 pl-2 rounded-md text-gray-900 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 outline-none" placeholder="Title" onChange={handleChange} />
                </div>
                <label htmlFor="blog" className="block text-sm font-medium leading-6 text-white mt-2">Description</label>
                <div className="mt-2">
                    <textarea id="about" name="blog" rows="3" className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 outline-none" placeholder='Description...' onChange={handleChange} ></textarea>
                </div>
                <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-3 rounded mt-5 mx-auto" onClick={handleClick}>Add Blog</button>

            </form>
        </div>
    )
}

export default Form