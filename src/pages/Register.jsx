import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { RegisterWithEmailPassword, user, setUser ,handleGoogleSignIn} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        console.log(name, pass, photourl, email)
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
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" name='name' placeholder="Name" />
                            {/* photo url */}
                            <label className="label">Photo URL</label>
                            <input type="text" name='photourl' className="input" placeholder="Photo URL" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <button onClick={googleSignUp} className='btn'><FcGoogle></FcGoogle></button>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <span>Already have an account?</span> <Link to='/login' className='text-red-500'>Login</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;