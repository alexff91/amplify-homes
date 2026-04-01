import { useParams, Link } from 'react-router-dom';
import { useHome } from '../hooks/useHome';
import { Loading } from '../components/Loading';
import { formatPrice, formatPropertyType, formatDate, formatNumber } from '../utils/format';

export function HomeDetailPage() {
  const { id } = useParams();
  const { home, loading, error } = useHome(id);

  if (loading) return <Loading message="Loading home details..." />;

  if (error) {
    return (
      <div className="container section">
        <div className="error-message">{error}</div>
        <Link to="/" className="btn btn-primary">
          Back to Listings
        </Link>
      </div>
    );
  }

  if (!home) {
    return (
      <div className="container section">
        <h2>Home not found</h2>
        <Link to="/" className="btn btn-primary">
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="page-detail">
      <div className="container">
        <Link to="/" className="back-link">
          &larr; Back to Listings
        </Link>

        <div className="detail-hero">
          <img
            src={home.imageUrl || home.image_url}
            alt={home.address || 'Home'}
            className="detail-image"
          />
        </div>

        <div className="detail-content">
          <div className="detail-main">
            <div className="detail-header">
              <h1>{formatPrice(home.price)}</h1>
              <span className="detail-badge">
                {formatPropertyType(home.propertyType)}
              </span>
            </div>

            <div className="detail-address">
              {home.address}
              {home.city && `, ${home.city}`}
              {home.state && `, ${home.state}`}
              {home.zipCode && ` ${home.zipCode}`}
            </div>

            <div className="detail-stats">
              {home.bedrooms != null && (
                <div className="stat">
                  <strong>{home.bedrooms}</strong>
                  <span>Bedrooms</span>
                </div>
              )}
              {home.bathrooms != null && (
                <div className="stat">
                  <strong>{home.bathrooms}</strong>
                  <span>Bathrooms</span>
                </div>
              )}
              {home.squareFeet != null && (
                <div className="stat">
                  <strong>{formatNumber(home.squareFeet)}</strong>
                  <span>Sq Ft</span>
                </div>
              )}
              {home.yearBuilt != null && (
                <div className="stat">
                  <strong>{home.yearBuilt}</strong>
                  <span>Year Built</span>
                </div>
              )}
            </div>

            {home.description && (
              <div className="detail-description">
                <h2>About this Home</h2>
                <p>{home.description}</p>
              </div>
            )}

            {home.createdAt && (
              <p className="detail-listed">Listed on {formatDate(home.createdAt)}</p>
            )}
          </div>

          <aside className="detail-sidebar">
            <div className="contact-card">
              <h3>Interested in this home?</h3>
              <p>Contact our team to schedule a viewing or get more details.</p>
              <button className="btn btn-primary btn-block">Request a Tour</button>
              <button className="btn btn-secondary btn-block">Ask a Question</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
