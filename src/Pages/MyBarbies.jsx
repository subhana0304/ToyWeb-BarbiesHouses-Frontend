import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useTitle from '../Hoocks/useTitle';

const MyBarbies = () => {
    useTitle('MyBarbies');
    const { user } = useContext(AuthContext);
    const [barbies, setBarbies] = useState([]);

    const url = `http://localhost:5000/barbies?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBarbies(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure to delete it?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/barbies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const remaining = barbies.filter(barbie => barbie._id !== id);
                              setBarbies(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto w-full px-16 my-20 pt-20">
            <table className="table w-full">
                <tbody>
                    {
                        barbies.map(barbie => <>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <button onClick={() => handleDelete(barbie._id)} className="btn btn-circle bg-[#FF8087] border-0 text-white text-xl">
                                        X
                                    </button>
                                </th>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={barbie?.photoUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{barbie?.name}</div>
                                        <div className="text-sm opacity-50">{barbie?.category}</div>
                                    </div>

                                </td>
                                <td>
                                    Price: {barbie?.price}
                                    <br />
                                    <span className=" badge-sm">Quantity: {barbie?.quantity}</span>
                                </td>
                                <td>Rating: {barbie?.rating}</td>
                                <th>
                                    <button className="btn bg-[#FF8087] border-0"><Link to={`/updateBarbie/${barbie._id}`}>Update</Link></button>
                                </th>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBarbies;