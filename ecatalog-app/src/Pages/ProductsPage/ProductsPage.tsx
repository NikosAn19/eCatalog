import "./ProductsPage.css";

import SureToDelete from "../../components/Alerts/DeletePopups/AreYouSurePopup/SureToDelete";
import { useState } from "react";
import {
  ProductFromServer,
  useFetchProducts,
} from "../../Hooks/useFetchProducts";

export default function ProductsPage() {
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const handleOnDelete = (title: string) => {
    setSelectedTitle(title);
    setDeleteVisible(true);
  };
  const handleOnClose = () => {
    setDeleteVisible(false);
  };

  // Αυτός ο callback θα κληθεί όταν ολοκληρωθεί η διαγραφή (μέσα στο SureToDelete)
  const handleDeleteComplete = () => {
    setDeleteVisible(false);
    // Επαναφόρτωση των προϊόντων
    refetch();
  };

  const { products, loading, error, refetch } = useFetchProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  // Ομαδοποίηση προϊόντων κατά κατηγορία
  const groupedProducts = products.reduce(
    (acc: Record<string, ProductFromServer[]>, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {}
  );

  return (
    <>
      <div className="top-prompt__container">
        {isDeleteVisible && (
          <SureToDelete
            itemTitle={selectedTitle}
            onClose={handleOnClose}
            onDeleteComplete={handleDeleteComplete}
          />
        )}
        <span>
          You can view all products here or{" "}
          <a href="http://localhost:5173/add-new-product">add new</a>
        </span>
      </div>
      <div className="products-panel__container">
        <div className="appetizers-section">
          {/* Για κάθε κατηγορία, δημιουργούμε μια ενότητα */}
          {Object.entries(groupedProducts).map(
            ([category, productsInCategory]) => (
              <div key={category} className="category-section">
                <span className="category-title">{category}</span>
                <ul>
                  {productsInCategory.map((product) => (
                    <li key={product.id}>
                      <img src={product.imageURL} alt={product.title} />
                      <span>{product.title}</span>
                      <span>{product.price}€</span>
                      <div className="action-buttons__container">
                        <button>View</button>
                        <button>Edit</button>
                        <button onClick={() => handleOnDelete(product.title)}>
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
