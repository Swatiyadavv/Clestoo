import axios from 'axios'
import React, { useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer ,toast} from 'react-toastify'
import AuthLayout from './Layout/Authlayout';
function ConfirmPassword() {
 
  const[password,setPassword]= useState("")
  const[ConfirmPassword, setconfirmPassword] = useState("")
  const location = useLocation("")
  const email = location.state?.email;
  const navigate = useNavigate("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const resetPassword = async(e)=>
    {
      e.preventDefault();
      if(!passwordRegex.test(password))
      {
        toast.error("Password atleast 8 character");
        return;
      }
      if(password!==ConfirmPassword)
      {
        toast.error("Passwords do not match");
        return;
      }
      try{
        const res = await 
        // axios.patch(`http://localhost:5000/user/resetPassword/${email}`,
        axios.patch(`${import.meta.env.VITE_APP_API_URL}/user/resetPassword/${email}`,

        {
           password:password,
           ConfirmPassword:ConfirmPassword  
        }
       )
        if(res.status===200)
        {
          toast.success(res.data.message);
          setTimeout(()=>
          {
            navigate('/Login')
          },1000)
        }
      }
      catch(error)
      {
        toast.error(error.response.data.message)
      }
    }
  return (
      <AuthLayout> 
    <section> 
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" onChange={(e)=>setconfirmPassword(e.target.value)} name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 <button onClick={resetPassword} className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out'>Reset Password</button>
              </form>
          </div>
      </div>
  </div>
  <ToastContainer/>
</section>
 </AuthLayout>
  )
}
export default ConfirmPassword;
