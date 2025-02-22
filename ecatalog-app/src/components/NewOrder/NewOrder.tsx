import "./NewOrder.css";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";
import { useNewOrder } from "./useNewOrder";

export default function NewOrder() {
  const { handleOrderVisible } = useOrderContext();

  const { mappedOrder, currentOrder, handleAcceptedOrder } = useNewOrder();

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
            <span>{currentOrder?.tableId}</span>
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
            {currentOrder?.comments ? currentOrder?.comments : "No comments"}
          </p>
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
