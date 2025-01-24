export type OrderItem = {
  name: string;
  quantity: number;
};
export type Order = {
  tableId?: string;
  drinks?: OrderItem[] | null;
  appetizers?: OrderItem[] | null;
  main?: OrderItem[] | null;
  deserts?: OrderItem[] | null;
  comments?: string | null;
};

export type OrderAccepted = Order & {
  acceptedAt: string; // Format: "HH:mm:ss"
};
