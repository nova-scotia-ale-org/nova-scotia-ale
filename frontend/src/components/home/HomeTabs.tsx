import { useState } from "react";
import AccommodationForm from "./AccommodationForm";
import JobsForm from "./JobsForm";
import RidesForm from "./RidesForm";
import "./HomeTabs.css";

const HomeTabs = () => {
    const [activeTab, setActiveTab] = useState("accommodation");

    return (
        <section className="tabs-section">
            <div className="tabs-wrapper">

                <div className="tabs-header">
                    <button
                        className={activeTab === "accommodation" ? "active" : ""}
                        onClick={() => setActiveTab("accommodation")}
                    >
                        ACCOMODATION
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
                    {activeTab === "accommodation" && <AccommodationForm />}
                    {activeTab === "jobs" && <JobsForm />}
                    {activeTab === "rides" && <RidesForm />}
                </div>

            </div>
        </section>
    );
};

export default HomeTabs;