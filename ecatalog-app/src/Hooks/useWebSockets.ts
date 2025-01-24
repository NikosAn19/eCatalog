import { useState, useEffect } from "react";
import { TableData } from "../Types/TableData";

export const useWebSockets = (endpoint: string) => {
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
    const ws = new WebSocket(endpoint);

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      console.log("Message from server:", event.data);

      try {
        const receivedOrder = JSON.parse(event.data);
        console.log("JSON recieved order : ", receivedOrder);
        const tableName = receivedOrder.TableId;

        setTableDataList((currentList) =>
          currentList.map((item) =>
            item.tableName === tableName
              ? { ...item, status: "Just Ordered" }
              : item
          )
        );
      } catch (error) {
        console.error("Failed to parse message:", error);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup, to close connection on refresh
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [endpoint]);

  return { tableDataList };
};
