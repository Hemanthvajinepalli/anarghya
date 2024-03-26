import React, { useState, useEffect } from "react";
import axios from "axios";

function CandidatesApplied({ appliedJobId }) {
  const [instituteId, setInstituteId] = useState( () => localStorage.getItem("instituteId") || "" );
    
 
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    if (!instituteId) {
      console.error("Institute ID not provided");
      // Optionally, you can return here or perform some other action
      return;
    }

    fetchAppliedJobsForInstitute(instituteId);
  }, [instituteId]);

  const fetchAppliedJobsForInstitute = async (instituteId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:9090/api/applied-jobs/${instituteId}/applied-jobs`
      );
      console.log("Fetched applied jobs for institute:", response.data);
      setAppliedJobs(response.data);
    } catch (error) {
      console.error("Error fetching applied jobs for institute:", error);
    } finally {
      setLoading(false);
    }
  };

  const selectCandidate = async (jobId) => {
    // Accept the job ID as a parameter
    try {
      await axios.post(
        `http://localhost:9090/api/applied-jobs/${jobId}/select`
      );
      console.log("Candidate selected successfully");
      alert("Candidate Selected Successfully");
      setSelectedCandidate(jobId);
    } catch (error) {
      console.error("Failed to select candidate:", error);
    }
  };

  const handleInputChange = (event) => {
    setInstituteId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("instituteId", instituteId);
  };

  if (!instituteId) {
    return (
      <div>
        <p>Please provide the Institute ID to view applied jobs:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={instituteId} onChange={handleInputChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      {/* {/ <h2>Applied Jobs for Institute {instituteId}</h2> /} */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {appliedJobs.map((appliedJob) => (
            <li key={appliedJob.id}>
              <div>
                {/* {/ <h3>User ID: {appliedJob.signUpEntity.userId}</h3> /} */}
                <h3>First Name: {appliedJob.signUpEntity.firstName}</h3>
                <h3>Last Name: {appliedJob.signUpEntity.lastName}</h3>
                <h3>Email: {appliedJob.signUpEntity.email}</h3>
                <h3>State: {appliedJob.signUpEntity.state}</h3>
                <h3>Country: {appliedJob.signUpEntity.country}</h3>
                <h3>Address: {appliedJob.signUpEntity.address}</h3>
                <h3>Date Of Birth: {appliedJob.signUpEntity.dateofbirth}</h3>
                <h3>Professional: {appliedJob.signUpEntity.professional}</h3>
                <h3>
                  Current Salary: {appliedJob.signUpEntity.currentSalary1}
                </h3>
                <h3>
                  Specialization: {appliedJob.signUpEntity.specialization}
                </h3>
                <h4>Job Details</h4>
                <p>Location: {appliedJob.jobPost.location}</p>
                <p>Role: {appliedJob.jobPost.role}</p>
                <p>Job Description: {appliedJob.jobPost.jobDescription}</p>
                <p>Total Experience: {appliedJob.jobPost.totalExperience}</p>
                <p>
                  Relevant Experience: {appliedJob.jobPost.relevantExperience}
                </p>
                <p>Company: {appliedJob.jobPost.company}</p>
                <p>Desired SkillSet: {appliedJob.jobPost.desiredSkillSet}</p>
                <p>Responsibilities: {appliedJob.jobPost.responsibilities}</p>
                <p>
                  Additional Responsibilities:{" "}
                  {appliedJob.jobPost.additionalResponsibilities}
                </p>
                <p>Apply Last Date: {appliedJob.jobPost.applyLastDate}</p>
                <p>Date Posted: {appliedJob.jobPost.datePosted}</p>
                <p>Posted By: {appliedJob.jobPost.postedby}</p>
                {selectedCandidate === appliedJob.id ? (
                  <p></p>
                ) : (
                  <button
                    onClick={() => selectCandidate(appliedJob.id)}
                    type="button"
                  >
                    Select
                  </button>
                )}{" "}
                <button type="submit">Invite</button>
                {/ Add other job details here /}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CandidatesApplied;
