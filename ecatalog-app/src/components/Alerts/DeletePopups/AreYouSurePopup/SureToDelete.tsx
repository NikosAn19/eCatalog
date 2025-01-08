import "./SureToDelete.css";

type SureToDeleteProps = {
  itemTitle?: string;
  onClose: () => void;
};
export default function SureToDelete({
  itemTitle = "tiri",
  onClose,
}: SureToDeleteProps) {
  return (
    <>
      <div className="sure-to-delete-container">
        <div className="sure-to-delete-content">
          <span>
            Are you sure you want to delete item <b>{itemTitle}</b>?{" "}
          </span>
          <div className="sure-to-delete-button__container">
            <button>Yes</button>
            <button onClick={() => onClose()}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
