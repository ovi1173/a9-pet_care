import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch('/pet_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, []);

    const findResult = services.find(service => service.serviceId == id);

    const handleBookNow = (e) => {
        e.preventDefault();
        toast.success('Service booked successfully!');
        setName('');
        setEmail('');
    };

    return (
        <div className="flex flex-col items-center px-4 sm:px-10 lg:px-20 py-10 space-y-10">
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Service Image */}
            <img
                className="w-full max-w-4xl rounded-2xl shadow-lg object-cover"
                src={findResult?.image}
                alt={findResult?.serviceName}
            />

            {/* Service Details */}
            <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{findResult?.serviceName}</h2>
                <p className="text-gray-700">{findResult?.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <p><strong>Provider:</strong> {findResult?.providerName}</p>
                    <p><strong>Provider Email:</strong> {findResult?.providerEmail}</p>
                    <p><strong>Price:</strong> ${findResult?.price}</p>
                    <p><strong>Rating:</strong> {findResult?.rating} ⭐</p>
                    <p><strong>Slots Available:</strong> {findResult?.slotsAvailable}</p>
                    <p><strong>Category:</strong> {findResult?.category}</p>
                </div>
            </div>

            {/* Book Service Form */}
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Book This Service</h3>
                <form onSubmit={handleBookNow} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="label font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="label font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button className="btn btn-primary w-full mt-2 hover:bg-blue-600 transition">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;
