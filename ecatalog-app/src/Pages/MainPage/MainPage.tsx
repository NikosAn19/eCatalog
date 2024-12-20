import { useState } from "react";
import TableView from "../../components/TableView/TableView";
import NewOrder from "../../components/NewOrder/NewOrder";
import { Order } from "../../Types/Order";
import "./MainPage.css";
import OnGoingOrdersView from "../../components/OnGoingOrders/OnGoingOrders";

export default function MainPage() {
  const order: Order = {
    drinks: [
      { name: "Coke", quantity: 2 },
      { name: "Orange Juice", quantity: 1 },
      { name: "Water", quantity: 3 },
      { name: "Beer", quantity: 2 },
      { name: "Red Wine", quantity: 1 },
    ],
    appetizers: [
      { name: "Garlic Bread", quantity: 1 },
      { name: "Bruschetta", quantity: 2 },
      { name: "Greek Salad", quantity: 3 },
      { name: "Spring Rolls", quantity: 1 },
      { name: "Nachos", quantity: 2 },
    ],
    main: [
      { name: "Grilled Salmon", quantity: 1 },
      { name: "Beef Steak", quantity: 2 },
      { name: "Chicken Alfredo", quantity: 1 },
      { name: "Vegetarian Pizza", quantity: 3 },
      { name: "Pasta Carbonara", quantity: 2 },
    ],
    deserts: [],
  };

  const [isOrderVisible, setOrderVisible] = useState(false);

  const handleOrderVisible = () => {
    setOrderVisible(true);
  };
  const handleOrderClose = () => {
    setOrderVisible(false);
  };

  return (
    <>
      <div className={isOrderVisible ? "overlay" : ""}>
        <TableView handleOrder={handleOrderVisible} />
        <OnGoingOrdersView />
      </div>

      {isOrderVisible && (
        <NewOrder orderInfo={order} handleVisibility={handleOrderClose} />
      )}
    </>
  );
}
