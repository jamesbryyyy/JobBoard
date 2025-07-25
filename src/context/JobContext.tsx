import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

import { jobs as initialJobs } from "../data/Job";
import type { Job } from "../components/JobList";

type JobContextType = {
  jobs: Job[];
  addJob: (job: Job) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const addJob = (job: Job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used inside JobProvider");
  }
  return context;
}
