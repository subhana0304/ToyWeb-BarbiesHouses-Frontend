import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if(password < 6){
            setError('Please include minimum 6 length');
        } 

        createUser(email, password, photo, name)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                navigate('/');
                updateUserData(result.user, name, photo)
            })
            .catch((error) => {
                setError('invalid email or password');
                form.reset();
            })

            const updateUserData = (user, name, photo) =>{
                updateProfile(user,{
                    displayName: name,
                    photoURL: photo
                })
                .then(()=>{
                    console.log('user name photo updated');
                })
                .catch(error =>{
                    setError(error.message)
                })
            }

    }

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/');
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.log(error);
                setError('invalid email or password');
                form.reset();
            })
    }

    return (
        <div className='mt-20 p-20'>
            <div className='text-center bg-white shadow py-10'>
                <form onSubmit={handleSignUp}>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="email" name='email' placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input className='btn bg-[#81D1E5] border-0 w-full max-w-xs' type="submit" value="Login" />
                </form>
                <p className='my-5'>Already have an Account? <Link className='text-info' to='/login'>Login</Link></p>
                <p className="text-red-600">
                    {error}
                </p>
                <button onClick={handleGoogleSignUp} className='btn btn-outline'><FaGoogle /></button>
            </div>
        </div>
    );
};

export default SignUp;