import React, { useState } from "react";
import axios from "axios";
import "./Interview.css"; // Import CSS file for styling

const InterviewFormPopup = ({ appliedJobId,  onClose }) => {
  const [scheduledTime, setScheduledTime] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [interviewLocation, setInterviewLocation] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [interviewNotes, setInterviewNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:9090/interviews/interview/schedule/${appliedJobId}`,
        {
          scheduledTime,
          interviewerName,
          interviewLocation,
          interviewType,
          interviewNotes,
        }
      );
      onClose();
      console.log("Interview scheduled successfully:", response.data);
      alert("Interview scheduled successfully.");
    } catch (error) {
      console.error("Error scheduling interview:", error);
      alert("Error scheduling interview. Please try again.");
    }
  };

  return (
    <div className="interview-form-popup"> {/* Apply popup style */}
      <div className="interview-form">
        <h2>Schedule Interview</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="scheduledTime">Scheduled Time:</label>
            <input
              type="datetime-local"
              id="scheduledTime"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewerName">Interviewer Name:</label>
            <input
              type="text"
              id="interviewerName"
              value={interviewerName}
              onChange={(e) => setInterviewerName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewLocation">Interview Location:</label>
            <input
              type="text"
              id="interviewLocation"
              value={interviewLocation}
              onChange={(e) => setInterviewLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewType">Interview Type:</label>
            <input
              type="text"
              id="interviewType"
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="interviewNotes">Interview Notes:</label>
            <textarea
              id="interviewNotes"
              value={interviewNotes}
              onChange={(e) => setInterviewNotes(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="button-group">
          <button type="submit" className="btn btn-primary">Schedule</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewFormPopup;



