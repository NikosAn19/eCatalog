import "./TableSettings.css";

export default function TablesSettings() {
  return (
    <>
      <div className="tables-settings__container">
        <div className="top-bar">
          <span id="table-title">Tables</span>
          <button>+</button>
        </div>

        <div className="tables-info__container">
          <ul>
            <li>
              <span>Table1</span>
              <button>Edit</button>
            </li>
            <li>
              {" "}
              <span>Table1</span>
              <button>Edit</button>
            </li>
            <li>
              {" "}
              <span>Table1</span>
              <button>Edit</button>
            </li>
            <li>
              {" "}
              <span>Table1</span>
              <button>Edit</button>
            </li>
            <li>
              {" "}
              <span>Table1</span>
              <button>Edit</button>
            </li>
            <li>
              {" "}
              <span>Table1</span>
              <button>Edit</button>
            </li>
            <li>Table1</li>
            <li>Table1</li>
            <li>Table1</li>
            <li>Table1</li>
          </ul>
        </div>
      </div>
    </>
  );
}
