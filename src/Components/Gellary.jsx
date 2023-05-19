import React, { useEffect, useState } from 'react';

const Gellary = () => {
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch('gellary.json')
        .then(res => res.json())
        .then(data => setImages(data))
    },[])
    return (
        <div className='px-16 my-20'>
            <h1 className='text-5xl font-bold text-[#FF8087] text-center'>Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10'>
            {
                images.map(image => <img src={image.img} alt="" />)
            }
        </div>
        </div>
    );
};

export default Gellary;