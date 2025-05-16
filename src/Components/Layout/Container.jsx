import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../header';

function Container({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="h-screen flex flex-col">
            <Header isOpen={isOpen} />
            <div className="flex flex-1">
               <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div className="flex-1 p-4 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Container;
