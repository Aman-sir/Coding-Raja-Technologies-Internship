import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    }, [location])

    const logout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
    return (

        <nav className='bg-red h-fit text-white bg-slate-900 flex py-5 text-md sm:text-xl px-5 justify-between md:flex-row flex-col items-center space-y-6 md:space-y-0'>
            <div className="logo flex space-x-4 items-center">
                <img src="/blogdaily.png" alt="" className='w-28 mt-2' />
                <span className='text-xl font-bold'>BlogDaily</span>
            </div>
            <ul className='flex space-x-4 items-center'>
                <li>
                    <Link to="/" className={`cursor-pointer hover:text-red-500 hover:transition hover:duration-75 ${location.pathname=="/"?"font-bold":""}`}>Home</Link></li>
                <li >
                    <Link to="/Blogs" className={`cursor-pointer hover:text-red-500 hover:transition hover:duration-75 ${location.pathname=="/Blogs"?"font-bold":""}`}>Blogs</Link></li>
                <li>
                    <Link to="/about" className={`cursor-pointer hover:text-red-500 hover:transition hover:duration-75 ${location.pathname=="/about"?"font-bold":""}`}>About us</Link></li>
                <li>
                    <Link to="/contact" className={`cursor-pointer hover:text-red-500 hover:transition hover:duration-75 ${location.pathname=="/contact"?"font-bold":""}`}>Contact us</Link></li>

            </ul>
            {!localStorage.getItem("token")&&<div>
                <Link className="bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-3 mx-2 rounded" to="/login" >Login</Link>
                <Link className="bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-3 rounded" to="/signUp" >SignUp</Link>
            </div>}
            {localStorage.getItem("token")&&<div>
                <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-1 px-3 mx-2 rounded" onClick={logout}>Logout</button>
            </div>}

            
        </nav>

    )
}

export default Navbar