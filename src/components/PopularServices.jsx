import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/pet_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));

        AOS.init({
            duration: 800,
            once: true, 
        });
    }, []);

    return (
        <div className="px-4 sm:px-10 lg:px-20 py-12">
            <h3 className="mb-10 text-center text-3xl font-bold text-gray-800">
                Popular Pet Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 6).map((service, index) => (
                    <div
                        key={service.serviceId}
                        className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <figure className="overflow-hidden h-60">
                            <img
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                                src={service?.image}
                                alt={service?.serviceName}
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold text-gray-800">
                                {service?.serviceName}
                            </h2>

                            <div className="flex justify-between text-gray-600 mt-2">
                                <p className="font-semibold">Price: ${service?.price}</p>
                                <p className="font-semibold">Rating: {service?.rating} ⭐</p>
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
