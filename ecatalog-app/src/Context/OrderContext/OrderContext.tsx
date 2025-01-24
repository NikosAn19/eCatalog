import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Order } from "../../Types/Order";
import { useWebSocketConnection } from "../../Hooks/useWebSocketConnection";

export type OrderContextType = {
  orderAccepted: boolean;
  handleOrderAccepted: () => void;
  orderVisible: boolean;
  handleOrderVisible: (isVisible: boolean) => void;
  order: Order | null;
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
  const [orderAccepted, setOrderAccepted] = useState(false);

  //To display NewOrder component on screen
  const [orderVisible, setOrderVisible] = useState(false);

  //Holds new Order here
  const [order, setOrder] = useState<Order | null>(null);

  const { dataReceived } = useWebSocketConnection();

  // Όταν λαμβάνεται νέο μήνυμα, ενημερώνουμε το state του context
  useEffect(() => {
    if (dataReceived) {
      setOrder(dataReceived);
      console.log(
        "Data recieved in context from websocket hook :",
        dataReceived
      );
    }
  }, [dataReceived]);

  const handleOrderVisible = (isVisible: boolean) => {
    setOrderVisible(isVisible);
  };

  const handleOrderAccepted = () => {
    setOrderAccepted(true);
  };

  return (
    <OrderContext.Provider
      value={{
        orderAccepted,
        handleOrderAccepted,
        orderVisible,
        handleOrderVisible,
        order,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
