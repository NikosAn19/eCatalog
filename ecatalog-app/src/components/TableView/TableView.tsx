import "./TableView.css";

type TableViewProps = {
  handleOrder: (isVisible: boolean) => void;
};

export default function TableView({ handleOrder }: TableViewProps) {
  return (
    <>
      <div className="tableView__container">
        <button onClick={() => handleOrder(true)}>Show Order</button>
      </div>
    </>
  );
}
