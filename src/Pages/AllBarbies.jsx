import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hoocks/useTitle';

const AllBarbies = () => {
    useTitle('AllBarbies');
    const [barbies, setBarbies] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://barbies-house.vercel.app/barbies')
            .then(res => res.json())
            .then(data => setBarbies(data))
    }, [])


    const handleSearch = () => {
        fetch(`https://barbies-house.vercel.app/search/${searchText}`)
            .then(res => res.json())
            .then(data => setBarbies(data))
    }

    return (
        <div className='px-16 my-20 '>
            <h1 className='text-5xl font-bold text-[#FF8087] text-center'>All Barbies</h1>

            <div className='text-center my-10 space-y-2 w-100'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search by Name or Category" className="input input-bordered w-full max-w-xs" />
                <button onClick={handleSearch} className='input input-bordered btn bg-[#FF8087]'>Search</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full  mt-10'>
                {
                    barbies.map(barbie =>
                        <>
                            <div key={barbie._id}>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <figure><img src={barbie.photoUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {barbie.name}
                                    </h2>
                                    <p>Seller Name: {barbie.sName}</p>
                                    <p>Category: {barbie.category}</p>
                                    <div className="flex justify-between">
                                        <div className="">Price: ${barbie.price}</div>
                                        <div className="">Available Quantity: {barbie.quantity}</div>
                                    </div>
                                    <Link className="btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white mt-3" to={`/barbie/${barbie._id}`}>See Details</Link>
                                </div>
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