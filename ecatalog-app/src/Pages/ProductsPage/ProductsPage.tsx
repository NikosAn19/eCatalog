import "./ProductsPage.css";

import fries from "../../assets/Product Images/fries.jpg";
import tzatziki from "../../assets/Product Images/tzatziki.jpg";
import melitzanosalata from "../../assets/Product Images/melitzanosalata.jpg";
import tirokroketes from "../../assets/Product Images/tirokroketes.jpg";
import steak from "../../assets/Product Images/steak.jpg";
import chicken from "../../assets/Product Images/chicken.webp";
import spaghetti from "../../assets/Product Images/spaghetti.jpg";
import SureToDelete from "../../components/Alerts/DeletePopups/AreYouSurePopup/SureToDelete";
import { useState } from "react";

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
  return (
    <>
      <div className="top-prompt__container">
        {isDeleteVisible && (
          <SureToDelete itemTitle={selectedTitle} onClose={handleOnClose} />
        )}
        <span>
          You can view all products here or{" "}
          <a href="http://localhost:5173/add-new-product"> add new </a>
        </span>
      </div>
      <div className="products-panel__container">
        <div className="appetizers-section">
          <span className="category-title">Appetizers</span>
          <ul>
            <li>
              <img src={fries}></img> <span>Πατάτες</span>
              <span>3.5€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button onClick={() => handleOnDelete("eeee")}>Delete</button>
              </div>
            </li>
            <li>
              {" "}
              <img src={tzatziki}></img> <span>Τζατζικι</span>
              <span>4€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              {" "}
              <img src={tirokroketes}></img> <span>Τυροκροκετες</span>
              <span>4€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              {" "}
              <img src={melitzanosalata}></img> <span>Μελιτζανοσαλατα</span>
              <span>5€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          </ul>

          <span className="category-title">Main Dishes</span>
          <ul>
            <li>
              {" "}
              <img src={steak}></img> <span>Μοσχαρισια Μπριζολα</span>
              <span>14€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              {" "}
              <img src={chicken}></img> <span>Κοτοπουλο Ψητο</span>
              <span>8€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              {" "}
              <img src={spaghetti}></img> <span>Μακαρονια Σπαγγετι</span>
              <span>9€</span>
              <div className="action-buttons__container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
