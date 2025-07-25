import { useState } from "react";
import JobList from "./JobList";
import { useJobContext } from "../context/JobContext";

function JobFilter() {
  const { jobs } = useJobContext();
  const [searchText, setSearchText] = useState("");
  const [locationText, setLocationText] = useState("");

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchText.toLowerCase()) &&
      job.location.toLowerCase().includes(locationText.toLowerCase())
  );

  return (
    <>
      <div className="mb-2 block justify-center items-center sm:flex">
        <input
          className="w-full h-13 p-2 border sm:w-100 sm:border-r-0"
          type="text"
          placeholder="Job Title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="hidden border h-8 my-auto mt-3 sm:block"></div>
        <input
          className="w-full h-13 p-2 border sm:w-100 sm:border-l-0"
          type="text"
          placeholder="Location"
          value={locationText}
          onChange={(e) => setLocationText(e.target.value)}
        />
      </div>

      <JobList jobs={filtered} />
    </>
  );
}

export default JobFilter;
