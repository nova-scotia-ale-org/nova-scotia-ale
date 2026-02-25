import "./MarketplaceEntry.css";

const MarketplaceEntry = () => {
  return (
    <section className="marketplace-section">
      <div className="container text-center">

        <h2 className="marketplace-title">
          FIND ROOMS, JOBS, AND RIDES
        </h2>

        <p className="marketplace-subtitle">
          Explore the best rooms, jobs, and rides available across various provinces.
          Find what you need for your journey.
        </p>

        <div className="row mt-5">

          <div className="col-md-4 mb-4">
            <div className="market-card">
              <div className="badge-pill">Available Now</div>
              <h3>Find a Rooms</h3>
              <p>From $500 per month</p>
              <button className="market-btn">EXPLORE ROOMS</button>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="market-card">
              <div className="badge-pill">Hiring Now</div>
              <h3>Find a Job</h3>
              <p>Various Roles</p>
              <button className="market-btn">EXPLORE JOBS</button>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="market-card">
              <div className="badge-pill">Available Now</div>
              <h3>Find a Ride</h3>
              <p>Shared or Private</p>
              <button className="market-btn">EXPLORE RIDES</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketplaceEntry;