import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterviewsList = ({ appliedJobId }) => {
  const [scheduledInterviews, setScheduledInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScheduledInterviews = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/interviews/interview/schedule/${appliedJobId}`);
        setScheduledInterviews(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchScheduledInterviews();
  }, [appliedJobId]);

  if (loading) {
    return <p>Loading scheduled interviews...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Scheduled Interviews for Applied Job ID: {appliedJobId}</h2>
      <ul>
        {scheduledInterviews.map(interview => (
          <li key={interview.userId}>
            <p>User ID: {interview.userId}</p>
            <p>First Name: {interview.firstName}</p>
            <p>Last Name: {interview.lastName}</p>
            <p>Email: {interview.email}</p>
            <p>Job ID: {interview.jobId}</p>
            <p>Company: {interview.company}</p>
            <p>Role: {interview.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default InterviewsList;
