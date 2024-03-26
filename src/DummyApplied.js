import React, { useState, useEffect } from "react";


function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }

    // Fetch applied jobs data from the API using the userId from localStorage
    fetch(`http://localhost:9090/jobs/users/${userId}/applied`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched applied jobs:", data); // Debug log to check fetched data
        setAppliedJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching applied jobs:", error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Applied Jobs</h2>
      <ul>
        {appliedJobs.map((appliedJob) => (
          <li key={appliedJob.id}>
            <div>
              <h3>User ID: {appliedJob.userId}</h3>
              <h4>Job Details</h4>
              <p>Location: {appliedJob.location}</p>
              <p>Role: {appliedJob.role}</p>
              <p>Job Description: {appliedJob.jobDescription}</p>
              <p>Total Experience: {appliedJob.totalExperience}</p>
              <p> Relevant Experience: {appliedJob.relevantExperience}  </p>
             
                
              <p>Company: {appliedJob.company}</p>
              <p>Desired SkillSet: {appliedJob.desiredSkillSet}</p>
              <p>Responsibilities: {appliedJob.responsibilities}</p>
              <p> Additional Responsibilities: {appliedJob.jadditionalResponsibilities}  </p>
               
               
             
              <p>Apply Last Date: {appliedJob.applyLastDate}</p>
              <p>Date Posted: {appliedJob.datePosted}</p>
              <p>Posted By: {appliedJob.postedby}</p>

              <p>Status: {appliedJob.status}</p>

              {/ Add other job details here /}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppliedJobs;
