import './App.css';

const listings = [
  {
    id: 1,
    title: 'Modern Loft in Capitol Hill',
    location: 'Seattle, WA',
    price: '$3,200 / mo',
    beds: 2,
    baths: 2,
    sqft: 1180,
    status: 'Available now',
    highlights: ['Pet friendly', 'EV charging', 'Rooftop deck'],
  },
  {
    id: 2,
    title: 'Sunlit Studio near Mission Bay',
    location: 'San Francisco, CA',
    price: '$2,450 / mo',
    beds: 1,
    baths: 1,
    sqft: 640,
    status: 'Tours daily',
    highlights: ['Gym', 'In-unit laundry', 'Waterfront'],
  },
  {
    id: 3,
    title: 'Family Home with Backyard',
    location: 'Austin, TX',
    price: '$2,980 / mo',
    beds: 3,
    baths: 2,
    sqft: 1680,
    status: 'New listing',
    highlights: ['Near parks', 'Solar ready', 'Smart locks'],
  },
];

function App() {
  return (
    <div className="App">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Amplify Homes</div>
          <div className="nav-actions">
            <button className="ghost-button" type="button">
              Log in
            </button>
            <button className="primary-button" type="button">
              List your home
            </button>
          </div>
        </nav>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Find your next stay</p>
            <h1>Beautiful homes, verified in minutes.</h1>
            <p className="hero-subtitle">
              Search, tour, and apply for rentals that match your lifestyle.
              Amplify Homes keeps everything in one place, from tours to leases.
            </p>
            <div className="search-card">
              <label className="field">
                <span>Location</span>
                <input type="text" placeholder="City or neighborhood" />
              </label>
              <label className="field">
                <span>Move-in date</span>
                <input type="text" placeholder="Anytime" />
              </label>
              <label className="field">
                <span>Budget</span>
                <input type="text" placeholder="$2,000 - $4,000" />
              </label>
              <button className="primary-button" type="button">
                Search homes
              </button>
            </div>
          </div>
          <div className="hero-card">
            <h2>Why renters love Amplify</h2>
            <ul>
              <li>Instantly schedule a self-guided tour</li>
              <li>Save and compare listings on one dashboard</li>
              <li>Application status updates in real time</li>
            </ul>
            <div className="hero-metrics">
              <div>
                <strong>4.9★</strong>
                <span>Average rating</span>
              </div>
              <div>
                <strong>12 hrs</strong>
                <span>Avg. approval</span>
              </div>
              <div>
                <strong>350+</strong>
                <span>Homes weekly</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section-header">
          <div>
            <h2>Featured rentals</h2>
            <p>Curated properties ready for move-in this month.</p>
          </div>
          <button className="ghost-button" type="button">
            View all listings
          </button>
        </section>

        <section className="listing-grid">
          {listings.map((listing) => (
            <article className="listing-card" key={listing.id}>
              <div className="listing-header">
                <div>
                  <h3>{listing.title}</h3>
                  <p>{listing.location}</p>
                </div>
                <span className="status-pill">{listing.status}</span>
              </div>
              <div className="listing-price">{listing.price}</div>
              <div className="listing-meta">
                <span>{listing.beds} Beds</span>
                <span>{listing.baths} Baths</span>
                <span>{listing.sqft} Sq Ft</span>
              </div>
              <div className="listing-tags">
                {listing.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              <button className="primary-button full-width" type="button">
                Schedule tour
              </button>
            </article>
          ))}
        </section>

        <section className="cta">
          <div>
            <h2>Ready to apply?</h2>
            <p>
              Build a profile once, then apply to any Amplify Homes property in
              minutes.
            </p>
          </div>
          <button className="primary-button" type="button">
            Start application
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
