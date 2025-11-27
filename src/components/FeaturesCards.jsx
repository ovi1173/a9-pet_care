import React from 'react';

const features = [
    {
        title: "Fast Delivery",
        description: "The fastest, the smartest",
        icon: "🚀",
    },
    {
        title: "Best Quality",
        description: "Quality is our top priority",
        icon: "🏆",
    },
    {
        title: "Promised Return",
        description: "You're promised a return if your product defect complies with our return policy.",
        icon: "🔄",
    },
];

const FeaturesCards = () => {
    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">We Provide High Quality Goods</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                        <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2 text-center">{feature.title}</h3>
                        <p className="text-gray-600 text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesCards;
