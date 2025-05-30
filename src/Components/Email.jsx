import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './Layout/Authlayout';
import { toast, ToastContainer } from 'react-toastify';
function Email() {
    const [email,setEmail] = useState("");
    const navigate = useNavigate()


    const forgotPassword = async(e) =>
    {
        e.preventDefault(); 
        // axios.post('http://localhost:5000/user/forgotpassword/'
        axios.post(`${import.meta.env.VITE_APP_API_URL}/user/forgotpassword/`,{
            email:email
        })
        .then(async(res) =>
        {
             if(res.status===200)
             {
                toast.success(res.data.message);
                
                setTimeout(()=>
            {
              navigate('/OTPGenerator',{state:{email}})
            },1000)
            }
        })
        .catch((error)=>
        {
            console.log(error);
            toast.error(error.response.data.message)
        })
    }

  return (
            <AuthLayout>
            <section>
                 
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Verify Email
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" 
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                           
                            <div className="flex items-center justify-between">
                     <button onClick={forgotPassword}
                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Send OTP
                     </button>
                   </div>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <Link to="/Signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
          </section>
          <ToastContainer/>
          </AuthLayout>
            )
          }

export default Email