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
        <div>
            <h2 className='my-8 text-center text-3xl font-bold'>Meet Our Expert Vets</h2>
            <div className="grid grid-cols-3 gap-6 p-10">
                {vetData.map((vet) => (
                    <div key={vet.id} className="card bg-base-100 shadow-lg p-4">
                        <figure>
                            <img
                                src={vet.image}
                                alt={vet.name}
                                className="rounded-xl h-56 w-full object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">{vet.name}</h2>
                            <p className="text-gray-600">{vet.specialist}</p>
                            <p className="font-semibold">
                                Experience: {vet.experience} years
                            </p>

                            <div className="card-actions justify-end mt-3">
                                <button className="btn btn-primary">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurVets;