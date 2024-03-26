import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "./Authstate";

export default function Add() {
    const user=getUserDetails();
  const [inputData, setInputData] = useState({ 
    email: "",
mobileNumber: "",
language1: "",
language2: "",
language3: "",
subject1: "",
subject2: "",
subject3: "",
proficiency: "",
professional: "",
currentSalary1: "",
statement: "",
description : "",
certifications: "",
selectedOption: "",
selectOption: "",
specialization: "",




});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
  
    // Check if user details exist
    if (!user || !user.userId) {
      // Handle the case when user details are not available
      console.error("User details not available");
      // You might want to redirect the user to the login page or display a message
      return;
    }
  
    axios
      .put(`http://localhost:9090/prava/user/${user.userId}`, inputData)
      .then((res) => {
        console.log(res); // Log the entire response for debugging
        alert("Profile updated successfully");
        navigate("/Profile"); // Navigate to another route if needed
      })
      .catch((err) => {
        console.error(err); // Log the error
        alert("Error occurred while updating profile. Please try again.");
      });
  }
  
  return (
    <div className="p-3 mt-3">
      <div className="d-flex container-fluid border bg-light p-2">
        <form onSubmit={handleSubmit}>
          <div>
            <div class="d-flex justify-content-between">
            <label htmlFor="email">New Email:</label>
            <input
              type="email"
              name="email"
              value={inputData.email}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              required
            />
             <label htmlFor="email">Qualification :</label>
            <input
              type="text"
              name="qualification"
              value={inputData.qualification}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, qualification: e.target.value })
              }
              required
            />
             <label htmlFor="email">Specialization :</label>
            <input
              type="text"
              name="specialization"
              value={inputData.specialization}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, specialization: e.target.value })
              }
              required
            />
            </div>
            <br></br>
            <div class="d-flex justify-content-between">
             <label htmlFor="subject1">Subject1 :</label>
            <input
              type="text"
              name="subject1"
              value={inputData.subject1}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, subject1: e.target.value })
              }
              required
            />
             <label htmlFor="subject2">Subject2 :</label>
            <input
              type="text"
              name="subject2"
              value={inputData.subject2}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, subject2: e.target.value })
              }
              required
            />
             <label htmlFor="subject3">Subject3 :</label>
            <input
              type="text"
              name="subject3"
              value={inputData.subject3}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, subject3: e.target.value })
              }
              required
            />
            </div>
             <label htmlFor="language1">Language1 :</label>
            <input
              type="text"
              name="language1"
              value={inputData.language1}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, language1: e.target.value })
              }
              required
            />
             <label htmlFor="language2">Language2 :</label>
            <input
              type="text"
              name="language2"
              value={inputData.language2}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, language2: e.target.value })
              }
              required
            />
             <label htmlFor="language3">language3 :</label>
            <input
              type="text"
              name="language3"
              value={inputData.language3}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, language3: e.target.value })
              }
              required
            />
             <label htmlFor="certifications">Certificates :</label>
            <input
              type="file"
              name="certifications"
              value={inputData.certifications}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, certifications: e.target.value })
              }
              required
            />
             <label htmlFor="statement">Statement :</label>
            <input
              type="text"
              name="statement"
              value={inputData.statement}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, statement: e.target.value })
              }
              required
            />
             <label htmlFor="currentSalary1">Salary :</label>
            <input
              type="number"
              name="currentSalary1"
              value={inputData.currentSalary1}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, currentSalary1: e.target.value })
              }
              required
            />
             <label htmlFor="email">New PhoneNumber:</label>
            <input
              type="number"
              name="mobileNumber"
              value={inputData.mobileNumber}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, mobileNumber: e.target.value })
              }
              required
            />
             <label htmlFor="selectedOption"> Interedted:</label>
            <input
              type="text"
              name="selectedOption"
              value={inputData.selectedOption}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, selectedOption: e.target.value })
              }
              required
            />
             <label htmlFor="selectOption">Most Preferred:</label>
            <input
              type="text"
              name="selectOption"
              value={inputData.selectOption}
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, selectOption: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-info mt-3 ms-5">
            Update 
          </button>
        </form>
      </div>
    </div>
  );
}
