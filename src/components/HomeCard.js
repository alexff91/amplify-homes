import { Link } from 'react-router-dom';
import { formatPrice, formatPropertyType } from '../utils/format';

export function HomeCard({ home }) {
  return (
    <Link to={`/home/${home.id}`} className="home-card">
      <div className="home-card-image">
        <img
          src={home.imageUrl || home.image_url}
          alt={home.address || 'Home listing'}
          loading="lazy"
        />
        <span className="home-card-badge">{formatPropertyType(home.propertyType)}</span>
      </div>
      <div className="home-card-body">
        <div className="home-card-price">{formatPrice(home.price)}</div>
        <div className="home-card-stats">
          {home.bedrooms && <span>{home.bedrooms} bd</span>}
          {home.bathrooms && <span>{home.bathrooms} ba</span>}
          {home.squareFeet && (
            <span>{home.squareFeet.toLocaleString()} sqft</span>
          )}
        </div>
        <div className="home-card-address">
          {home.address}
          {home.city && `, ${home.city}`}
          {home.state && `, ${home.state}`}
        </div>
      </div>
    </Link>
  );
}
