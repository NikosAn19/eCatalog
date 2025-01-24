import { Order, OrderItem } from "../../Types/Order";

const convertOrderItemKeys = (items: any[]): OrderItem[] => {
  if (!Array.isArray(items)) return [];
  return items.map((item) => ({
    name: item.Name,
    quantity: item.Quantity,
  }));
};

export const convertToCamelCase = (order: any): Order => ({
  tableId: order.TableId,
  drinks: convertOrderItemKeys(order.Drinks),
  appetizers: convertOrderItemKeys(order.Appetizers),
  main: convertOrderItemKeys(order.Main),
  deserts: convertOrderItemKeys(order.Deserts),
  comments: order.Comments,
});
