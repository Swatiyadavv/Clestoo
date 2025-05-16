import React from 'react';
import download from '../../assets/download.jpg';

function AuthLayout({ children }) {
    return (
       <div className="flex h-screen">
    <div className="w-1/2 h-full relative hidden md:block">
        <img src={download} alt="Background" className="w-full h-full object-cover" />
    </div>
    <div className="w-full md:w-1/2 flex items-center justify-center  h-full m-auto">
        <div className="max-w-md w-full">
            {children}
        </div>
    </div>
</div>

    );
}

export default AuthLayout;


