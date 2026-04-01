import { formatPrice, formatAddress, formatPropertyType, formatNumber } from '../utils/format';

describe('formatPrice', () => {
  it('formats a price as USD currency', () => {
    expect(formatPrice(425000)).toBe('$425,000');
  });

  it('formats large prices', () => {
    expect(formatPrice(1250000)).toBe('$1,250,000');
  });

  it('handles null', () => {
    expect(formatPrice(null)).toBe('Price not available');
  });

  it('handles zero', () => {
    expect(formatPrice(0)).toBe('$0');
  });
});

describe('formatAddress', () => {
  it('formats a full address', () => {
    const home = { address: '123 Main St', city: 'Springfield', state: 'IL', zipCode: '62704' };
    expect(formatAddress(home)).toBe('123 Main St, Springfield, IL, 62704');
  });

  it('handles missing fields', () => {
    const home = { address: '123 Main St', city: 'Springfield' };
    expect(formatAddress(home)).toBe('123 Main St, Springfield');
  });

  it('handles null home', () => {
    expect(formatAddress(null)).toBe('');
  });
});

describe('formatPropertyType', () => {
  it('formats known types', () => {
    expect(formatPropertyType('SINGLE_FAMILY')).toBe('Single Family');
    expect(formatPropertyType('CONDO')).toBe('Condo');
    expect(formatPropertyType('TOWNHOUSE')).toBe('Townhouse');
  });

  it('returns Unknown for null', () => {
    expect(formatPropertyType(null)).toBe('Unknown');
  });
});

describe('formatNumber', () => {
  it('formats numbers with commas', () => {
    expect(formatNumber(2200)).toBe('2,200');
    expect(formatNumber(1000000)).toBe('1,000,000');
  });

  it('handles null', () => {
    expect(formatNumber(null)).toBe('');
  });
});
