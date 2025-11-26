import React from 'react';

const MeetOurVets = () => {
    const vetData = [
        {
            id: 1,
            name: "Dr. Amelia Stone",
            specialist: "Winter Skin & Coat Specialist",
            experience: 8,
            image: "https://i.postimg.cc/DyBfm2bV/v2.png"
        },
        {
            id: 2,
            name: "Dr. Lucas Bennett",
            specialist: "Cold-Weather Paw Care Expert",
            experience: 5,
            image: "https://i.postimg.cc/xTtjq0NW/vet1.jpg"
        },
        {
            id: 3,
            name: "Dr. Sofia Rahman",
            specialist: "Pet Respiratory & Flu Specialist",
            experience: 10,
            image: "https://i.postimg.cc/rFQyz8R7/vet3.webp"

        }
    ];
    return (
      <div className="px-4 sm:px-10 lg:px-20 py-10">
    <h2 className="my-8 text-center text-3xl font-bold text-gray-800">
        Meet Our Expert Vets
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vetData.map((vet) => (
            <div
                key={vet.id}
                className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
                <figure className="overflow-hidden">
                    <img
                        src={vet.image}
                        alt={vet.name}
                        className="h-56 w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-xl font-semibold text-gray-800">
                        {vet.name}
                    </h2>
                    <p className="text-gray-600 mt-1">{vet.specialist}</p>
                    <p className="font-semibold mt-2">
                        Experience: {vet.experience} years
                    </p>

                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary rounded-lg hover:bg-blue-600 transition">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

    );
};

export default MeetOurVets;