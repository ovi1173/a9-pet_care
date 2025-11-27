import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/pet_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="px-6 md:px-20 mt-12">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Our Premium Services
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                    <motion.div
                        key={service.serviceId}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.3 } }}
                        className="card bg-base-100 shadow-lg rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2"
                    >
                        <figure className="overflow-hidden rounded-t-2xl">
                            <img
                                className='object-cover h-60 w-full'
                                src={service?.image}
                                alt={service?.serviceName}
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold">{service?.serviceName}</h2>

                            <div className='flex justify-between mt-2'>
                                <p className='font-medium text-gray-700'>Price: ${service?.price}</p>
                                <p className='font-medium text-gray-700'>Rating: {service?.rating} 🌟</p>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <Link to={`/details/${service?.serviceId}`}>
                                    <button className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
