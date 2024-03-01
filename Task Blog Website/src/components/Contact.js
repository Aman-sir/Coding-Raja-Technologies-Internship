import React from 'react'
import { Link } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div className='text-white'>
      <section className="text-white body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl  title-font mb-4 text-red-600 font-semibold">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-white">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 font-bold bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-white">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 font-bold bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-3ray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 font-bold bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
              <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-3 rounded">Submit</button>

              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <Link className="text-red-500">example@email.com</Link>
                <p className="leading-normal my-5">49 Smith St.
                  <br/>Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <Link className="text-gray-400 hover:text-red-500">
                    <FacebookRoundedIcon/>
                  </Link>
                  <Link className="ml-4 text-gray-400 hover:text-red-500">
                    <TwitterIcon/>
                  </Link>
                  <Link className="ml-4 text-gray-400 hover:text-red-500">
                    <GitHubIcon/>
                  </Link>
                  <Link className="ml-4 text-gray-400 hover:text-red-500">
                    <InstagramIcon/>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact