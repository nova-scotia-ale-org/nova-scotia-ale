import { useState } from "react";
import { Link } from "react-router-dom";
import AccommodationForm from "./AccommodationForm";
import JobsForm from "./JobsForm";
import RidesForm from "./RidesForm";
import "./HomeTabs.css";
import { useAuth } from "../../context/AuthContext";

const HomeTabs = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("accommodation");

  return (
    <section className="tabs-section">
      <div className="tabs-wrapper">

        <div className="tabs-header">
          <button
            className={activeTab === "accommodation" ? "active" : ""}
            onClick={() => setActiveTab("accommodation")}
          >
            ACCOMMODATION
          </button>

          <button
            className={activeTab === "jobs" ? "active" : ""}
            onClick={() => setActiveTab("jobs")}
          >
            JOBS
          </button>

          <button
            className={activeTab === "rides" ? "active" : ""}
            onClick={() => setActiveTab("rides")}
          >
            RIDES
          </button>
        </div>

        <div key={activeTab} className="tabs-content fade-animate">
          {!isAuthenticated ? (
            <div className="login-warning">
              <p>You must be logged in to post listings.</p>
              <Link to="/login" className="login-link">
                Login to Continue
              </Link>
            </div>
          ) : (
            <>
              {activeTab === "accommodation" && <AccommodationForm />}
              {activeTab === "jobs" && <JobsForm />}
              {activeTab === "rides" && <RidesForm />}
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default HomeTabs;