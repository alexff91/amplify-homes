import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { APP_NAME } from '../utils/constants';

export function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          {APP_NAME}
        </Link>

        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by city, address..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search homes"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        <nav className="header-nav">
          <Link to="/">Browse</Link>
          <Link to="/search">Explore</Link>
        </nav>
      </div>
    </header>
  );
}
