// useCloudinaryUpload.ts
import { useState } from "react";

interface UseCloudinaryUploadReturn {
  imageUrl: string | null;
  uploading: boolean;
  error: string | null;
  uploadImage: (file: File) => Promise<string | null>;
}

export const useCloudinaryUpload = (): UseCloudinaryUploadReturn => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<string | null> => {
    setUploading(true);
    setError(null);

    // Αντικατέστησε το 'your_cloud_name' και το 'my_unsigned_preset' με τις δικές σου τιμές.
    const url = `https://api.cloudinary.com/v1_1/dzomscdtg/image/upload`;
    const uploadPreset = "Image Upload Preset";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Αποτυχία ανέβασματος εικόνας");
      }

      const data = await response.json();
      // Αν υπάρχει σφάλμα από το Cloudinary, το διαχειριζόμαστε
      if (data.error) {
        throw new Error(data.error.message || "Άγνωστο σφάλμα");
      }

      const secureUrl = data.secure_url;
      setImageUrl(secureUrl);
      return secureUrl;
    } catch (err: any) {
      setError(err.message || "Κάποιο σφάλμα συνέβη");
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { imageUrl, uploading, error, uploadImage };
};
