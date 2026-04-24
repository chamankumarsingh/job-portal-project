import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/login";
import Jobs from "./pages/Jobs";
import MyApplications from "./pages/MyApplications";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("jobs");

  return (
    <div>

      {isLoggedIn ? (
        <>
          <div className="navbar">
            <h2>Job Portal 🚀</h2>

            <div>
              <button onClick={() => setPage("jobs")}>Jobs</button>
              <button onClick={() => setPage("applications")}>
                My Applications
              </button>
              <button onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
              }}>
                Logout
              </button>
            </div>
          </div>

          {page === "jobs" ? <Jobs /> : <MyApplications />}
        </>
      ) : (
        <div className="container">
          <div className="card">
            {isLogin ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Register />
            )}

            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Go to Register" : "Go to Login"}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;