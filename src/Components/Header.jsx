import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa';
import SessionManager from '../../utils/Session';
import Clesto from '../assets/clesto.jpg'
const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        SessionManager.session.logout()
        navigate('/Login');
        };
         return (
        <header className={`bg-purple-200 shadow-lg`}>
            <div className="max-w-7xl px-1 py-1 mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-2">
                        <img 
                        src={Clesto}
                        className='w-50 -ml-5'/>
                    </div>
                    <nav className="space-x-4">
                        <Link to="/Home" className="text-purple-700 hover:text-purple-800">Home</Link>
                        <Link to="/About" className="text-purple-700 hover:text-purple-800">About</Link>
                        <Link to="/PrivacyPolicy" className="text-purple-700 hover:text-purple-800">Privacy Policy</Link>
                           <Link to="/ContactUs" className="text-purple-700 hover:text-purple-800">Contact Us</Link>
                    </nav>
                    <div>
                        <button onClick={handleLogout} className="bg-purple-800 hover:bg-purple-900 rounded-lg px-4 py-2 text-white -mr-100">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
