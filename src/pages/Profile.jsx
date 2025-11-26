import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    console.log(user)
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenFrom = () => {
        setIsOpen(!isOpen)
    }
    const handleUpDate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        }).then(() => {
            setUser({ ...user, photoURL: photoURL, displayName: name })
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-10">
            {/* User Avatar */}
            <div className="avatar mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                    <img src={user?.photoURL} alt={user?.displayName} className="object-cover w-full h-full" />
                </div>
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
            <p className="text-gray-600 mb-4">{user?.email}</p>

            {/* Update Profile Button */}
            <button
                onClick={handleOpenFrom}
                className="btn btn-primary rounded-lg px-6 py-2 hover:bg-blue-600 transition mb-6"
            >
                Update Profile
            </button>

            {/* Update Form */}
            {isOpen && (
                <form
                    onSubmit={handleUpDate}
                    className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4"
                >
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="label font-medium text-gray-700">Name</label>
                        <input
                            defaultValue={user?.displayName}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="flex flex-col">
                        <label className="label font-medium text-gray-700">Photo URL</label>
                        <input
                            defaultValue={user?.photoURL}
                            type="text"
                            name="photoURL"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <button className="btn btn-neutral w-full mt-2">Update</button>
                </form>
            )}
        </div>

    );
};

export default Profile;