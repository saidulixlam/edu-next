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

    
    schools.push(newSchool);


    res.status(201).json({ message: 'School added successfully', school: newSchool });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}