import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Trainerjobs() {
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/jobposts/all")
      .then((response) => response.json())
      .then((value) => setJobPosts(value));
  }, []);

  const handleApply = (jobPost) => {
    axios
      .post("http://localhost:9090/jobposts/create", jobPost)
      .then((response) => {
        alert("Job application successful:", response.data);
      })
      .catch((error) => {
        console.error("Error applying for job:", error);
      });
  };

  return (
    <>
      <div>
        <div className="job-post-list">
          {jobPosts.map((jobPost) => (
            <div key={jobPost.id} className="job-post-card">
              <h3>{jobPost.role}</h3>
              <p>{jobPost.company}</p>

              <p>{jobPost.totalExperience}</p>
              <p>{jobPost.relevantExperience}</p>
              <p>{jobPost.location}</p>
              <p>{jobPost.jobDescription}</p>
              <p>{jobPost.desiredSkillSet}</p>
              <p>{jobPost.responsibilities}</p>
              <p>{jobPost.additionalResponsibilities}</p>
              <p>{jobPost.applyLastDate}</p>
              <p>{jobPost.datePosted}</p>
              <p>{jobPost.postedby}</p>
              <div className="col">
                <div className="col-4">
                  <button
                    type="submit"
                    onClick={() => handleApply(jobPost)}
                    className="btn btn-warning fw-bold"
                  >
                    <i className="fa-solid fa-circle-check"></i> Apply
                  </button>
                </div>
                <div className="col-4">
                  <button type="submit">save</button>
                </div>
              </div>

              {/ Add more job post details as needed /}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trainerjobs;
