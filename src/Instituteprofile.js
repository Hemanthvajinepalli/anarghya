import React from "react";
import Institutenavbar from "./Institutenavbar";

export default function Instituteprofile() {
  const instituteName = localStorage.getItem("instituteName");

  const instituteEmail = localStorage.getItem("instituteEmail");

  const institutePhoneNo = localStorage.getItem("institutePhoneNo");

  const instituteState = localStorage.getItem("instituteState");

  const instituteBoardeducation = localStorage.getItem(
    "instituteBoardeducation"
  );

  const instituteWorktype = localStorage.getItem("instituteWorktype");

  const instituteAddress = localStorage.getItem("instituteAddress");
  return (
    <>
      <Institutenavbar />
      <div className="container-fluid bg-light d-flex">
        <div className="row">
          <div className="col-4">
            <div
              className=" col-xl-4 card p-1 mt-5 shadow bg-white  ms-4 mr-4"
              style={{ width: " 22rem", height: "13rem" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img
                      style={{ width: "20px" }}
                      src="https://cdn-icons-png.flaticon.com/128/9131/9131478.png"
                    />
                  </div>
                  <div className="col-10">
                    <h6>Contact person Details</h6>
                  </div>
                  <br></br>
                  <hr></hr>
                  <div class="row">
                    <div class="col-2">
                      <img
                        style={{ width: "20px" }}
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <div class="col-8">
                      <p>{instituteName}</p>
                    </div>
                    <div class="col-2">
                      <img
                        style={{ width: "1rem" }}
                        src="data:image/png;base64,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"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-2">
                      <img
                        style={{ width: "20px" }}
                        src="data:image/jpeg;base64,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"
                      />
                    </div>
                    <div class="col-8">
                      <p>{institutePhoneNo}</p>
                    </div>
                    <div class="col-2">
                      <img
                        style={{ width: "1rem" }}
                        src="data:image/png;base64,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"
                      />
                    </div>
                  </div>
                  <br></br>
                  <div class="card bg-success-subtle p-1">
                    <div class="row">
                      <div class="col-2  ms-1">
                        <img
                          style={{ width: "2rem" }}
                          src="https://cdn-icons-png.flaticon.com/512/8922/8922789.png"
                        />
                      </div>
                      <div class="col-9">Add Incomplete Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-7">
            <div class=" container-fluid ms-3">
              <div
                className=" col-xl-8 card p-1 mt-5 shadow bg-white  ms-2"
                style={{ width: " 45rem", height: "17rem" }}
              >
                <div className="card-body">
                  <div class="row">
                    <div class="col-7">
                      <h6>{instituteName}</h6>
                    </div>
                    <div class="col-4">
                      <p>Last edited:25-01-24</p>
                    </div>
                    <div class="col-1">
                      <img
                        style={{ width: "1rem" }}
                        src="data:image/png;base64,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"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-2">
                      <img
                        style={{ width: "4rem" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0R0kGEGXV2iCpnms_0qbgBJReibOz9YqPtA&usqp=CAU"
                      />
                    </div>
                    <div class="col-5">
                      {instituteName}
                      <br></br>
                      <h6>School</h6>
                      <p>{instituteWorktype}</p>
                    </div>
                  </div>
                  <h6>State</h6>
                  <p>{instituteState}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
