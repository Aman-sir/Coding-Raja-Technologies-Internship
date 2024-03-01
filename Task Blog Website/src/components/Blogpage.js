import React  from 'react'
// import Context from '../context/createContext';
import { useSelector } from 'react-redux';

const Blogpage = () => {

let data=useSelector((data)=>data.BlogData.BlogData)

    return (

        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-10"
            >
                <div className="relative  my-2 mx-auto w-screen">

                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-1/2 mx-auto bg-red-500 outline-none focus:outline-none">

                        <div className="flex items-start justify-between p-6 w-full ">
                            <h3 className="text-2xl font-semibold text-red-100">
                                Blog Data
                            </h3>

                        </div>
                        <div className="relative  px-6 flex-auto pb-10">
                            <div className=" text-blueGray-500 text-lg leading-relaxed flex space-y-4 flex-col">
                                <label htmlFor="etitle" className='text-white text-md'>Title</label>
                                <input type="text" className=' block w-full pl-2 rounded-md outline-none text-sm p-3 ' id="etitle" name="etitle" value={data.title} />
                                <label htmlFor="eblog" className='text-white text-md'>BlogContent</label>
                                <textarea name="eblog" id="eblog" cols="30" rows="5" className='block w-full pl-2  text-sm p-3 rounded-md outline-none ' value={data.blog} ></textarea>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Blogpage