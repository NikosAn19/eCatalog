import "./TableSetup.css";
import TablesSettings from "../../TablesSettings/TableSettings";

type TableSettingsProps = {
  toNextStep: () => void;
  handleVisible: () => void;
};

export default function TableSetup({
  toNextStep,
  handleVisible,
}: TableSettingsProps) {
  return (
    <>
      <div className="prop-div">
        <h1>Add New Tables</h1>
        <p>or edit an existed one</p>{" "}
      </div>
      <TablesSettings handleVisible={handleVisible} />
      <button onClick={() => toNextStep()} className="next-bttn">
        Next
      </button>
    </>
  );
}
