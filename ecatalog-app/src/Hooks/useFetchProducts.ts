// useFetchProducts.ts
import { useState, useEffect } from "react";

export type ProductFromServer = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  category: string;
};

export function useFetchProducts() {
  const [products, setProducts] = useState<ProductFromServer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5078/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts };
}
