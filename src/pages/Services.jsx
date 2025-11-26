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
        <div className='px-20 mt-8'>
            <div className='grid grid-cols-3 gap-4'>

                {services.map(service => (
                    <motion.div
                        key={service.serviceId}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.7 } }}
                        className="card bg-base-100 w-96 shadow-sm"
                    >
                        <figure>
                            <img
                                className='object-cover h-60 p-2 rounded-2xl w-full'
                                src={service?.image}
                                alt={service?.serviceName}
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{service?.serviceName}</h2>

                            <div className='flex justify-between'>
                                <p>Price: {service?.price}$</p>
                                <p>Rating: {service?.rating}</p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to={`/details/${service?.serviceId}`}>
                                    <button className="btn btn-primary">View Details</button>
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
