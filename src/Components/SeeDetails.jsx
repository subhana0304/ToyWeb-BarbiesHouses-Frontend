import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeDetails = () => {
    const barbie = useLoaderData();
    return (
        <div className='my-20 pt-20 px-16'>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:items-center p-10">
                <figure><img src={barbie.photoUrl} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-[#FF8087]">{barbie.name}</h2>
                    <div className="me-10">Seller Name: {barbie.category}</div>

                    <div className="me-10">Seller Name: {barbie.sName}</div>
                    <div className="me-10">Seller Email: {barbie.sEmail}</div>


                    <div className="me-10">Price: ${barbie.price}</div>
                    <div className="me-10">Available Quantity: {barbie.quantity}</div>


                    <div className="me-10">Rating: {barbie.rating}</div>
                    <div className="me-10">{barbie.description}</div>

                </div>
            </div>
        </div>
    );
};

export default SeeDetails;