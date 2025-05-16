import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChartPie } from 'react-icons/fa';
import SessionManager from '../../utils/Session';

const Header = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        SessionManager.session.logout()
        navigate('/Login');
        };
         return (
        <header className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? 'pl-54' : 'pl-14'}`}>
            <div className="max-w-7xl px-1 py-1 mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <div className="flex items-center space-x-2">
                        <div className="bg-purple-700 rounded-full p-4">
                            <FaChartPie className="text-white" size={20} />
                        </div>
                        <span className="text-4xl font-bold  text-purple-900">Clesto</span>
                    </div>
                    <nav className="space-x-4">
                        <a href="/Home" className="text-purple-700 hover:text-purple-900">Home</a>
                        <a href="/About" className="text-purple-700 hover:text-purple-900">About</a>
                        <a href="/Service" className="text-purple-700 hover:text-purple-900">Products</a>
                        <a href="/Contact" className="text-purple-700 hover:text-purple-900">Privacy Policy</a>
                           <a href="/Home" className="text-purple-700 hover:text-purple-900">Contact Us</a>
                        <a href="/About" className="text-purple-700 hover:text-purple-900">Search</a>
                    </nav>
                    <div>
                        <button onClick={handleLogout} className="bg-purple-800 hover:bg-purple-900 rounded-lg px-4 py-2 text-white">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
