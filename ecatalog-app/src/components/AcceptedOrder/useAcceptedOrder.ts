import { useEffect, useState } from "react";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";
import { OrderItem } from "../../Types/Order";

type MappedOrder = {
  [key: string]: OrderItem[];
};
export const useAcceptedOrder = () => {
  const [mappedOrder, setMappedOrder] = useState<MappedOrder | null>(null);
  const { acceptedOrder } = useOrderContext();

  //Diamorfonoume thn Order gia na thn epeksergastoume sto UI (xwris tableId kai comments gia to mapping)
  useEffect(() => {
    if (acceptedOrder) {
      const newMappedOrder = Object.fromEntries(
        Object.entries(acceptedOrder)
          .filter(
            ([key]) =>
              key !== "tableId" && key !== "comments" && key !== "acceptedAt"
          )
          .map(([key, value]) => [
            key,
            value === null ? [] : (value as OrderItem[]),
          ])
      );
      setMappedOrder(newMappedOrder);
    } else {
      setMappedOrder(null);
    }
  }, [acceptedOrder]);

  return { mappedOrder, acceptedOrder };
};
