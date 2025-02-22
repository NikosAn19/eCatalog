import { useEffect, useState } from "react";
import { TableData } from "../../Types/TableData";
import "./TableItem.css";
import { useOrderContext } from "../../Context/OrderContext/OrderContext";

type TableItemProps = {
  tableData: TableData;
};

export default function TableItem({ tableData }: TableItemProps) {
  const [orderStatus, setOrderStatus] = useState(tableData.status);

  // if (tableData.acceptedOrders > 0 && tableData.onHoldOrders === 0) {
  //   setOrderStatus("Waiting");
  // } else if (tableData.acceptedOrders > 0 && tableData.onHoldOrders > 0) {
  //   setOrderStatus("Just Ordered");
  // } else if (tableData.acceptedOrders === 0 && tableData.onHoldOrders > 0) {
  //   setOrderStatus("Just Ordered");
  // } else {
  //   setOrderStatus("Default");
  // }

  useEffect(() => {
    setOrderStatus(tableData.status); // Ενημέρωση του local state αν αλλάξει το props

    console.log("TableItem state is :", orderStatus);
  }, [tableData]);

  const setDefault = () => {
    setOrderStatus("Default");
  };

  // const setJustOrdered = () => {
  //   setOrderStatus("Just Ordered");
  // };

  const setWaiting = () => {
    setOrderStatus("Waiting");
  };

  const { handleOrderVisible, handleTableClicked } = useOrderContext();

  return (
    <>
      <div
        className={
          orderStatus === "Just Ordered"
            ? "tableItem__container animated"
            : orderStatus === "Waiting"
            ? "tableItem__container waiting"
            : "tableItem__container"
        }
        onClick={() => {
          // setDefault();
          handleTableClicked(tableData.tableName);
          handleOrderVisible(true);
        }}
      >
        <span>{"Table Name : " + tableData.tableName}</span>
        <span>{"Max customers : " + tableData.maxCustomers}</span>
      </div>
    </>
  );
}
