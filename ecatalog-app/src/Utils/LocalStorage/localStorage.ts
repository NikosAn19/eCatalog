import { Order } from "../../Types/Order";

export function saveOrderToLocalStorage(value: unknown) {
  try {
    // Παίρνουμε το τρέχον counter από το localStorage ή αρχικοποιούμε με 0
    const currentCounter = Number(window.localStorage.getItem("counter")) || 0;

    // Το key θα είναι το currentCounter
    const key = `${currentCounter}`;

    // Αποθηκεύουμε το item στο localStorage
    window.localStorage.setItem(key, JSON.stringify(value));
    console.log("New item added to localStorage with key:", key);

    // Αυξάνουμε τον counter και τον αποθηκεύουμε στο localStorage
    window.localStorage.setItem("counter", String(currentCounter + 1));
  } catch (error) {
    console.log("Error saving item to localStorage:", error);
  }
}

export function getOrdersFromLocalStorage(): unknown[] {
  try {
    // Παίρνουμε το counter από το localStorage για να ξέρουμε πόσα items υπάρχουν
    const counter = Number(window.localStorage.getItem("counter")) || 0;

    // Δημιουργούμε ένα array και προσθέτουμε όλα τα items από το localStorage
    const orders: unknown[] = [];
    for (let i = 0; i < counter; i++) {
      const order = window.localStorage.getItem(`${i}`);
      if (order) {
        let object = JSON.parse(order);

        console.log("Order object before converting:", object);
        orders.push(object); // Μετατρέπουμε το JSON string σε αντικείμενο
      }
    }

    return orders;
  } catch (error) {
    console.log("Error retrieving orders from localStorage:", error);
    return [];
  }
}

export function deleteOrderFromLocalStorage(order: Order): void {
  try {
    // Παίρνουμε το counter από το localStorage
    const counter = Number(window.localStorage.getItem("counter")) || 0;

    for (let i = 0; i < counter; i++) {
      const key = `${i}`;
      const storedOrder = window.localStorage.getItem(key);

      if (storedOrder) {
        const parsedOrder = JSON.parse(storedOrder);

        // Ελέγχουμε αν το αποθηκευμένο αντικείμενο ταιριάζει με το order
        if (JSON.stringify(parsedOrder) === JSON.stringify(order)) {
          // Αν υπάρχει αντιστοιχία, διαγράφουμε το αντικείμενο
          window.localStorage.removeItem(key);
          console.log(`Order with key "${key}" deleted from localStorage`);
          return; // Τερματίζουμε τη λειτουργία αφού διαγράψουμε
        } else {
          console.log("Order not found in localStorage");
        }
      }
    }
  } catch (error) {
    console.log("Error deleting order from localStorage:", error);
  }
}

export function getItem(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    console.log("item found! :", item);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.log(error);
  }
}
