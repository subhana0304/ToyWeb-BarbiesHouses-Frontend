import React from 'react';

const Banner = () => {
    
    return (
        <div className="hero min-h-screen bg-[#D0D9DE] px-14">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src="https://i.ibb.co/VHdNsdP/lgwsalgrqhjq7xgqupaf-54e25223-d77b-447d-bebc-789cb1d14a4a-removebg-preview.png" className="" />
                <div className='lg:pe-16'>
                    <h1 className="text-4xl md:text-5xl font-bold text-black">Barbies House!</h1>
                    <p className="py-6">Barbie is dedicated to making play inclusive with a range of body types, skin tones, and varying disabilities. And with over 250 careers and inspiring playsets, the storytelling possibilities are endless.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;