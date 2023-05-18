import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

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
                <a className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white"><Link to="/login">Login</Link></a>
                <img className='h-10 ms-2 rounded-full' src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-1/306704472_379482644392561_1509064695545297691_n.jpg?stp=c44.0.240.240a_dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u6Wz7AbJ2nEAX-PUODL&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfDhFXKEaQ48AJy2IyW48fDBHD1Pl0tqDsOTjGv1_QP5cw&oe=646A40B9" alt="" />
            </div>
        </div>
    );
};

export default Header;