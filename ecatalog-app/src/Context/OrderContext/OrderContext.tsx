import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Order, OrderAccepted } from "../../Types/Order";
import { useWebSocketConnection } from "../../Hooks/useWebSocketConnection";
import {
  getTableDataListFromLocalStorage,
  storeTableDataListToLocalStorage,
} from "../../Utils/LocalStorage/localStorage";
import { TableData } from "../../Types/TableData";
import { getCurrentTime } from "../../Utils/Formatters/timeFormatter";

export type OrderContextType = {
  orderVisible: boolean;
  handleOrderVisible: (isVisible: boolean) => void;

  tableDataList: TableData[];
  acceptedOrder: OrderAccepted | null;
  handleAcceptedOrder: (acceptedOrder: OrderAccepted) => void;
  acceptedOrderVisible: boolean;
  handleAcceptedOrderVisible: (isVisible: boolean) => void;
  tableClicked: string | null;
  handleTableClicked: (tableId: string | null) => void;
  updateTableDataList: (updatedList: TableData[]) => void;
  handleTriggerUpdate: (triggerUpdate: boolean) => void;
  acceptOrder: (tableName: string | null, order: Order | null) => void;
  deleteAcceptedOrder: (
    tableName?: string | null,
    orderId?: string | null
  ) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error("OrderContext is undefined");
  }

  return context;
};

