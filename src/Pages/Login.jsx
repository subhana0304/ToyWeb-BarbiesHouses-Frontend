import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='mt-20 p-20'>
            <div className='text-center bg-white shadow py-10'>
            <form>
                    <input type="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input className='btn bg-[#81D1E5] border-0 w-full max-w-xs' type="submit" value="Login" />
            </form>
            <p className='my-5'>Dont have an Account? <Link className='text-info' to='/signUp'>SignUp</Link></p>
            <button className='btn btn-outline'><FaGoogle/></button>
            </div>
        </div>
    );
};

export default Login;