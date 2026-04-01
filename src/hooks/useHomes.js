import { useState, useEffect, useCallback } from 'react';
import { listHomes } from '../services/api';
import MOCK_HOMES from '../services/mockData';
import { USE_MOCK_DATA } from '../utils/constants';

export function useHomes(filters = {}) {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextToken, setNextToken] = useState(null);

  const fetchHomes = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (USE_MOCK_DATA) {
        let filtered = [...MOCK_HOMES];

        if (filters.query) {
          const q = filters.query.toLowerCase();
          filtered = filtered.filter(
            (h) =>
              h.address?.toLowerCase().includes(q) ||
              h.city?.toLowerCase().includes(q) ||
              h.state?.toLowerCase().includes(q)
          );
        }

        if (filters.propertyType) {
          filtered = filtered.filter((h) => h.propertyType === filters.propertyType);
        }

        if (filters.minBedrooms) {
          filtered = filtered.filter((h) => h.bedrooms >= Number(filters.minBedrooms));
        }

        if (filters.priceRange) {
          const [min, max] = filters.priceRange.split('-').map(Number);
          filtered = filtered.filter((h) => h.price >= min && h.price <= max);
        }

        setHomes(filtered);
        setNextToken(null);
      } else {
        const graphqlFilter = buildGraphQLFilter(filters);
        const result = await listHomes({ filter: graphqlFilter });
        setHomes(result.items);
        setNextToken(result.nextToken);
      }
    } catch (err) {
      console.error('Failed to fetch homes:', err);
      setError('Failed to load homes. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchHomes();
  }, [fetchHomes]);

  return { homes, loading, error, nextToken, refetch: fetchHomes };
}

function buildGraphQLFilter(filters) {
  const conditions = [];

  if (filters.query) {
    conditions.push({
      or: [
        { address: { contains: filters.query } },
        { city: { contains: filters.query } },
      ],
    });
  }

  if (filters.propertyType) {
    conditions.push({ propertyType: { eq: filters.propertyType } });
  }

  if (filters.minBedrooms) {
    conditions.push({ bedrooms: { ge: Number(filters.minBedrooms) } });
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange.split('-').map(Number);
    conditions.push({ price: { between: [min, max] } });
  }

  if (conditions.length === 0) return null;
  if (conditions.length === 1) return conditions[0];
  return { and: conditions };
}
