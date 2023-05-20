import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Aos from 'aos';
import "aos/dist/aos.css";
import Swal from 'sweetalert2';

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);

    useEffect(() => {
        fetch('http://localhost:5000/barbies')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleView =()=>{
        Swal.fire('You Have to Login to see details');
    }

    return (
        <div className='px-16 my-20'>
            <h1 className='text-5xl font-bold text-[#FF8087] text-center'>Barbies By Category</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10'>
                {
                    categories.map(category =>
                        <>
                            <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className='' src={category.photoUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {category.name}
                                    </h2>
                                    <div className="flex">
                                        <div className="">Price: {category.price}</div>
                                        <div className="ms-10">Rating: {category.rating}</div>
                                    </div>
                                    {
                                        user ?
                                        <Link
                                     className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white mt-3" to={`/barbie/${category._id}`}>View Details</Link> :
                                     <Link
                                     className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white mt-3" onClick={handleView}>View Details</Link>
                                    }
                                </div>
                            </div>
                        </>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;