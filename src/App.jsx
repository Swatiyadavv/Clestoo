

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import OTPGenerator from './Components/OTPGenerator';
import Email from './Components/Email';
import ConfirmPassword from './Components/ConfirmPassword';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Contactus from './Components/Contactus';
import Thanks from './Components/thanks';
import ProtectedRoute from './Components/ProtectedRoute';
import Upcoming from './Components/Upcoming';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/OTPGenerator" element={<OTPGenerator />} />
        <Route path="/ConfirmPassword" element={<ConfirmPassword />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/Dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/Home" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/About" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } />
        <Route path="/PrivacyPolicy" element={
          <ProtectedRoute>
            <PrivacyPolicy />
          </ProtectedRoute>
        } />
        <Route path="/ContactUs" element={
          <ProtectedRoute>
            <Contactus />
          </ProtectedRoute>
        } />
        <Route path="/thanks" element={
          <ProtectedRoute>
            <Thanks />
          </ProtectedRoute>
        } />
        <Route path="/Upcoming" element={
          <ProtectedRoute>
            <Upcoming />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
