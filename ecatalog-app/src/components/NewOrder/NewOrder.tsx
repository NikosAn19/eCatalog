import "./NewOrder.css";
import { Order, OrderAccepted, OrderItem } from "../../Types/Order";
import {
  deleteOrderFromLocalStorage,
  getItem,
  getOrdersFromLocalStorage,
  saveOrderToLocalStorage,
} from "../../Utils/LocalStorage/localStorage";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";

import { getCurrentTime } from "../../Utils/Formatters/timeFormatter";
import { useNewOrder } from "./useNewOrder";

export default function NewOrder() {
  const handleAcceptedOrder = () => {
    const acceptedOrder: OrderAccepted = {
      ...order,
      acceptedAt: getCurrentTime(),
    };

    //Saves order to Local Storage
    saveOrderToLocalStorage(acceptedOrder);
  };

  const { handleOrderVisible } = useOrderContext();

  const { mappedOrder, order } = useNewOrder();

  return (
    <>
      <div className="neworder__overlay"></div>
      <div className="neworder__panel">
        <div className="top__container">
          <div className="close_bttn_container">
            <button id="close-bttn" onClick={() => handleOrderVisible(false)}>
              X
            </button>
          </div>
          <div className="tableId__container">
            <span>{order?.tableId}</span>
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
          <p>{order?.comments ? order?.comments : "No comments"}</p>
        </div>
        <button
          onClick={() => {
            handleAcceptedOrder();
            handleOrderVisible(false);
          }}
        >
          Accept Order
        </button>
      </div>
    </>
  );
}
