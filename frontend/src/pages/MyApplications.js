import { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://job-portal-project-b2sh.onrender.com/api/applications/my",
        {
          headers: {
            Authorization: token
          }
        }
      );

      setApplications(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My Applications</h2>

      {applications.map((app) => (
        <div key={app._id} style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px"
        }}>
          <h3>{app.job.title}</h3>
          <p>{app.job.company}</p>
          <p>{app.job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;