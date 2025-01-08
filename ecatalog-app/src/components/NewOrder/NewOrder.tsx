import "./NewOrder.css";
import { Order, OrderItem } from "../../Types/Order";

type NewOrderProps = {
  orderInfo: Order;
  handleVisibility: () => void;
};

export default function NewOrder({
  orderInfo,
  handleVisibility,
}: NewOrderProps) {
  return (
    <>
      <div className="neworder__overlay"></div>
      <div className="neworder__panel">
        <div className="top__container">
          <div className="close_bttn_container">
            <button id="close-bttn" onClick={() => handleVisibility()}>
              X
            </button>
          </div>
          <div className="tableId__container">
            <span>Table ID</span>
          </div>
        </div>
        {Object.entries(orderInfo).map(([category, items]) => (
          <div key={category} className="category__container">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <ul>
              {items.length === 0 ? (
                <li style={{ color: "red" }}>Nothing Ordered</li>
              ) : (
                (items as OrderItem[]).map((item, index) => (
                  <li key={index}>
                    {items.length === 0
                      ? "Nothing ordered"
                      : ` ${item.name} - Quantity: ${item.quantity}`}
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}

        <div className="comments__container">
          <h3>Comments</h3>
          <p>{orderInfo.comments ? orderInfo.comments : "No comments"}</p>
        </div>
        <button>Accept Order</button>
      </div>
    </>
  );
}
