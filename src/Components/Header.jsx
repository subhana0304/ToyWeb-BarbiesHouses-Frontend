import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((error) => console.log(error))
    }

    const navItems = <>
        <li className='text-slate-500 font-semibold hover:bg-[#FF8087] hover:text-white'><Link to='/'>Home</Link></li>
        <li className='text-slate-500 font-semibold hover:bg-[#FF8087] hover:text-white'><Link to='/allBarbies'>All Barbies</Link></li>
        <li className='text-slate-500 font-semibold hover:bg-[#FF8087] hover:text-white'><Link to='/myBarbies'>My Barbies</Link></li>
        <li className='text-slate-500 font-semibold hover:bg-[#FF8087] hover:text-white'><Link to='/addBarbie'>Add Barbie</Link></li>
        <li className='text-slate-500 font-semibold hover:bg-[#FF8087] hover:text-white'><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 px-16 items-center fixed top-0 w-full z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <img className='h-12' src="https://i.ibb.co/k490L33/419-4192850-welcome-to-barbies-house-i-used-to-love-1-removebg-preview.png" alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogout} className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white">LogOut</Link>
                        :
                        <Link className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white" to="/login">Login</Link>
                }
                {user ?
                                <img className='h-10 ms-2 rounded-full' src={user.photoURL} alt="" />
                                :
                                ''
                            }
            </div>
        </div>
    );
};

export default Header;