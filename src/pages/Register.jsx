import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { RegisterWithEmailPassword, user, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        if (pass.length < 6) {
            return alert("less than 6 character")
        }
        if (!uppercase.test(pass)) {
            return alert("need a uppercase");
        }
        if (!lowercase.test(pass)) {
            return alert("need a lowercase");
        }
        // console.log(name, pass, photourl, email)
        RegisterWithEmailPassword(email, pass)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photourl
                }).then(() => {
                    setUser(userCredential.user)
                }).catch((error) => {
                    console.log(error)
                });

            })
            .catch(err => console.log(err))
    }
    // console.log(user)
    const googleSignUp = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card max-w-md mx-auto bg-white shadow-2xl rounded-xl p-8 mt-10">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register now!</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Name */}
                            <div className="flex flex-col">
                                <label className="label text-gray-700 font-medium">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Enter your name"
                                    className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>

                            {/* Photo URL */}
                            <div className="flex flex-col">
                                <label className="label text-gray-700 font-medium">Photo URL</label>
                                <input
                                    type="text"
                                    name='photourl'
                                    placeholder="Enter photo URL"
                                    className="input input-bordered input-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="label text-gray-700 font-medium">Email</label>
                                <input
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

                            {/* Google Sign-up */}
                            <button
                                type="button"
                                onClick={googleSignUp}
                                className='btn btn-outline w-full flex items-center justify-center gap-2 mt-2 hover:bg-blue-50 transition'>
                                <FcGoogle className="text-xl" /> Sign up with Google
                            </button>

                            {/* Forgot password */}
                            <div className="text-right mt-2">
                                <a className="link link-hover text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
                            </div>

                            {/* Login link */}
                            <div className="text-center text-gray-600 mt-2">
                                <span>Already have an account? </span>
                                <Link to='/login' className='text-red-500 font-medium hover:underline'>Login</Link>
                            </div>

                            {/* Submit button */}
                            <button className="btn btn-neutral w-full mt-4 rounded-lg hover:bg-gray-700 hover:text-white transition">
                                Register
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;