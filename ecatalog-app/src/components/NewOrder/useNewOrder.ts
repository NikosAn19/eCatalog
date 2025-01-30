import { useEffect, useState } from "react";
import { Order, OrderAccepted, OrderItem } from "../../Types/Order";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";
// import { getCurrentTime } from "../../Utils/Formatters/timeFormatter";
// import { useLocalStorage } from "../../Utils/LocalStorage/useLocalStorage";

type MappedOrder = {
  [key: string]: OrderItem[];
};
export const useNewOrder = () => {
  const [mappedOrder, setMappedOrder] = useState<MappedOrder | null>(null);
  const { tableClicked, tableDataList, handleTriggerUpdate, acceptOrder } =
    useOrderContext();
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  //Diamorfonoume thn Order gia na thn epeksergastoume sto UI (xwris tableId kai comments gia to mapping)
  useEffect(() => {
    if (currentOrder) {
      const newMappedOrder = Object.fromEntries(
        Object.entries(currentOrder)
          .filter(
            ([key]) =>
              key !== "tableId" && key !== "comments" && key !== "orderId"
          )
          .map(([key, value]) => [
            key,
            value === null ? [] : (value as OrderItem[]),
          ])
      );
      console.log("mapped Order in newOrder comp :", newMappedOrder);
      setMappedOrder(newMappedOrder);
    } else {
      setMappedOrder(null);
    }
  }, [currentOrder]);

  useEffect(() => {
    if (tableClicked) {
      const table = tableDataList.find(
        (data) => data.tableName === tableClicked
      );

      if (table) {
        // Έλεγχος αν το onHoldOrders έχει παραγγελίες
        if (table.onHoldOrders.length > 0) {
          // Πάρε την τελευταία παραγγελία
          const latestOrder = table.onHoldOrders[table.onHoldOrders.length - 1];

          setCurrentOrder(latestOrder);
        } else {
          console.log("No orders on hold for this table.");
          setCurrentOrder(null); // Ή ό,τι default θες να βάλεις
        }
      } else {
        console.log("Table not found.");
      }
    }
  }, [tableClicked]);

  const handleAcceptedOrder = () => {
    acceptOrder(tableClicked, currentOrder);

    handleTriggerUpdate(true);
  };

  return { mappedOrder, currentOrder, handleAcceptedOrder };
};
