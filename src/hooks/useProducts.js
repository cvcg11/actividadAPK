import { useCallback, useEffect, useState } from 'react';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(PRODUCTS_URL);
      if (!response.ok) {
        throw new Error(`La API respondió con el código ${response.status}.`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (requestError) {
      setError(requestError.message || 'Revisa tu conexión e intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return { products, isLoading, error, reload: loadProducts };
}
