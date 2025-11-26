import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-5xl text-center mt-88 font-bold'>$404 page not found</h2>
            <Link to='/'><button className='btn btn-secondary mx-[50%] w-36 mt-5'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;