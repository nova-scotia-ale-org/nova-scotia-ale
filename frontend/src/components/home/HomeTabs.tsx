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
              <div className="login-warning-card">
                <i className="fas fa-lock login-icon"></i>
                <h4>Login Required</h4>
                <p>
                  Join Nova Scotia Ale to start posting
                  accommodations, jobs, and rides.
                </p>

                <Link to="/login" className="login-btn">
                  Login to Continue
                </Link>
              </div>
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