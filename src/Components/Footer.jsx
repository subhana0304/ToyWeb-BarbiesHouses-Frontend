import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-20">
            <div>
            <img className='h-14' src="https://i.ibb.co/k490L33/419-4192850-welcome-to-barbies-house-i-used-to-love-1-removebg-preview.png" alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Useful Links</span>
                <a className="link link-hover">All Barbies</a>
                <a className="link link-hover">My Barbies</a>
                <a className="link link-hover">Add Barbie</a>
                <a className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="footer-title">Contact Links</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Linkedin</a>
                <a className="link link-hover">Instagram</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;