import TableView from "../../components/TableView/TableView";
import NewOrder from "../../components/NewOrder/NewOrder";

import "./MainPage.css";
import OnGoingOrdersView from "../../components/OnGoingOrders/OnGoingOrders";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";

import AcceptedOrder from "../../components/AcceptedOrder/AcceptedOrder";

export default function MainPage() {
  const { orderVisible, acceptedOrderVisible } = useOrderContext();

  return (
    <>
      <div className={orderVisible ? "overlay" : ""}>
        <TableView />
        <OnGoingOrdersView />
      </div>

      {orderVisible && <NewOrder />}
      {acceptedOrderVisible && <AcceptedOrder />}
    </>
  );
}
