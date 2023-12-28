// pages/api/add-school.js

export const schools = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, city, state, contactNumber, image, email } = req.body;

    const newSchool = {
      id: schools.length + 1,
      name,
      address,
      city,
      state,
      contactNumber,
      image,
      email,
    };

    // Log the existing schools array before adding the new school
    console.log('Existing schools:', schools);

    // Add the new school to the array
    schools.push(newSchool);

    // Log the updated schools array after adding the new school
    console.log('Updated schools:', schools);

    res.status(201).json({ message: 'School added successfully', school: newSchool });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
