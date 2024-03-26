import React, { useEffect } from "react";
import { useState } from "react";
import "./EducationInstitues.css";
// import { getJobpost } from "./Authstate";
import Institutenavbar from "./Institutenavbar";

function CandidatesInvited() {
  // const jobpost = getJobpost();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9090/api/applied-jobs/users/1")
      .then((response) => response.json())
      .then((value) => setData(value));
  }, []);

  return (
    <>
      <Institutenavbar />
      <h3 className="text-center p-2 mt-3">Candidates Invited</h3>
      <div style={{ overflowY: "auto" }} className="rounded">
        {/* <Slider
                        dots
                        infinite
                        speed={500}
                        slidesToShow={1}
                    slidesToScroll={1}
                     > */}
        <div className="row">
          {data.map((list) => {
            return (
              <>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div class="card mt-3 bg-body-secondary">
                    <div class="card-body">
                      <p class="card-title p-2 fs-5">
                        <i class="fa-solid fa-user text-warning fw-bold fs-5"></i>{" "}
                        {list.firstName} {list.lastName}
                      </p>
                      <div className="d-flex justify-content-around">
                        <p className="">
                          <i class="fa-solid fa-indian-rupee-sign text-warning fs-5 fw-bold"></i>{" "}
                          {list.currentSalary2}
                        </p>
                        <p className="">
                          <i class="fa-solid fa-clock text-warning fs-5 fw-bold"></i>{" "}
                          {list.years} Years
                        </p>
                      </div>
                      <div className="d-flex justify-content-around">
                        <p className="">
                          <i class="fa-solid fa-location-dot text-warning fs-5 fw-bold"></i>{" "}
                          {list.state}
                        </p>
                        <p className=" pe-4">
                          <i class="fa-solid fa-suitcase text-warning fs-5 fw-bold"></i>{" "}
                          {list.selectOption}
                        </p>
                      </div>
                      <div class="d-flex justify-content-around">
                        <div className="text-end mt-2">
                          <button className="btn btn-warning text-end">
                            <i class="fa-solid fa-circle-check fs-5"></i>{" "}
                            Shortlist
                          </button>
                        </div>
                        <div className="text-end mt-2">
                          <button className="btn btn-danger text-end">
                            <i class="fa-solid fa-circle-check fs-5"></i> Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* </Slider> */}
        </div>
      </div>
    </>
  );
}
export default CandidatesInvited;