import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../Hoocks/useTitle';

const UpdateBarbie = () => {
    useTitle('UpdateBarbie');
    const addBarbie = useLoaderData();
    const {_id, name, photoUrl, sName, sEmail, category, price, rating, quantity, description} = addBarbie;

    const handleUpdateBarbie = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const sName = form.sName.value;
        const sEmail = form.sEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateBarbie = {
            name,
            photoUrl,
            sName,
            sEmail,
            category,
            price,
            rating,
            quantity,
            description
        }

        console.log(updateBarbie);

        fetch(`https://barbies-house.vercel.app/barbies/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBarbie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated Barbie SuccessFully');
                    form.reset();
                }
            })
    }
    return (
        <div className='my-20 px-16'>
            <h1 className='text-5xl font-bold text-[#FF8087] text-center mt-10 pt-10'>Update {name}</h1>
            <form onSubmit={handleUpdateBarbie}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={name} placeholder="Barbie Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="sName" defaultValue={sName} placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name="sEmail" defaultValue={sEmail} placeholder="Seller Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                </div>
                <textarea name="description" defaultValue={description} className="textarea input-bordered w-full" placeholder="Description"></textarea>
                <input className='btn bg-[#FF8087] border-0 hover:bg-[#f34a85] hover:text-white" to="/login w-full mt-5' type="submit" value="Update Barbie" />
            </form>
        </div>
    );
};

export default UpdateBarbie;