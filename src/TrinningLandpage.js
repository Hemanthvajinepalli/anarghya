import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import TrainerNav from "./Trainernav";
import { getUserDetails, setJobpost } from "./Authstate";
// import "./TrinningLandpage.css";
import axios from "axios";

function TrinningLandpage() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);
  const user = getUserDetails();
  const userId = localStorage.getItem("userId");
  const [savedJobPosts, setSavedJobPosts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9090/api/signup/all")
      .then((response) => response.json())
      .then((value) => setData(value));
  }, []);

  const onChange = (date) => {
    setDate(date);
  };

  // const handleCreate = async (jobPost) => {
  //   console.log(jobPost);
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:9090/jobs/${jobPost.jobId}/apply/${user.userId}`,
  //       {}
  //     );
  //     setJobpost(jobPost);
  //     // Optionally, you can navigate to another page or show a success message
  //     alert("Job application successful:", response.data);
  //   } catch (error) {
  //     console.error("Error creating applied job:", error);
  //     // Handle error, show error message, etc.
  //   }
  // };

  const handleCreate = async (jobPost) => {
    console.log(jobPost);
    try {
      const response = await axios.post(
        `http://localhost:9090/jobs/${jobPost.jobId}/apply/${userId}`,
        {}
      );
      console.log(response.data);
      alert("Job Applied Successfully");

      // Optionally, you can navigate to another page or show a success message
    } catch (error) {
      console.error("Error creating applied job:", error);
      // Handle error, show error message, etc.
    }
  };

  const saveJobPost = (jobId) => {
    // Find the job post by jobId
    const jobPostToSave = jobPosts.find((jobPost) => jobPost.jobId === jobId);
    if (jobPostToSave) {
      // Get the saved job posts from localStorage or initialize an empty array
      const savedPosts = JSON.parse(localStorage.getItem("savedJobPosts")) || [];
      // Check if the job post is already saved
      const alreadySaved = savedPosts.some((savedPost) => savedPost.jobId === jobId);
      if (!alreadySaved) {
        // Add the job post to the saved posts array
        const updatedSavedPosts = [...savedPosts, jobPostToSave];
        // Save the updated array back to localStorage
        localStorage.setItem("savedJobPosts", JSON.stringify(updatedSavedPosts));
        console.log("Job post saved successfully:", jobPostToSave);
      } else {
        console.log("Job post is already saved:", jobPostToSave);
      }
    }
  };
  

  // const saveJobPost = (jobId) => {
  //   // Find the job post by jobId
  //   const jobPostToSave = jobPosts.find((jobPost) => jobPost.jobId === jobId);
  //   if (jobPostToSave) {
  //     // Get the saved job posts from localStorage or initialize an empty array
  //     const savedPosts =
  //       JSON.parse(localStorage.getItem("savedJobPosts")) || [];
  //     // Check if the job post is already saved
  //     const alreadySaved = savedPosts.some(
  //       (savedPost) => savedPost.jobId === jobId
  //     );
  //     if (!alreadySaved) {
  //       // Add the job post to the saved posts array
  //       const updatedSavedPosts = [...savedPosts, jobPostToSave];
  //       // Save the updated array back to localStorage
  //       localStorage.setItem(
  //         "savedJobPosts",
  //         JSON.stringify(updatedSavedPosts)
  //       );
  //       // Update the saved job posts state
  //       setSavedJobPosts(updatedSavedPosts);
  //       console.log("Job post saved successfully:", jobPostToSave);
  //     } else {
  //       console.log("Job post is already saved:", jobPostToSave);
  //     }
  //   }
  // };

  // const saveJobPost = (jobId) => {
  //   // Fetch the job post details by ID from the jobPosts array
  //   const jobPostToSave = jobPosts.find((jobPost) => jobPost.jobId === jobId);
  //   if (jobPostToSave) {
  //     // Get the saved job posts from localStorage or initialize an empty array
  //     const savedPosts =
  //       JSON.parse(localStorage.getItem("savedJobPosts")) || [];
  //     // Add the job post to the saved posts array
  //     const updatedSavedPosts = [...savedPosts, jobPostToSave];
  //     // Save the updated array back to localStorage
  //     localStorage.setItem("savedJobPosts", JSON.stringify(updatedSavedPosts));
  //     // Optionally, display a success message or perform other actions
  //     console.log("Job post saved successfully:", jobPostToSave);
  //   }
  // };

  // const Appliedjobs = (jobPost) => {
  //   axios
  //     .post("http://localhost:8085/api/institute/apply", jobPost)
  //     .then((response) => {
  //       alert("Job application successful:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error applying for job:", error);
  //     });
  //   console.log(jobPost);
  //   setJobPostedDetails(jobPost);
  //   navigate("/appliedjobs");
  // };
  // useEffect(() => {
  //   fetch("http://localhost:9090/jobs/jobposts")
  //     .then((response) => response.json())
  //     .then((value) => setJobPosts(value));
  // }, []);
  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/jobs/jobPosts`);
        setJobPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job posts");
        setLoading(false);
      }
    };

    fetchJobPosts();
  }, []);

  return (
    <div>
      <TrainerNav />
      <div
        className="prefile-job  row fixed mt-4"
        style={{ fontFamily: "sans-serif" }}
      >
        <div
          className="  m-3  col-sm-12 col-md-6 col-lg-0 mt-3"
          style={{ fontFamily: "sans-serif" }}
        >
          <figure className="bg-body-secondary rounded d-flex justify-content-around">
            <div className="mt-5">
              <img
                class="nav-img1 nav-link disabled m-2"
                aria-disabled="true"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GVSLuEkgO8aHxzF5Zwg8SzhKBYRu0iP1CF_oPzbZR9RCalfJFpPb0xfe2tHLXZkdPbQ&usqp=CAU"
                width={80}
                alt=""
              />
            </div>
            <div className="p-2">
              <p>
                <strong>
                  Please complete your profile to get the best job for yourself!
                </strong>{" "}
              </p>
              <div className="d-flex col m-2">
                <div className="job-pre col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Job Preference
                </div>
                <div className="job-pre col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Education
                </div>
                <div className="job-pre1 col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Information
                </div>
              </div>
              <div className="d-flex col m-2">
                <div className="job-pre2 col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Work Experience
                </div>
                <div className="job-pre3 col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Professional Qualifications
                </div>
              </div>
              <div className="d-flex col m-2">
                <div className="job-pre2 col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Personal Achievement & Certifications
                </div>
                <div className="job-pre3 col-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle-fill m-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  Skills
                </div>
              </div>
              <div className="ml-10">
                <center>
                  <Link to="/Profile" class="btn btn-warning fw-bold m-2">
                    complete your profile
                  </Link>
                </center>
              </div>
            </div>
          </figure>
        </div>
        <div className="btns-fore  col-sm-11 col-md-5 col-lg-0 d-flex justify-content-center mt-3">
          <div>
            <div className="col m-3">
              <Link to="/SavedJobs" className="btn bg-body-secondary fs-5 p-2">
                <i class="fa-regular fa-bookmark fw-bold text-warning fs-3"></i>{" "}
                Saved Jobs
              </Link>
            </div>
            <div className="col m-3 mt-4">
              <Link
                className="btn bg-body-secondary fs-5 p-2"
                to="/Appliedjobs"
              >
                <i class="fa-regular fa-clipboard-list fw-bold fs-3 text-warning"></i>{" "}
                Applied Jobs
              </Link>
            </div>
          </div>

          <div>
            <div className="col m-3">
              <Link
                className="btn bg-body-secondary fs-5 p-2"
                
              >
                <i class="fa-solid fa-envelope-open fw-bold text-warning fs-3"></i>{" "}
                Invited Jobs
              </Link>
            </div>
            <div className="col m-3 mt-4">
              <Link
                to="/UnderProcess"
                className="btn bg-body-secondary fs-5 p-2"
              >
                <i class="fa-solid fa-spinner fw-bold fs-3 text-warning"></i>
                Under Process
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/ notifications and Nder /}

      <div className="container-fluid ">
        <h3 className="text-center">Featured Institutes</h3>
        <div
          // style={{ overflowY: "auto", maxHeight: "400px" }}
          className="rounded"
        >
          <div className="row mt-4">
            {data.map((list) => {
              return (
                <>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div
                      style={{
                        borderColor: "white",
                        borderRadius: "30px",
                        boxShadow: "10px",
                      }}
                      class="card bg-body-secondary  mt-3"
                    >
                      <div class="card-body">
                        <div className="d-flex justify-content-between p-2">
                          <div>
                            <p
                              style={{ color: "darkblue" }}
                              class="card-title fs-5  "
                            >
                              <i class="fa-solid fa-building-columns"></i>{" "}
                              {list.name}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between p-2 mt-2">
                          <span className="ms-2">
                            <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                            {list.address}
                          </span>
                          <span className="">
                            <i class="fa-solid fa-phone text-warning"></i>{" "}
                            {list.phoneNo}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between p-2">
                          <span className="ms-2">
                            <i class="fa-solid fa-envelope text-warning"></i>{" "}
                            {list.email}
                          </span>
                          <span className="">
                            <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                            {list.boardeducation}
                          </span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <span className="ms-2 ps-2 mt-2">
                            <i class="fa-solid fa-suitcase text-warning"></i>{" "}
                            {list.worktype}
                          </span>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className='calender1  col-sm-12 col-lg-4 col-xl-4 col-xxl-4'>    
          <Calendar 
            onChange={onChange}
            value={date} className='rounded bg-body-secondary' />
          <p>Selected date: {date.toDateString()}</p>
        </div> */}
          </div>
        </div>
      </div>
      <h3 class="text-center mt-4"> Featured Jobs</h3>
      <div className="job-post-list p-3 text-white d-block">
        {jobPosts.map((jobPost) => (
          <div key={jobPost.id} className="job-post-card">
            <div className="col-12">
              <div
                style={{ borderRadius: "20px", boxShadow: "initial" }}
                class="card bg-light  mt-3  text-black"
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p class="card-title fs-5">
                        <i class="fa-solid fa-building-columns"></i>{" "}
                        <b> Role:</b> {jobPost.role}
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <span className="">
                      <i class="fa-solid fa-location-dot text-warning"></i>{" "}
                      <b> Company:</b> {jobPost.company}
                    </span>

                    <span className="pe-5">
                      <i class="fa-solid fa-phone text-warning"></i>{" "}
                      <b> Experience:</b> {jobPost.totalExperience} Yrs
                    </span>

                    <span>
                      <i class="fa-solid fa-envelope text-warning"></i>{" "}
                      <b> Relevant Exp:</b> {jobPost.relevantExperience} Yrs
                    </span>

                    <span className="">
                      <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      <b> Location: </b> {jobPost.location}
                    </span>
                  </div>

                  <div className="d-flex p-2">
                    <span>
                      <i class="fa-solid fa-envelope text-warning"></i>{" "}
                      <b> Desiredskills:</b> {jobPost.desiredSkillSet}
                    </span>
                  </div>

                  <div class="d-flex p-2 ">
                    <span className="">
                      <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      <b> Responsibilities: </b>
                      {jobPost.responsibilities}
                    </span>
                  </div>
                  <div className="d-flex  p-2">
                    <span>
                      <i class="fa-solid fa-envelope text-warning"></i>{" "}
                      <b> Add Responsibilities:</b>{" "}
                      {jobPost.additionalResponsibilities}
                    </span>
                  </div>

                  <div class="d-flex justify-content-between p-2">
                    <span className="">
                      <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      <b> Lastdate:</b> {jobPost.applyLastDate}
                    </span>

                    <span>
                      <i class="fa-solid fa-envelope text-warning"></i>{" "}
                      <b> Posted on: </b> {jobPost.datePosted}
                    </span>

                    <span className="">
                      <i class="fa-solid fa-graduation-cap text-warning"></i>{" "}
                      <b> Postedby: </b> {jobPost.postedby}
                    </span>
                  </div>

                  <div className="d-flex  p-2">
                    <span className=" ps-2 mt-2">
                      <i class="fa-solid fa-suitcase text-warning"></i>{" "}
                      <b> Description: </b> {jobPost.jobDescription}
                    </span>
                  </div>

                  <button
                    // onClick={() => Appliedjobs(jobPost)}
                    onClick={() => handleCreate(jobPost)}
                    id="applybutton"
                    className=" btn btn-info fw-bold  text-dark p-2 ms-5"
                  >
                    <i class="fa-solid fa-circle-check"></i> Apply
                  </button>
                  <button onClick={() => saveJobPost(jobPost.jobId)}>Save</button>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-fluid bg-dark">
        <div className="row mt-3">
          <div className="col-12">
            <div className="d-flex justify-content-between p-2">
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/reach-best-job-seekers-logo-design-template_448617-242.jpg"
                  className="img-fluid rounded"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div>
                <div className="d-flex justify-content-around mt-3">
                  <div>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in fs-4 p-2 rounded text-white bg-primary"></i>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <i class="fa-brands fa-facebook fs-4 p-2 text-white bg-primary rounded"></i>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <i class="fa-brands fa-instagram fs-4 p-2 text-white bg-danger rounded"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrinningLandpage;
