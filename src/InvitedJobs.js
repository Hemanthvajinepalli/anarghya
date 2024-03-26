// import React, { useEffect, useState } from "react";

// function InvitedJobs() {
//   // State to store the userId
//   const [jobId, setJobId] = useState(null);

//   // Function to fetch userId from API
//   const fetchUserIdFromApi = () => {
//     // Here, you would make your API call to fetch the userId
//     // Replace the URL with your actual API endpoint
//     fetch("http://localhost:9090/api/applied-jobs/users/jobId")
//       .then((response) => response.json())
//       .then((data) => {
//         // Set the userId in state
//         setUserId(data.jobId);
//       })
//       .catch((error) => {
//         console.error("Error fetching userId:", error);
//       });
//   };

//   // Effect to fetch userId from API on component mount
//   useEffect(() => {
//     fetchUserIdFromApi();
//   }, []);

//   // Function to handle storing userId in local storage
//   const storeUserIdInLocalStorage = () => {
//     localStorage.setItem("jobId", jobId);
//     console.log("userId stored in local storage:", jobId);
//   };

//   // Function to handle retrieving userId from local storage
//   const getUserIdFromLocalStorage = () => {
//     const storedUserId = localStorage.getItem("jobId");
//     console.log("userId retrieved from local storage:", storedId);
//     return storedUserId;
//   };

//   return (
//     <div>
//       <h1>UserId: {userId}</h1>
//       <button onClick={storeUserIdInLocalStorage}>Store UserId in Local Storage</button>
//       <button onClick={getUserIdFromLocalStorage}>Get UserId from Local Storage</button>
//     </div>
//   );
// }

// export default InvitedJobs;
