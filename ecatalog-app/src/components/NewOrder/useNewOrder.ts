import { useEffect, useState } from "react";
import { OrderItem } from "../../Types/Order";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";

type MappedOrder = {
  [key: string]: OrderItem[];
};
export const useNewOrder = () => {
  const [mappedOrder, setMappedOrder] = useState<MappedOrder | null>(null);
  const { order } = useOrderContext();

  useEffect(() => {
    if (order) {
      const newMappedOrder = Object.fromEntries(
        Object.entries(order)
          .filter(([key]) => key !== "tableId" && key !== "comments")
          .map(([key, value]) => [
            key,
            value === null ? [] : (value as OrderItem[]),
          ])
      );
      setMappedOrder(newMappedOrder);
    } else {
      setMappedOrder(null);
    }
  }, [order]);

  return { mappedOrder, order };
};
