import React from 'react';
import { RiLoaderFill } from "react-icons/ri";

const Loader = ({ children }) => {
    return (
        <div className='text-center font-medium flex justify-center items-center text-xl min-h-[calc(100vh_-_380px)]'>
            <RiLoaderFill className="animate-spin mr-3 text-primary text-3xl"></RiLoaderFill>
            {children}
        </div>
    );
};

export default Loader;