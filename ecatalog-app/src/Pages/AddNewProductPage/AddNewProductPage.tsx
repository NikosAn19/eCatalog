import "./AddNewProductPage.css";

import AddNewProductForm from "../../Global/Forms/AddNewProductForm/AddNewProductForm";

import ItemAdded from "../../components/Alerts/ItemAddedPopup/ItemAdded";
import { useState } from "react";

export default function AddNewProductPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [productTitle, setProductTitle] = useState("");

  const handleAcceptedVisible = (title: string) => {
    setProductTitle(title);
    setShowPopup(true);
    console.log("popup mounted");
    setTimeout(() => {
      setShowPopup(false);
    }, 6000);
  };
  return (
    <>
      <div className="add-new-product-title__container">
        <span id="title">Add New Product</span>
        <span id="important-note">
          Important: Customers will see new products in their next refresh!
        </span>
      </div>
      <AddNewProductForm showPopup={handleAcceptedVisible} />
      {showPopup && <ItemAdded productName={productTitle} />}
    </>
  );
}
