import type React from "react";

interface JobCardProps{
  title:string;
  company:string;
  location:string;
  jobType:string;
  salary:string;
  postedAt:string;
  description:string;
}

const JobCard:React.FC<JobCardProps> = ({title,company,location,jobType,salary,postedAt,description}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{company} • {location}</p>
      <p className="text-sm mt-1">{jobType} | {salary}</p>
      <p className="text-sm text-gray-500 mt-1">Posted on {new Date(postedAt).toLocaleDateString()}</p>
      <p className="mt-2 text-sm">{description}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard