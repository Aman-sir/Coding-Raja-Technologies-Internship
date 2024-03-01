import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Context from '../context/createContext';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateBlog } from '../rtk/slice';


const Card = (props) => {

    let navigate = useNavigate()


    let { title, blog, id } = props


    if (!title) {
        title = "The Coldest Day"

    }
    if (!blog) {
        blog = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ab earum sed debitis dicta nam quam excepturi minus recusandae odio?'
    }



    const context = useContext(Context)
    const { deleteBlog, setModel, setUpdateBlog } = context
    const dispatch = useDispatch()

    const deleteBlogs = () => {
        alert(`Delete button is clicked ${id}`)
        deleteBlog(id)
    }


    const updateBlogs = async () => {
        alert(`Update button is clicked ${id} \n\n ${title}`)
        dispatch(updateBlog({ title, blog }))
        setUpdateBlog({ title, blog })
        setModel()

        // fetchSpecificBlog(id).then((data)=>{

        //     console.log("fetched-blog-1",data)
        // })
        // let path = `/`;
        // navigate(path);
    }

    const ReadMore = () => {
        alert(`Read button is clicked ${id} \n\n ${title}`)
        dispatch(updateBlog({ title, blog }))
        let path = `/Blog/${id}`;
        navigate(path);
    }

    return (
        <>

            <div className=" rounded overflow-hidden shadow-lg bg-red-700 h-fit max-w-sm">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-red-200">{title}</div>
                    <p className="text-red-300 text-justify text-sm">
                        {blog.length<=100?blog:(blog.substring(0,100)+'...')}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                    <span className="inline-block  rounded-md text-gray-200 text-sm font-semibold  mr-2 mb-2">{new Date().toDateString()}</span>
                    <div className="buttons">
                        <IconButton aria-label="readMore" onClick={ReadMore}>
                            <ReadMoreIcon className='text-white hover:text-red-600 hover:bg-red-100  rounded-full' />
                        </IconButton>
                        <IconButton aria-label="update" onClick={updateBlogs}>
                            <TextSnippetIcon className='text-white hover:text-red-600 hover:bg-red-100  rounded-full' />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={deleteBlogs}>
                            <DeleteIcon className='text-white hover:text-red-600 hover:bg-red-100  rounded-full' />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card