import "./TableSettings.css";

type TablesSettingProps = {
  handleVisible: () => void;
};

export default function TablesSettings({ handleVisible }: TablesSettingProps) {
  return (
    <>
      <div className="tables-settings__container">
        <div className="top-bar">
          <span id="table-title">Tables</span>
          <button onClick={() => handleVisible()}>+</button>
        </div>

        <div className="tables-info__container">
          <ul>
            <li>
              <span>Table1</span>
              <div className="buttons__container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              <span>Table1</span>
              <div className="buttons__container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              <span>Table1</span>
              <div className="buttons__container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              <span>Table1</span>
              <div className="buttons__container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              <span>Table1</span>
              <div className="buttons__container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              <span>Table1</span>
              <div className="buttons__container">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
