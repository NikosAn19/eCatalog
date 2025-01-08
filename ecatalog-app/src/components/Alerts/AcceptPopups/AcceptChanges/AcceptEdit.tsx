import "./AcceptEdit.css";

type AcceptEditProps = {
  itemTitle?: string;
};

export default function AcceptEdit({ itemTitle = "tiri" }: AcceptEditProps) {
  return (
    <>
      <div className="accept-edit-container">
        <div className="accept-edit-content">
          <span>
            Are you sure you want to edit item <b>{itemTitle}</b>?{" "}
          </span>
          <div className="accept-edit-button__container">
            <button>Yes</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
