// useCreateProduct.ts
import { useState } from "react";

interface CreateProductResponse {
  message: string;
  productId: number;
}

export function useCreateProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createProduct = async (
    productToSend: any
  ): Promise<CreateProductResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5078/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToSend),
      });

      if (response.status === 409) {
        // Conflict: το προϊόν υπάρχει ήδη
        const conflictData = await response.json();
        setError(
          conflictData.message || "A product with this title already exists."
        );
        return null;
      } else if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error creating product");
      }

      const data: CreateProductResponse = await response.json();
      return data;
    } catch (err: any) {
      setError(err.message || "Error creating product");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading, error };
}
