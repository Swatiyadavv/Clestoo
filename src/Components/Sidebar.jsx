import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-purple-900 text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-54' : 'w-14'}`}
            style={{
                zIndex: 40,
                position: 'absolute',
            }}
        >
            
            <div
                onClick={toggleSidebar}
                className="p-2 m-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 cursor-pointer z-50"
            >
                {isOpen ? <FaTimes size={10} /> : <FaBars size={20} />}
            </div>

          
            <div className={`p-4 ${!isOpen && 'hidden'}`}>
                <h2 className="font-bold">Dashboard</h2>
            </div>
            <ul className="space-y-4 p-4">
                <li className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${!isOpen && 'justify-center'}`}>
                    <FaHome size={isOpen ? 20 : 12} />
                    <Link to="/Home" className={`${!isOpen && 'hidden'} hover:text-gray-400`}>Home</Link>
                </li>
          
                <li className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${!isOpen && 'justify-center'}`}>
                    <FaUser size={isOpen ? 20 : 12} />
                    <Link to="/profile" className={`${!isOpen && 'hidden'} hover:text-gray-400`}>Profile</Link>
                </li>
        
                <li className={`flex items-center space-x-2 hover:bg-gray-700 p-2 rounded ${!isOpen && 'justify-center'}`}>
                    <FaCog size={isOpen ? 20 : 12} />
                    <Link to="/settings" className={`${!isOpen && 'hidden'} hover:text-gray-400`}>Settings</Link>
                </li>
            
            </ul>
        </div>
    );
}

export default Sidebar;
