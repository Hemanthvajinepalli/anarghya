import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Offer.css";
import Institutenavbar from "./Institutenavbar";

const OfferLetter1 = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();
  const [dateOfJoining, setDoj] = useState("");
  const [deadline, setDeadline] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [offerLetterId, setOfferLetterId] = useState(null); 
  const[userdata,setuserdata]=useState([]);

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("headname");
    

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/prava/user/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setuserdata(userData);
      } catch (error) {
        console.log(error.message);
      } 
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const paragraph = editorState.getCurrentContent().getPlainText("\u0001");
      const formData = {
        email,
        dateOfJoining,
        deadline,
        salary,
        address,
        paragraph,
      };

      const response = await axios.post(
        `http://localhost:9090/api/sendOfferLetter/${jobId}/${userId}`,
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/api/offerLetterEntity/${offerLetterId}`); // Fetch user details using userId
      const userData = response.data;
      setEmail(userData.email);
      setFirstName(userData.firstName);
      // Set other user details as needed
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  return (
    <div>
    <Institutenavbar/>
    <div className="offer-letter-container">

     <h4> Send Offer Letter for <p class="text-primary">{userdata.firstName}{userdata.lastName} </p></h4>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Email</label>
          <input
            className="input-background text-primary"
            placeholder="Enter email here.."
            type="email"
            id="email"
            value={userdata.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Date of Joining</label>
          <input
            className="input-background"
            type="date"
            id="dateOfJoining"
            value={dateOfJoining}
            onChange={(e) => setDoj(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Salary Offer PA</label>
          <input
            className="input-background"
            placeholder="Enter amount here"
            type="number"
            id="salary"
            min="50000"
            max="20000000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Deadline for Offer</label>
          <input
            className="input-background"
            type="date"
            id="deadlineOfOffer"
            placeholder="Enter email here..."
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-field ">
          <label>Address</label>
          <input
            className="form-control"
            type="text"
            id="address"
            placeholder="Enter Address here..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div
          style={{
            width: "620px",
            height: "250px",
            borderRadius: "15px",
            border: "4px solid black",
            backgroundColor: "#E7F1FD",
            textAlign: "left",
          }}
        >
          <Editor
            style={{ borderRadius: "20px" }}
            placeholder="Enter performance summary here..."
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            toolbar={{
              options: ["inline", "list", "textAlign", "link"],
              inline: { inDropdown: false },
              list: { inDropdown: false },
              textAlign: { inDropdown: false },
              link: { inDropdown: false },
              history: { inDropdown: false },
            }}
          />
        </div>
        <div className="offer-button">
          <button type="submit" className="submit-button">
            Send Offer
          </button>
        </div>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body><div class=" text-center text-success"> Your offer has been sent successfully.</div></Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => setShowModal(false)}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default OfferLetter1;
