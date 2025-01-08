import "./AcceptDelivered.css";

type AcceptDeliveredProps = {
  tableId?: string;
};

export default function AcceptDelivered({
  tableId = "tiri",
}: AcceptDeliveredProps) {
  return (
    <>
      <div className="accept-delivered-container">
        <div className="accept-delivered-content">
          <span>
            Accept order from table <b>{tableId}</b>?{" "}
          </span>
          <div className="accept-delivered-button__container">
            <button>Yes</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
