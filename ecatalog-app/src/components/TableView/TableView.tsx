import "./TableView.css";
import "../../Types/TableData";
import { TableData } from "../../Types/TableData";
import TableItem from "../TableItems/TableItem";

type TableViewProps = {
  handleOrder: () => void;
};

const tables: TableData[] = [
  { tableName: "15A", maxCustomers: 3 },
  { tableName: "12A", maxCustomers: 4 },
  { tableName: "11B", maxCustomers: 2 },
  { tableName: "8A", maxCustomers: 5 },
  { tableName: "9A", maxCustomers: 8 },
  { tableName: "1B", maxCustomers: 9 },
  { tableName: "2A", maxCustomers: 4 },
  { tableName: "3A", maxCustomers: 4 },
  { tableName: "4A", maxCustomers: 5 },
  { tableName: "5B", maxCustomers: 5 },
  { tableName: "7A", maxCustomers: 4 },
  { tableName: "16A", maxCustomers: 4 },
  { tableName: "6A", maxCustomers: 6 },
  { tableName: "13B", maxCustomers: 4 },
  { tableName: "13B", maxCustomers: 4 },
  { tableName: "13B", maxCustomers: 4 },
  { tableName: "13B", maxCustomers: 4 },
  { tableName: "13B", maxCustomers: 4 },
  { tableName: "13B", maxCustomers: 4 },
  { tableName: "13B", maxCustomers: 4 },
];

export default function TableView({ handleOrder }: TableViewProps) {
  return (
    <>
      <div className="tableView__container">
        {/* <button onClick={() => handleOrder(true)}>Show Order</button> */}
        {tables.length === 0 ? (
          <span id="notables-prompt"> No tables yet</span>
        ) : (
          tables.map((table) => (
            <TableItem tableData={table} handleClick={handleOrder} />
          ))
        )}
      </div>
    </>
  );
}
