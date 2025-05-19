import React from 'react'
import Signup from './Components/Signup';
import Login from './Components/Login';
import OTPGenerator from './Components/OTPGenerator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Email from './Components/Email';
import ConfirmPassword from './Components/ConfirmPassword';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<Login/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path='/Email' element={<Email/>}></Route>
    <Route path='/OTPGenerator' element={<OTPGenerator/>}></Route>
    <Route path='/ConfirmPassword' element={<ConfirmPassword/>}></Route>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/Home' element={<Dashboard/>}></Route>
    <Route path='/About' element={<Dashboard/>}></Route>
    <Route path='/PrivacyPolicy' element={<Dashboard/>}></Route>
    <Route path='/ContactUs' element={<Dashboard/>}></Route> 
   </Routes>
   </BrowserRouter>
  )
}

export default App;