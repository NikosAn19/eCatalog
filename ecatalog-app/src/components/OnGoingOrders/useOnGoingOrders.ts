// import { useEffect, useState } from "react";
// import { OrderAccepted } from "../../Types/Order";
// import { useOrderContext } from "../../Context/OrderContext/OrderContext";
// import { useLocalStorage } from "../../Utils/LocalStorage/useLocalStorage";

// export const useOnGoingOrders = () => {
//   const { tableDataList, handleAcceptedOrderVisible, handleAcceptedOrder } =
//     useOrderContext();
//   // const { handleDelete } = useLocalStorage();

//   const [onGoingOrders, setOnGoingOrders] = useState<OrderAccepted[] | null>(
//     null
//   );
//    // 1. “Μαζεύεις” όλα τα acceptedOrders από όλα τα tables
//    const allAcceptedOrders = tableDataList.flatMap((table) =>
//     table.acceptedOrders.map((order) => ({
//       ...order,
//       tableName: table.tableName, // κρατάς και το tableName για να ξέρεις από ποιο τραπέζι αφαιρείς
//     }))
//   );

//   useEffect(() => {
//     if (acceptedOrders) {
//       setOnGoingOrders(acceptedOrders);
//     }
//   }, [acceptedOrders]);

//   return {
//     onGoingOrders,
//     setDelivered,
//     handleAcceptedOrderVisible,
//     handleAcceptedOrder,
//   };
// };
