import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import useTitle from '../Hoocks/useTitle';

const Login = () => {
    useTitle('Login');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        if(password < 6){
            setError('Please include minimum 6 length');
        }  

        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                setError('invalid email or password');
                form.reset();
            })
    }

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                setError('Something was wrong!')
            })
    }

    return (
        <div className='mt-20 p-20'>
            <div className='text-center bg-white shadow py-10'>
                <form onSubmit={handleLogin}>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-info w-full max-w-xs mb-5" />
                    <br />
                    <input className='btn bg-[#FF8087] border-0 w-full max-w-xs' type="submit" value="Login" />
                </form>
                <p className='my-5'>Dont have an Account? <Link className='text-info' to='/signUp'>SignUp</Link></p>
                <p className="text-red-600">
                    {error}
                </p>
                <button onClick={handleGoogleSignUp} className='btn btn-outline'><FaGoogle /></button>
            </div>
        </div>
    );
};

export default Login;