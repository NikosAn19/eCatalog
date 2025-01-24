import "./TableView.css";
import "../../Types/TableData";

import TableItem from "../TableItems/TableItem";

import { useTableView } from "./useTableView";

export default function TableView() {
  const { tableDataList } = useTableView();

  return (
    <>
      <div className="tableView__container">
        {tableDataList.length === 0 ? (
          <span id="notables-prompt"> No tables yet</span>
        ) : (
          tableDataList.map((tableData) => <TableItem tableData={tableData} />)
        )}
      </div>
    </>
  );
}
