import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth);
    };

    const activeClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
            : "hover:text-blue-500 transition-colors";

    return (
        <div className="navbar bg-white shadow-md sticky top-0 z-50 px-6 py-3">
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
                        <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                        <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
                        <li><NavLink to="/my-profile" className={activeClass}>My Profile</NavLink></li>
                    </ul>
                </div>

                <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-40" src={logo} alt="Logo" />
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 font-medium text-gray-700">
                    <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
                    <li><NavLink to="/services" className={activeClass}>Services</NavLink></li>
                    <li><NavLink to="/my-profile" className={activeClass}>My Profile</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-4">
                {user ? (
                    <>
                        <button onClick={handleSignOut} className="btn btn-outline btn-primary rounded-lg hover:bg-primary hover:text-white transition" >
                            Logout
                        </button>

                        <div className="relative group cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="User" />
                                </div>
                            </div>

                            <div className="absolute -left-30 top-15 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
                                {user?.displayName}
                            </div>
                        </div>
                    </>
                ) : (
                    <NavLink to="/login" className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                        Login
                    </NavLink>
                )}
            </div>



        </div>
    );
};

export default Navbar;
