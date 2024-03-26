// Profile.js

import React, { useEffect, useState } from 'react';
import { getUserDetails } from './Authstate';
import TrainerNav from './Trainernav';

function Profilesss() {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const userDetails = getUserDetails();
    if (userDetails) {
      fetch(`http://localhost:9090/prava/user/${userDetails.userId}`)
        .then((response) => response.json())
        .then((profileData) => {
          setUserProfile(profileData);
          console.log(profileData);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []); 

  return (
    <>
    <TrainerNav/>
    <div className='container-fluid' style={{fontFamily:"sans-serif"}}>
        <div className='row'>
            <div className='col-12'>
            <p className='text-center fw-bold fs-2'>User module</p>
            <div className='container mx-auto'>
               {Object.keys(userProfile).length > 0 && (
  <div className='bg-body-secondary p-5 rounded'>
    <p><span className='fw-bold'>ID:</span> {userProfile.userId}</p>
    <p><span className='fw-bold'>Name:</span> {userProfile.firstName}{userProfile.lastName}</p>
    <p><span className='fw-bold'>Email Id:</span> {userProfile.email}</p>
    <p><span className='fw-bold'>Adress:</span> {userProfile.address}</p>
    <p><span className='fw-bold'>State:</span> {userProfile.state}</p>
    <p><span className='fw-bold'>MobileNo:</span>{userProfile.mobileNumber}</p>
    <p><span className='fw-bold'>DateofBirth:</span>{userProfile.dateofbirth}</p>
    <button className='btn btn-warning'>Edit</button>
  </div>
)}

  </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Profilesss;
