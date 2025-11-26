import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { setUser, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [email,setEmail] = useState('');

    //  console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate(location.state? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })

    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => console.log(error))
    }

   const handleForget =()=>{
    navigate(`/forget-pass/${email}`)
   }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="fieldset">

                            {/* email */}
                            <label className="label">Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" className="input" name='email' placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            
                                
                         <button onClick={googleSignIn} className='btn'><FcGoogle></FcGoogle></button>
                                
                            
                            <button onClick={handleForget}>
                                   <a className="link link-hover">Forgot password?</a>
                                </button>

                            <div>
                                <span>Don't have an account?</span> <Link to='/register' className='text-red-500'>Register</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;