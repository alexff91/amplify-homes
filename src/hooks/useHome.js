import { useState, useEffect } from 'react';
import { getHome } from '../services/api';
import MOCK_HOMES from '../services/mockData';
import { USE_MOCK_DATA } from '../utils/constants';

export function useHome(id) {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;

    async function fetchHome() {
      setLoading(true);
      setError(null);

      try {
        let data;
        if (USE_MOCK_DATA) {
          data = MOCK_HOMES.find((h) => h.id === id) || null;
          if (!data) throw new Error('Home not found');
        } else {
          data = await getHome(id);
        }

        if (!cancelled) {
          setHome(data);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to fetch home:', err);
          setError('Failed to load home details. Please try again.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchHome();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { home, loading, error };
}
