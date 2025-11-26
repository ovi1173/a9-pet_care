import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router'; 
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <div className="navbar bg-white shadow-md sticky top-0 z-50 px-6 py-3">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content mt-2 p-2 shadow bg-white rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/my-profile">My Profile</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-40" src={logo} alt="Logo" />
                </Link>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-medium text-gray-700">
                    <li>
                        <Link to="/" className="hover:text-blue-500 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-blue-500 transition-colors">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-profile" className="hover:text-blue-500 transition-colors">
                            My Profile
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {user ? (
                    <button
                        onClick={handleSignOut}
                        className="btn btn-outline btn-primary rounded-lg hover:bg-primary hover:text-white transition"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="btn btn-primary rounded-lg hover:bg-blue-600 transition"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
