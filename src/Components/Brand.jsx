import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Brand = () => {

    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-16 w-full'>
            <img data-aos="fade-right" src="https://i.ibb.co/jHTKwTK/Group-14.png" alt="" />
            <img data-aos="fade-up" src="https://i.ibb.co/XkW5P33/Group-14-2.png" alt="" />
            <img data-aos="fade-left" src="https://i.ibb.co/qpLSkY6/Group-14-1.png" alt="" />
        </div>
    );
};

export default Brand;