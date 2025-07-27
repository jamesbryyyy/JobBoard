import { useState } from "react";
import JobList from "./JobList";
import { useJobContext } from "../context/JobContext";

function JobFilter() {
  const { jobs } = useJobContext();

  const [searchText, setSearchText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // 1. Filter and sort
  const filtered = jobs
    .filter(
      (job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase()) &&
        job.location.toLowerCase().includes(locationText.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.postedAt).getTime();
      const dateB = new Date(b.postedAt).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  // 2. Pagination logic
  const totalJobs = filtered.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filtered.slice(indexOfFirstJob, indexOfLastJob);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // reset to first page if search/filter changes
  const handleFilterChange = (callback: Function) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    callback(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="mb-2 block justify-center items-center sm:flex">
        <input
          className="w-full h-13 p-2 border sm:w-100 sm:border-r-0"
          type="text"
          placeholder="Job Title"
          value={searchText}
          onChange={handleFilterChange(setSearchText)}
        />
        <div className="hidden border h-8 my-auto mt-3 sm:block"></div>
        <input
          className="w-full h-13 p-2 border sm:w-100 sm:border-l-0"
          type="text"
          placeholder="Location"
          value={locationText}
          onChange={handleFilterChange(setLocationText)}
        />
        <select
          className="w-full sm:w-auto h-13 p-2 border mt-2 sm:mt-0 sm:ml-2"
          value={sortOrder}
          onChange={handleFilterChange(setSortOrder)}
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* Job List */}
      <JobList jobs={currentJobs} />

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default JobFilter;
