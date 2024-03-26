import React, { useState } from "react";
import axios from "axios";
import "./Offer.css"; // Import CSS for styling

const OfferLetter1 = ({ appliedJobId }) => {
  const initialOfferLetterState = {
    email: "",
    dateOfJoining: "",
    deadline: "",
    salary: 0
  };

  const [offerLetter, setOfferLetter] = useState({ ...initialOfferLetterState });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfferLetter({ ...offerLetter, [name]: value });
  };

  const sendOfferLetter = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9090/api/sendOfferLetter/${appliedJobId}`,
        offerLetter
      );

      setSuccessMessage("Offer letter sent successfully");
      setOfferLetter({ ...initialOfferLetterState }); // Reset form fields
      setShowForm(false); // Close the form after sending the offer letter
    } catch (error) {
      setErrorMessage("Error sending offer letter");
      console.error("Error sending offer letter:", error);
    }
  };

  return (
    <div>
      <h2>Send Offer Letter</h2>
      <button onClick={() => setShowForm(true)}>Send Offer Letter</button>
      {showForm && (
        <div className="overlay"> {/* Popup overlay */}
          <div className="popup"> {/* Popup content */}
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>Email:
                <input
                  type="email"
                  name="email"
                  value={offerLetter.email}
                  onChange={handleChange}
                  style={{ marginLeft: "10px", fontSize: "1rem" }}
                />
                </label>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>Date of Joining
                <input
                  type="date"
                  name="dateOfJoining"
                  value={offerLetter.dateOfJoining}
                  onChange={handleChange}
              style={{ marginLeft: "10px", fontSize: "1rem" }}
                />
                </label>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}>Deadline
                <input
                  type="date"
                  name="deadline"
                  value={offerLetter.deadline}
                  onChange={handleChange}
                  style={{ marginLeft: "10px", fontSize: "1rem" }}
                />
              </label>
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "10px" }}> Salary
                <input
                  type="number"
                  name="salary"
                  value={offerLetter.salary}
                  onChange={handleChange}
                  style={{ marginLeft: "10px", fontSize: "1rem" }}
                />
                </label>
              </div>
              <button type="button"             
              style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }} onClick={sendOfferLetter}>
                Send Offer Letter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};









export default OfferLetter1;

