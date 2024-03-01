import React, { useContext, useState } from 'react'
import Context from '../context/createContext';

const Modal = (props) => {

  const context = useContext(Context)
  const { showModal, setModel } = context

      const [fetchh, setfetchh] = useState({
        etitle:"",
        eblog: ""
      })



  const onchange = (e) => {
    setfetchh({ ...fetchh, [e.target.name]: e.target.value })
  }


  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hidden "
        type="button"
        onClick={setModel}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  my-2 mx-auto w-screen">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-1/2 mx-auto bg-red-500 outline-none focus:outline-none">

                <div className="flex items-start justify-between p-6 w-full ">
                  <h3 className="text-2xl font-semibold text-red-100">
                    Update  Blog
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModel}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative  px-6 flex-auto">
                  <form className=" text-blueGray-500 text-lg leading-relaxed flex space-y-4 flex-col">
                    <label htmlFor="etitle" className='text-white text-md'>Title</label>
                    <input type="text" className=' block w-full pl-2 rounded-md outline-none text-sm p-3 ' id="etitle" name="etitle" value={fetchh.etitle} onChange={onchange} />
                    <label htmlFor="eblog" className='text-white text-md'>BlogContent</label>
                    <textarea name="eblog" id="eblog" cols="30" rows="5" className='block w-full pl-2  text-sm p-3 rounded-md outline-none ' value={fetchh.eblog} onChange={onchange}></textarea>

                  </form>
                </div>
                <div className="flex items-center justify-end p-3 rounded-b">
                  <button
                    className="hover:bg-red-900 text-white  mx-2  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-solid border-red-200"
                    type="button"
                    onClick={setModel}
                  >
                    Close
                  </button>
                  <button className="hover:bg-red-900 text-white  mx-2  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-2 border-solid border-red-200"
                    type="button"
                    onClick={setModel}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal