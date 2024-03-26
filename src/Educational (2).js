import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
//import "./Registerform.css";

import "bootstrap/dist/css/bootstrap.min.css";
function Educational() {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [worktype, setWorktype] = useState("");
  const [boardeducation, setBoard] = useState("");

  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  // async function save(event) {
  //   event.preventDefault();
  //   if (!isValidEmail) {
  //     // setErr(true);
  //     setErrMail(true); // Show the error message
  //     return;
  //   }
  // }
  const handleDropdownChange = (event) => {
    // Update the selected option when the dropdown changes
    setSelectedOption(event.target.value);
  };
  //   const handleDropChange = (event) => {
  //     // Update the selected option when the dropdown changes
  //     setSelectOption(event.target.value);
  //   };

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|hotmail\.com|anarghyacomm\.in)$/;

    return emailRegex.test(email);
  };
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9090/api/signup/register", {
        name: name,
        phoneNo: phoneNo,
        email: email,
        address: address,
        state: state,
        boardeducation: boardeducation,
        worktype: worktype,
      });
      alert(" Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4">
              <div className="sideimage card shadow-sm">
                <img
                  src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png"
                  class="card2"
                  alt="..."
                />
                <div className="card-body mt-10">
                  <h5 className="card-title text-center">
                    <b>On registering,you can</b>
                  </h5>
                  <br></br>
                  <h6 className="card-text text-center ">
                    <img
                      style={{ width: "18px" }}
                      src="https://static-00.iconduck.com/assets.00/check-circle-1-icon-2048x2048-t5gzpu3y.png"
                      alt=".."
                    />
                    Build your profile and Find employees
                  </h6>
                  <h6 className="text-center ">
                    <img
                      style={{ width: "18px" }}
                      src="https://static-00.iconduck.com/assets.00/check-circle-1-icon-2048x2048-t5gzpu3y.png"
                      alt=".."
                    />
                    Get best employees right to your profile
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-8 card-body p-md-5">
              <div className="row justify-content-around">
                <div className="container-fluid bg-white m-3 shadow-sm p-5">
                  <div className="d-flex flex-row">
                    <div className="col-12">
                      <div className="container pt-2">
                        <form className="mx-1 mx-md-4" onSubmit={save}>
                          <h4 className="style">
                            <i>Registration Form</i>
                          </h4>
                          <br></br>

                          <div className="col-12">
                            <label
                              for="name"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              Institute Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter Name here"
                              value={name}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setName(updatedValue);
                              }}
                              required
                            />
                          </div>

                          <br></br>

                          <div className="col-12">
                            <label
                              for="name"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Enter the City here"
                              value={address}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setAddress(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <br></br>
                          <div className="col-12">
                            <label
                              for="mobileNumber"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="phoneNo"
                              placeholder="Enter mobile Number here"
                              value={phoneNo}
                              onChange={(event) =>
                                setPhoneNo(event.target.value)
                              }
                              title="Enter valid and 10-digit mobile number"
                              pattern="^[6-9]{1}[0-9]{9}"
                              required
                            />
                          </div>
                          <br></br>
                          <div className="col-12">
                            <label
                              for="email"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              email
                            </label>
                            <input
                              type="email"
                              className={`form-control  ${
                                isValidEmail ? "" : "is-invalid"
                              }`}
                              id="email"
                              placeholder="Enter the Email here"
                              value={email}
                              onChange={handleEmailChange}
                              title=" Please enter a valid email ending with @gmail.com or @hotmail.com."
                              required
                            />
                          </div>

                          <br></br>

                          <div className="col-12">
                            <label
                              for="name"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              State
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Enter the State here"
                              value={state}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setState(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <br></br>

                          <div className="col-12">
                            <label
                              for="name"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              Board of Education
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Enter the BoardName here"
                              value={boardeducation}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setBoard(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <br></br>

                          <div className="col-12">
                            <label
                              for="name"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              WorkType
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Fulltime/Parttime/Hybrid"
                              value={worktype}
                              onChange={(event) => {
                                const updatedValue = event.target.value.replace(
                                  /[^A-Za-z\s]/g,
                                  ""
                                );
                                setWorktype(updatedValue);
                              }}
                              required
                            />
                          </div>
                          <br></br>

                          <br></br>
                          <div className="col-12">
                            <label
                              for="job"
                              className="form-label text-dark-emphasis fw-bold"
                            >
                              Classification
                            </label>
                            <select
                              value={selectedOption}
                              onChange={handleDropdownChange}
                            >
                              <option>select</option>
                              <option value="option1">Schools</option>
                              <option value="option2">Colleges </option>
                              <option value="option3">Institutes</option>
                              required
                            </select>
                            <br />
                            <br />

                            <div>
                              <br></br>
                              <br></br>
                              <div className="col-12 text-center">
                                <button className="btn btn-primary">
                                  Sign Up
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Educational;
