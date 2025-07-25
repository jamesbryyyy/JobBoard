import JobCard from "./JobCard";

/** ---- Types ---- */
export interface Job {
  id: number;           // 🔹 added
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  postedAt: string;
  description: string;
}

type JobListProps = {
  jobs: Job[];
};

/** ---- Component ---- */
function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.length ? (
        jobs.map((job) => <JobCard key={job.id} {...job} />)
      ) : (
        <p className="text-center col-span-full">No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
