import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const params = useParams()
    console.log(params)
  return (
    <div>
      <Navbar />
      <h1>UserDetails</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

export default UserDetails;