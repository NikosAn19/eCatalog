import { useEffect, useRef, useState } from "react";
import { Order, OrderItem } from "../Types/Order";
import { convertToCamelCase } from "../Utils/Formatters/objectFormatter";
const WS_ENDPOINT = "ws://localhost:5078/ws";

export const useWebSocketConnection = () => {
  const ws = useRef<WebSocket | null>(null);
  const [dataReceived, setDataReceived] = useState<Order | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(WS_ENDPOINT);

    ws.current.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.current.onmessage = (event) => {
      try {
        const rawData = JSON.parse(event.data);
        const data = convertToCamelCase(rawData);
        console.log("Message received from server:", data);

        // Ενημέρωση ότι το μήνυμα παραδόθηκε επιτυχώς
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
          ws.current.send(JSON.stringify({ status: "OK" }));
        }

        // Ενημέρωση του state με τα δεδομένα που λάβαμε
        setDataReceived(data);
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, []);

  return { dataReceived };
};