export default function OrderProvider({ children }: PropsWithChildren) {
  //To display NewOrder component on screen
  const [orderVisible, setOrderVisible] = useState(false);
  const handleOrderVisible = (isVisible: boolean) => {
    setOrderVisible(isVisible);
  };
  //To display AcceptedOrder component on screen
  const [acceptedOrderVisible, setAcceptedOrderVisible] = useState(false);
  const handleAcceptedOrderVisible = (isVisible: boolean) => {
    setAcceptedOrderVisible(isVisible);
  };
  //Holds Accepted Order here to pass it to AcceptedVisible Component
  const [acceptedOrder, setAcceptedOrder] = useState<OrderAccepted | null>(
    null
  );
  const handleAcceptedOrder = (acceptedOrder: OrderAccepted) => {
    setAcceptedOrder(acceptedOrder);
  };

  //Holds the last order recieved from server
  const { dataReceived } = useWebSocketConnection();

  // 1. Φορτώνουμε το tableDataList από localStorage ή (αν είναι άδειο) βάζουμε την αρχική σου λίστα
  const [tableDataList, setTableDataList] = useState<TableData[]>(() => {
    const saved = getTableDataListFromLocalStorage();
    if (saved.length > 0) {
      return saved; // είχε ήδη αποθηκευμένα
    } else {
      // Αν δεν υπάρχει τίποτα, βάλε την default λίστα των τραπεζιών
      return [
        {
          tableName: "15A",
          maxCustomers: 3,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "12A",
          maxCustomers: 4,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "11B",
          maxCustomers: 2,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "8A",
          maxCustomers: 5,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "9A",
          maxCustomers: 8,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "1B",
          maxCustomers: 9,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "2A",
          maxCustomers: 4,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "3A",
          maxCustomers: 4,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "4A",
          maxCustomers: 5,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "5B",
          maxCustomers: 5,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "7A",
          maxCustomers: 4,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "16A",
          maxCustomers: 4,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "6A",
          maxCustomers: 6,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        {
          tableName: "13B",
          maxCustomers: 4,
          status: "Default",
          onHoldOrders: [],
          acceptedOrders: [],
        },
        // ...βάλε όλα τα άλλα tables εδώ
      ];
    }
  });

  // A. Όταν "accept" μια onHold παραγγελία
  const acceptOrder = (tableName: string | null, order: Order | null) => {
    setTableDataList((prev) =>
      prev.map((table) => {
        if (table.tableName === tableName) {
          // Αφαιρούμε το order από τα onHold
          const newOnHold = table.onHoldOrders.filter((o) => o !== order);
          // Φτιάχνουμε το accepted order
          const accepted: OrderAccepted = {
            ...order,
            acceptedAt: getCurrentTime(),
          };
          // Προσθέτουμε στο acceptedOrders
          const newAccepted = [...table.acceptedOrders, accepted];
          console.log("AFTER ACCEPT CHANGES :", newAccepted);
          return {
            ...table,
            onHoldOrders: newOnHold,
            acceptedOrders: newAccepted,
          };
        }

        return table;
      })
    );
  };

  // B. Όταν θέλεις να διαγράψεις μια accepted παραγγελία (π.χ. μετά την παράδοση / ολοκλήρωση)
  const deleteAcceptedOrder = (
    tableName?: string | null,
    orderId?: string | null
  ) => {
    setTableDataList((prev) =>
      prev.map((table) => {
        if (table.tableName === tableName) {
          const newAccepted = table.acceptedOrders.filter(
            (ord) => ord.orderId !== orderId
          );
          return {
            ...table,
            acceptedOrders: newAccepted,
          };
        }
        return table;
      })
    );
  };

  // 3. Συνάρτηση γενική για update
  const updateTableDataList = (updatedList: TableData[]) => {
    setTableDataList(updatedList);
  };

  //Holds state of last Clicked item.
  const [tableClicked, setTableClicked] = useState<string | null>(null);

  const handleTableClicked = (tableId: string | null) => {
    setTableClicked(tableId);
  };

  //Triggers the update
  const [triggerUpdate, setTriggerUpdate] = useState(true);
  const handleTriggerUpdate = (triggerUpdate: boolean) => {
    setTriggerUpdate(triggerUpdate);
  };

  //Watches changes to inform new status
  useEffect(() => {
    if (triggerUpdate) {
      console.log("UPDATE TRIGGERED! :");
      const updatedTableDataList = tableDataList.map((tableData) => {
        let newStatus = "Default";

        if (
          tableData.acceptedOrders.length > 0 &&
          tableData.onHoldOrders.length === 0
        ) {
          newStatus = "Waiting";
        } else if (
          tableData.acceptedOrders.length > 0 &&
          tableData.onHoldOrders.length > 0
        ) {
          newStatus = "Just Ordered";
        } else if (
          tableData.acceptedOrders.length === 0 &&
          tableData.onHoldOrders.length > 0
        ) {
          newStatus = "Just Ordered";
        } else {
          newStatus = "Default";
        }
        console.log(
          "Table Id :",
          tableData.tableName,
          "AcceptedOrders::",
          tableData.acceptedOrders,
          "\n OnHold Orders:",
          tableData.onHoldOrders
        );

        return { ...tableData, status: newStatus };
      });

      setTableDataList(updatedTableDataList);
      setTriggerUpdate(false);
    } else {
      console.log("Trigger Update is false");
    }
  }, [triggerUpdate]);

  // 2. useEffect: κάθε φορά που αλλάζει το tableDataList => γράφτο στο localStorage
  useEffect(() => {
    storeTableDataListToLocalStorage(tableDataList);
    console.log("UPDATED TABLE LIST", tableDataList);
  }, [tableDataList]);

  // Otan erthei nea paraggelia enhmeronoyme to onHold(den exei ginei accept akoma) sto sigkekrikmeno trapezi
  useEffect(() => {
    if (dataReceived) {
      setTableDataList((currentList) =>
        currentList.map((item) =>
          item.tableName === dataReceived.tableId
            ? { ...item, onHoldOrders: [...item.onHoldOrders, dataReceived] }
            : item
        )
      );
      console.log(
        "TableView hook runned and changes applied to table:",
        dataReceived.tableId
      );
      setTriggerUpdate(true);
    } else {
      console.log("Order is null or undefined in 2nd useEffect");
    }
  }, [dataReceived]);

  return (
    <OrderContext.Provider
      value={{
        orderVisible,
        handleOrderVisible,
        tableDataList,
        acceptedOrderVisible,
        handleAcceptedOrderVisible,
        acceptedOrder,
        handleAcceptedOrder,
        tableClicked,
        handleTableClicked,
        updateTableDataList,
        handleTriggerUpdate,
        acceptOrder,
        deleteAcceptedOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
