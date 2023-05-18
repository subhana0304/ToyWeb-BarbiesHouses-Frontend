import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div className='mt-20 p-20'>
            <div className='text-center bg-white shadow py-10'>
            <form>
                    <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="text" placeholder="Photo URL" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="email" placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input className='btn bg-[#81D1E5] border-0 w-full max-w-xs' type="submit" value="Login" />
            </form>
            <p className='my-5'>Already have an Account? <Link className='text-info' to='/login'>Login</Link></p>
            <button className='btn btn-outline'><FaGoogle/></button>
            </div>
        </div>
    );
};

export default SignUp;