import { TableData } from "../../Types/TableData";
import "./TableItem.css";

type TableItemProps = {
  tableData: TableData;
  handleClick: () => void;
};

export default function TableItem({ tableData, handleClick }: TableItemProps) {
  return (
    <>
      <div className="tableItem__container" onClick={() => handleClick()}>
        <span>{"Table Name : " + tableData.tableName}</span>
        <span>{"Max customers : " + tableData.maxCustomers}</span>
      </div>
    </>
  );
}
