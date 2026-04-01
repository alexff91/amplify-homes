export function formatPrice(price) {
  if (price == null) return 'Price not available';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatAddress(home) {
  if (!home) return '';
  const parts = [home.address, home.city, home.state, home.zipCode].filter(Boolean);
  return parts.join(', ');
}

export function formatPropertyType(type) {
  const types = {
    SINGLE_FAMILY: 'Single Family',
    CONDO: 'Condo',
    TOWNHOUSE: 'Townhouse',
    MULTI_FAMILY: 'Multi Family',
    LAND: 'Land',
  };
  return types[type] || type || 'Unknown';
}

export function formatDate(dateString) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

export function formatNumber(num) {
  if (num == null) return '';
  return new Intl.NumberFormat('en-US').format(num);
}
