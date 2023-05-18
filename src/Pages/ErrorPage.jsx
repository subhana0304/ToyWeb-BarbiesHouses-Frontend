import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-red-600 text-6xl my-5 pt-20'>Oops! Page no Found.</h1>
            <p className='text-xl mb-3'>Tray again with valuable link</p>
        </div>
    );
};

export default ErrorPage;