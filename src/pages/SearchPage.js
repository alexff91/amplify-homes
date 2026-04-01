import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useHomes } from '../hooks/useHomes';
import { HomeCard } from '../components/HomeCard';
import { SearchFilters } from '../components/SearchFilters';
import { Loading } from '../components/Loading';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState({
    propertyType: '',
    priceRange: '',
    minBedrooms: '',
  });

  const combinedFilters = useMemo(
    () => ({ ...filters, query }),
    [filters, query]
  );

  const { homes, loading, error } = useHomes(combinedFilters);

  return (
    <div className="page-search container section">
      <h1>Explore Homes</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city, address, state..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          aria-label="Search homes"
        />
      </div>

      <SearchFilters filters={filters} onChange={setFilters} />

      {loading && <Loading message="Searching homes..." />}

      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <>
          <p className="results-count">
            {homes.length} {homes.length === 1 ? 'home' : 'homes'} found
          </p>
          {homes.length > 0 ? (
            <div className="home-grid">
              {homes.map((home) => (
                <HomeCard key={home.id} home={home} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No results found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
