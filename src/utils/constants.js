export const PROPERTY_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'SINGLE_FAMILY', label: 'Single Family' },
  { value: 'CONDO', label: 'Condo' },
  { value: 'TOWNHOUSE', label: 'Townhouse' },
  { value: 'MULTI_FAMILY', label: 'Multi Family' },
  { value: 'LAND', label: 'Land' },
];

export const LISTING_STATUSES = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  SOLD: 'Sold',
  OFF_MARKET: 'Off Market',
};

export const PRICE_RANGES = [
  { value: '', label: 'Any Price' },
  { value: '0-300000', label: 'Under $300k' },
  { value: '300000-500000', label: '$300k - $500k' },
  { value: '500000-750000', label: '$500k - $750k' },
  { value: '750000-1000000', label: '$750k - $1M' },
  { value: '1000000-999999999', label: '$1M+' },
];

export const BEDROOM_OPTIONS = [
  { value: '', label: 'Any Beds' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
  { value: '5', label: '5+' },
];

export const APP_NAME = 'Amplify Homes';
export const APP_DESCRIPTION = 'Find your dream home with Amplify Homes';

export const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true';
