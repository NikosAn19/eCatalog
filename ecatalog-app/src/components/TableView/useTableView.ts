import { useEffect, useState } from "react";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";
import { TableData } from "../../Types/TableData";

export const useTableView = () => {
  const { order } = useOrderContext();

  const [tableDataList, setTableDataList] = useState<TableData[]>([
    { tableName: "15A", maxCustomers: 3, status: "Default" },
    { tableName: "12A", maxCustomers: 4, status: "Default" },
    { tableName: "11B", maxCustomers: 2, status: "Default" },
    { tableName: "8A", maxCustomers: 5, status: "Default" },
    { tableName: "9A", maxCustomers: 8, status: "Default" },
    { tableName: "1B", maxCustomers: 9, status: "Default" },
    { tableName: "2A", maxCustomers: 4, status: "Default" },
    { tableName: "3A", maxCustomers: 4, status: "Default" },
    { tableName: "4A", maxCustomers: 5, status: "Default" },
    { tableName: "5B", maxCustomers: 5, status: "Default" },
    { tableName: "7A", maxCustomers: 4, status: "Default" },
    { tableName: "16A", maxCustomers: 4, status: "Default" },
    { tableName: "6A", maxCustomers: 6, status: "Default" },
    { tableName: "13B", maxCustomers: 4, status: "Default" },
  ]);

  useEffect(() => {
    console.log("Order in tableView", order);
    console.log("Table ID in tableView :", order?.tableId);
  }, [order]);

  useEffect(() => {
    if (order) {
      setTableDataList((currentList) =>
        currentList.map((item) =>
          item.tableName === order.tableId
            ? { ...item, status: "Just Ordered" }
            : item
        )
      );
      console.log(
        "TableView hook runned and changes applied to table:",
        order.tableId
      );
    } else {
      console.log("Order is null or undefined in 2nd useEffect");
    }
  }, [order]);

  return { tableDataList };
};
