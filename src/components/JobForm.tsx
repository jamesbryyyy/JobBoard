import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import type { Job } from "./JobList";

function AddJobForm() {

  const { addJob } = useJobContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    salary: "",
    postedAt: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.title.trim()) newErrors.title = "Job title is required.";
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.location.trim()) newErrors.location = "Location is required.";
    if (!form.jobType.trim()) newErrors.jobType = "Job type is required.";
    if (!form.salary.trim()) newErrors.salary = "Salary is required.";
    if (!form.postedAt.trim()) newErrors.postedAt = "Posted date is required.";
    if (!form.description.trim()) newErrors.description = "Description is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    e.preventDefault();
    const newJob: Job = {
      id: Date.now(),
      ...form,
    };
    addJob(newJob);
    setForm({
      title: "",
      company: "",
      location: "",
      jobType: "",
      salary: "",
      postedAt: "",
      description: "",
    });
    navigate('/')
  };

  return (
    <>
    <Link to="/">
      <p className="font-mono m-2"> Back To Home </p>
    </Link>
    <form onSubmit={handleSubmit} className="space-y-5 p-6 bg-white border border-gray-300 rounded-lg shadow-md max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Add New Job</h2>

      {[
        { name: "title", label: "Job Title", type: "text" },
        { name: "company", label: "Company", type: "text" },
        { name: "location", label: "Location", type: "text" },
        { name: "jobType", label: "Job Type", type: "text" },
        { name: "salary", label: "Salary", type: "text" },
        { name: "postedAt", label: "Posted At", type: "date" },
      ].map(({ name, label, type }) => (
        <div key={name}>
          <label className="block mb-1 text-sm font-medium text-gray-600">{label}</label>
          <input
            name={name}
            type={type}
            value={form[name as keyof typeof form]}
            onChange={handleChange}
            className={`w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors[name] ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
        </div>
      ))}

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className={`w-full border p-2 h-24 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
        ➕ Add Job
      </button>
    </form>
    </>
  );
}

export default AddJobForm;
