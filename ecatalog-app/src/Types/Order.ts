export type OrderItem = {
  name: string;
  quantity: number;
};
export type Order = {
  drinks?: OrderItem[];
  appetizers?: OrderItem[];
  main?: OrderItem[];
  deserts?: OrderItem[];
  comments?: string;
};
