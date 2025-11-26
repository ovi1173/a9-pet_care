import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/pet_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])
    const { serviceId, price, serviceName, description, category, rating, image } = services;
    console.log(services);
    return (
        <div className='px-10'>
            <h3 className='my-8 text-center text-3xl font-bold'>Popular Pet Section</h3>
            <div className='grid grid-cols-3 gap-4'>
                {
                    services.slice(0, 6).map(service => <div key={service.serviceId} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img className='object-cover h-60 p-2 rounded-2xl w-full'
                                src={service?.image}
                                alt="Shoes" />
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
                    </div>)
                }

            </div>
        </div>
    );
};

export default PopularServices;