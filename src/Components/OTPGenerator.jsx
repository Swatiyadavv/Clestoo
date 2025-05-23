import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthLayout from './Layout/Authlayout';
import { toast, ToastContainer } from 'react-toastify';
function OTPGenerator() {
  const [otp, setOtp] = useState(new Array(6).fill(''));  
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) 
        {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') 
      {
      // Move focus to previous input on backspace
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    // Join the OTP array to form a single string
    const otpString = otp.join('');
    axios.post(`http://localhost:5000/user/verifyOTP/${email}`, {
      email: email,
      otp: otpString
    })
    .then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
             setTimeout(()=>
            {
              navigate('/ConfirmPassword', { state: { email } });
            },1000)
      }
    })
    .catch((error) => {
      toast.error(error.response.data.message || 'Request failed!');
    });
  };
  return (
    <AuthLayout>
    <section>
       {/* className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"> */}
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">OTP Verification</h2>
        <div className="flex gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e.target, index)}
              className="w-12 h-12 text-center text-xl border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          ))}
        </div>
        <button
          onClick={verifyOTP}
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </section>
    <ToastContainer/>
    </AuthLayout>
  );
}
export default OTPGenerator;
