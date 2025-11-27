import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
const Login = () => {
    const { setUser, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                toast.success('Login successful!');
                navigate(location.state?.from || '/');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message || 'Login failed. Please try again.');
            })

    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success(`Welcome, ${user.displayName || 'User'}!`);
                navigate(location.state?.from || '/');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message || 'Google Sign-In failed.');
            });
    };
    const handleForget = () => {
        navigate(`/forget-pass/${email}`)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card max-w-2xl mx-auto bg-white shadow-2xl rounded-xl p-8 mt-10">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login now!</h1>
                        <form onSubmit={handleLogin} className="space-y-4">

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="label text-gray-700 font-medium">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col">
                                <label className="label text-gray-700 font-medium">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Enter your password"
                                    className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>

                            {/* Google Sign-in */}
                            <button
                                type="button"
                                onClick={googleSignIn}
                                className='btn btn-outline w-full flex items-center justify-center gap-2 mt-2 hover:bg-blue-50 transition'>
                                <FcGoogle className="text-xl" /> Sign in with Google
                            </button>

                            {/* Forgot password */}
                            <div className="text-right mt-2">
                                <button type="button" onClick={handleForget} className="link link-hover text-sm text-blue-500 hover:text-blue-700">
                                    Forgot password?
                                </button>
                            </div>

                            {/* Register link */}
                            <div className="text-center text-gray-600 mt-2">
                                <span>Don't have an account? </span>
                                <Link to='/register' className='text-red-500 font-medium hover:underline'>Register</Link>
                            </div>

                            {/* Submit button */}
                            <button className="btn btn-neutral w-full mt-4 rounded-lg hover:bg-gray-700 hover:text-white transition">
                                Login
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;