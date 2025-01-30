import { Order, OrderAccepted } from "./Order";

export type TableData = {
  tableName: string;
  maxCustomers: number;
  status: string;
  acceptedOrders: OrderAccepted[];
  onHoldOrders: Order[];
};
