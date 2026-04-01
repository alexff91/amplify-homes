import { useHomes } from '../hooks/useHomes';
import { HomeCard } from '../components/HomeCard';
import { Loading } from '../components/Loading';
import { APP_NAME } from '../utils/constants';

export function HomePage() {
  const { homes, loading, error } = useHomes();

  return (
    <div className="page-home">
      <section className="hero">
        <div className="container">
          <h1>Find Your Perfect Home</h1>
          <p>
            {APP_NAME} helps you discover, explore, and secure your dream property.
            Browse thousands of listings across the country.
          </p>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Featured Listings</h2>

        {loading && <Loading message="Loading homes..." />}

        {error && <div className="error-message">{error}</div>}

        {!loading && !error && homes.length === 0 && (
          <div className="empty-state">
            <h3>No homes found</h3>
            <p>Check back soon for new listings.</p>
          </div>
        )}

        {!loading && !error && homes.length > 0 && (
          <div className="home-grid">
            {homes.map((home) => (
              <HomeCard key={home.id} home={home} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
