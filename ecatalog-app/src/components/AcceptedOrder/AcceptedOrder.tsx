import "./AcceptedOrder.css";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";
import { useAcceptedOrder } from "./useAcceptedOrder";

export default function AcceptedOrders() {
  const { handleAcceptedOrderVisible } = useOrderContext();

  const { mappedOrder, acceptedOrder } = useAcceptedOrder();

  return (
    <>
      <div className="acceptedOrders__overlay"></div>
      <div className="acceptedOrders__panel">
        <div className="acceptedOrders-top__container">
          <div className="close_bttn_container">
            <button
              id="close-bttn"
              onClick={() => handleAcceptedOrderVisible(false)}
            >
              X
            </button>
          </div>
          <div className="tableId__container">
            <span>{acceptedOrder?.tableId}</span>
          </div>
        </div>
        {mappedOrder &&
          Object.entries(mappedOrder).map(([category, items]) => (
            <div key={category} className="category__container">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {items.length === 0 ? (
                  <li style={{ color: "red" }}>Nothing Ordered</li>
                ) : (
                  items.map((item, index) => (
                    <li key={index}>
                      {` ${item?.name} - Quantity: ${item?.quantity}`}
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}

        <div className="comments__container">
          <h3>Comments</h3>
          <p>
            {acceptedOrder?.comments ? acceptedOrder?.comments : "No comments"}
          </p>
        </div>
      </div>
    </>
  );
}
