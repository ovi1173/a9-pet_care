import React from 'react';
import { FaSnowflake, FaPaw, FaThermometerHalf, FaWater } from 'react-icons/fa';

const WinterCareTips = () => {
    const winterTips = [
        {
            id: 1,
            icon: <FaSnowflake className="text-blue-500 text-4xl" />,
            title: "Keep Warm Indoors",
            description: "Ensure your pets have a warm, cozy place to rest away from cold drafts."
        },
        {
            id: 2,
            icon: <FaPaw className="text-green-500 text-4xl" />,
            title: "Protect Their Paws",
            description: "Use pet booties or paw wax to protect paws from ice, salt, and cold surfaces."
        },
        {
            id: 3,
            icon: <FaThermometerHalf className="text-red-500 text-4xl" />,
            title: "Monitor Body Temperature",
            description: "Keep an eye on your pet's body temperature and limit outdoor exposure during extreme cold."
        },
        {
            id: 4,
            icon: <FaWater className="text-cyan-500 text-4xl" />,
            title: "Hydration is Key",
            description: "Make sure pets have access to fresh water, as they can dehydrate even in winter."
        }
    ];

    return (
        <div>
            <h2 className='my-8 text-center text-3xl font-bold'>Winter Care Tips for Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
                {winterTips.map((tip) => (
                    <div key={tip.id} className="card bg-base-100 shadow-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-4">{tip.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WinterCareTips;
