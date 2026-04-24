import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 👉 APPLY FUNCTION
  const applyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:5000/api/applications/apply/${jobId}`,
        {},
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert("Applied successfully 🚀");

    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="jobs-container">
      <h2>All Jobs</h2>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>{job.company}</strong></p>
            <p>{job.location}</p>
            <p className="salary">{job.salary}</p>

            <button onClick={() => applyJob(job._id)}>
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;