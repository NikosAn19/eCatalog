import "./AddNewProductPage.css";

import AddNewProductForm from "../../Global/Forms/AddNewProductForm/AddNewProductForm";

import ItemAdded from "../../components/Alerts/ItemAddedPopup/ItemAdded";
import { useState } from "react";

export default function AddNewProductPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleAcceptedVisible = () => {
    setShowPopup(true);
    console.log("popup mounted");
    setTimeout(() => {
      setShowPopup(false);
    }, 6000);
  };
  return (
    <>
      <div className="add-new-product-title__container">
        <span>Add New Product</span>
      </div>
      <AddNewProductForm showPopup={handleAcceptedVisible} />
      {showPopup && <ItemAdded productName="product" />}
    </>
  );
}
