import React from 'react';
import Header from '../Header'

function Container({ children }) {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex-1 p-0 m-0 overflow-auto">
                {children}
            </div>
        </div>
    );
}
export default Container;
