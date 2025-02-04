import { useState } from "react";

export function useDeleteProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Η συνάρτηση deleteProduct δέχεται το title του προϊόντος που θέλουμε να διαγράψουμε.
  const deleteProduct = async (title: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Κωδικοποιούμε το title ώστε να είναι ασφαλές να το χρησιμοποιήσουμε στο URL
      const encodedTitle = encodeURIComponent(title);
      const response = await fetch(
        `http://localhost:5078/api/products/${encodedTitle}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        // Μπορείς να πάρεις το μήνυμα λάθους από το response αν υπάρχει
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Error deleting product");
      }
      return true;
    } catch (err: any) {
      setError(err.message || "Error deleting product");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteProduct, loading, error };
}
