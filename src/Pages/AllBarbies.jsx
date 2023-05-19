import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBarbies = () => {
    const [barbies, setBarbies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/barbies')
            .then(res => res.json())
            .then(data => setBarbies(data))
    }, [])
    return (
        <div className='px-16 my-20'>
            <h1 className='text-5xl font-bold text-[#FF8087] text-center'>All Barbies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-10'>
                {
                    barbies.map(barbie =>
                        <>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={barbie.photoUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {barbie.name}
                                    </h2>
                                    <p>Seller Name: {barbie.sName}</p>
                                    <p>Category: {barbie.category}</p>
                                    <div className="flex justify-between">
                                        <div className="">Price: {barbie.price}</div>
                                        <div className="">Available Quantity: {barbie.quantity}</div>
                                    </div>
                                    <Link className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white mt-3" to={`/barbie/${barbie._id}`}>See Details</Link>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default AllBarbies;