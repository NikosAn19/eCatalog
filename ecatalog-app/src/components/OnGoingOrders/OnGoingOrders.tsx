import "./OnGoingOrders.css";
import { OrderAccepted } from "../../Types/Order";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";
import { useEffect } from "react";

export default function OnGoingOrdersView() {
  const {
    tableDataList,
    deleteAcceptedOrder,
    handleAcceptedOrderVisible,
    handleAcceptedOrder,
    handleTriggerUpdate,
  } = useOrderContext();

  // 1. “Μαζεύεις” όλα τα acceptedOrders από όλα τα tables
  const allAcceptedOrders = tableDataList.flatMap((table) =>
    table.acceptedOrders.map((order) => ({
      ...order,
    }))
  );

  useEffect(() => {
    console.log("All accepted orders in on going orders:", allAcceptedOrders);
  }, [allAcceptedOrders]);

  const handleView = (order: OrderAccepted) => {
    // Υλοποίησε τη λειτουργία που θέλεις όταν πατηθεί το "View Order"

    handleAcceptedOrder(order);

    handleAcceptedOrderVisible(true);
    console.log("View Order clicked for:", order);
    // Π.χ., μπορείς να ανοίξεις ένα modal με τις λεπτομέρειες της παραγγελίας
  };

  const handleSetDelivered = (order: OrderAccepted) => {
    // Εδώ καλούμε τη συνάρτηση που διαγράφει την accepted παραγγελία από το context
    // (άρα και από το tableDataList)
    deleteAcceptedOrder(order.tableId, order.orderId);
    handleTriggerUpdate(true);
    console.log("Set Delivered clicked for table:", order.tableId);
  };

  return (
    <>
      <div className="ongoing__container">
        <div className="title__container">
          <span>On Going Orders</span>
        </div>

        <ul>
          {allAcceptedOrders &&
            allAcceptedOrders.map((order) => (
              <li key={order.orderId} className="">
                Table {order.tableId}
                <div className="list-buttons__container">
                  <button
                    id="view-order__bttn"
                    onClick={() => handleView(order)}
                  >
                    View Order
                  </button>
                  <button
                    id="set-delivered__bttn"
                    onClick={() => handleSetDelivered(order)}
                  >
                    Set Delivered
                  </button>
                </div>
                <span>{order.acceptedAt}</span>
              </li>
            ))}
          {allAcceptedOrders?.length === 0 && (
            <span>No on going orders yet</span>
          )}
        </ul>
      </div>
    </>
  );
}
