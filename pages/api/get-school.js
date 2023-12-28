// pages/api/get-schools.js

import { schools } from './add-school'; // Import the schools array

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(schools);
    res.status(200).json(schools);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
