import React, {useState} from 'react'
import { Navigate, useNavigate ,Link} from 'react-router-dom'


const Login = () => {

  const [credentials, setCredentials] = useState({email: "", password: "",username:""}) 
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:3001/api/auth/addUser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: credentials.email, password: credentials.password,username:credentials.username})
      });
      const json = await response.json()
      console.log(json);
      if (json.authtoken){
          localStorage.setItem('token', json.authtoken); 
          navigate("/")
          

      }
      else{
          alert("Invalid credentials");
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt="Your Company"/>
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">Sign Up to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-gray-200">Username</label>
            <div class="mt-2">
              <input id="username" name="username" type="text" autocomplete="username" required class="block w-full  font-bold rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-5"  value={credentials.username} onChange={onChange}/>
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full  font-bold rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-5"  value={credentials.email} onChange={onChange}/>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-200">Password</label>
              <div class="text-sm">
                <Link href="#" class="font-semibold text-red-600 hover:text-red-500">Forgot password?</Link>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full font-bold rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-5" value={credentials.password} onChange={onChange} />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500">Sign Up</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link href="#" class="font-semibold leading-6 text-red-600 hover:text-red-500">Start a 14 day free trial</Link>
        </p>
      </div>
    </div>)
}

export default Login