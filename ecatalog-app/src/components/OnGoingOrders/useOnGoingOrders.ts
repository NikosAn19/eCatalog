import { useEffect, useState } from "react";
import { OrderAccepted } from "../../Types/Order";

export const useOnGoingOrders = () => {
  const [acceptedOrders, setAcceptedOrders] = useState<OrderAccepted | null>(
    null
  );

  useEffect(() => {});

  return { acceptedOrders };
};
