import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/pet_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="px-4 sm:px-10 lg:px-20 py-10">
            <h3 className="my-8 text-center text-3xl font-bold text-gray-800">
                Popular Pet Section
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 6).map(service => (
                    <div 
                        key={service.serviceId} 
                        className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <figure className="overflow-hidden">
                            <img
                                className="object-cover h-60 w-full transform hover:scale-105 transition-transform duration-300"
                                src={service?.image}
                                alt={service?.serviceName}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold text-gray-800">{service?.serviceName}</h2>
                            <div className="flex justify-between text-gray-600 mt-2">
                                <p>Price: ${service?.price}</p>
                                <p>Rating: {service?.rating} ⭐</p>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <Link to={`/details/${service?.serviceId}`}>
                                    <button className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularServices;
