import React from 'react';
import Header from '../header';

function Container({ children }) {
    return (
        <div className="h-screen flex flex-col">
            {/* Static Header */}
            <Header />
            <div className="flex-1 p-0 m-0 overflow-auto">
                {children}
            </div>
        </div>
    );
}

export default Container;
