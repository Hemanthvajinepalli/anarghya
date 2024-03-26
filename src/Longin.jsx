import React, { useState } from 'react';
// import Admain_App from "./Admain_App";
import './Longin.css';
// import Admin from './Admin';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Longin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8086/api/login', { email, password });
     
      if (response.data === 'User authenticated successfully') {        
        navigate('/Admin'); // Correct usage for React Router v6
      } else {
        setErrorMessage('Unexpected response from the server.');
      }
    } catch (error) {
      setErrorMessage('Login failed!');
    }
  };

  return (
    <div className='position-relative formcl'>
       <figure className="figur position-absolute top-50 start-50 col-12 col-sm-4"> 
        <form onSubmit={handleSubmit}>
          <center className='fs-2 font-monospace  '>Admin Login</center>
          <label className='font-monospace fs-4 m-1 ' htmlFor="email">Email:</label> <br />
          <input className='paswors m-2 col-11 col-sm-8 col-lg-11' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className='row figer1'>
            <label className='m-1 fs-4 font-monospace ' htmlFor="password">Password:</label><br />
            <input className='paswors m-2 col-11 col-sm-8 col-lg-11' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <button className='buttonss m-2' type="submit">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
       </figure>
      
      
    </div>
  );
}

export default Longin;
