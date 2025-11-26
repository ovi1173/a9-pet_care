import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {
    const { user,setUser } = useContext(AuthContext);
    console.log(user)
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenFrom = () => {
        setIsOpen(!isOpen)
    }
    const handleUpDate=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
         updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                }).then(() => {
                    setUser({...user,photoURL:photoURL,displayName:name})
                }).catch((error) => {
                    console.log(error)
                });
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL
                    } />
                </div>
            </div>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <button onClick={handleOpenFrom} className='btn'>Update Profile</button>

            {
                isOpen && (
                    <form onSubmit={handleUpDate} className="fieldset">

                        {/* name */}
                        <label className="label">Name</label>
                        <input defaultValue={user?.displayName} type="text" className="input" name='name' placeholder="Your Name" />
                        {/* photo url */}
                        <label className="label">PhotoURL</label>
                        <input type="text" defaultValue={user?.photoURL} name='photoURL' className="input" placeholder="PhotoURL" />
                        <button className="btn btn-neutral mt-4">Update</button>
                    </form>
                )
            }
        </div>
    );
};

export default Profile;