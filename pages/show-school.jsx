

import React, { useState, useEffect } from 'react';

const ShowSchool = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch('/api/get-school');

        if (response.ok) {
          const data = await response.json();
          
          setSchools(data);
        } else {
          console.error('Failed to fetch schools');
          // Handle error
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="vh-100 h-full container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">School Details</h2>
      <div className="rounded-md mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5  hover:shadow-lg transition duration-300">
        {schools.map((school) => (
          <div key={school.id} className="bg-gray-100 rounded-md ">
            <img
              src={school.image}
              alt="School Image"
              className="w-full h-32 object-fill mb-4 rounded-md"

            />
            <h3 className="text-xl font-semibold mb-2 p-4">{school.name}</h3>
            <p className="text-gray-700 mb-2 p-4">
              {school.address}, {school.city}, {school.state}
            </p>
            <button className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 w-full mt-auto'>
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchool;