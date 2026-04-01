import { PROPERTY_TYPES, PRICE_RANGES, BEDROOM_OPTIONS } from '../utils/constants';

export function SearchFilters({ filters, onChange }) {
  function handleChange(key, value) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="search-filters">
      <select
        value={filters.propertyType || ''}
        onChange={(e) => handleChange('propertyType', e.target.value)}
        aria-label="Property type"
      >
        {PROPERTY_TYPES.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>

      <select
        value={filters.priceRange || ''}
        onChange={(e) => handleChange('priceRange', e.target.value)}
        aria-label="Price range"
      >
        {PRICE_RANGES.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>

      <select
        value={filters.minBedrooms || ''}
        onChange={(e) => handleChange('minBedrooms', e.target.value)}
        aria-label="Minimum bedrooms"
      >
        {BEDROOM_OPTIONS.map((b) => (
          <option key={b.value} value={b.value}>
            {b.label}
          </option>
        ))}
      </select>
    </div>
  );
}
