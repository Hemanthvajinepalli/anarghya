import React, { createContext, useContext, useState } from 'react';

// Create a context for job ID
const JobContext = createContext();

// Custom hook to access the job ID context
export const useJobContext = () => useContext(JobContext);

// Provider component to wrap your application and provide the job ID
export const JobProvider = ({ children }) => {
  const [jobId, setJobId] = useState(null);

  return (
    <JobContext.Provider value={{ jobId, setJobId }}>
      {children}
    </JobContext.Provider>
  );
};