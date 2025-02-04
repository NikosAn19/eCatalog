import { useDeleteProduct } from "../../../../Hooks/useDeleteProduct";
import "./SureToDelete.css";

type SureToDeleteProps = {
  itemTitle?: string;
  onClose: () => void;
  onDeleteComplete: () => void;
};
export default function SureToDelete({
  itemTitle = "tiri",
  onClose,
  onDeleteComplete,
}: SureToDeleteProps) {
  const { deleteProduct, loading, error } = useDeleteProduct();

  const handleConfirmDelete = async () => {
    const success = await deleteProduct(itemTitle);
    if (success) {
      // Ενημέρωση στον parent ότι ολοκληρώθηκε η διαγραφή
      onDeleteComplete();
    }
  };
  return (
    <>
      <div className="sure-to-delete-container">
        <div className="sure-to-delete-content">
          <span>
            Are you sure you want to delete item <b>{itemTitle}</b>?{" "}
          </span>
          <div className="sure-to-delete-button__container">
            <button onClick={() => handleConfirmDelete()}>Yes</button>
            <button onClick={() => onClose()}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
