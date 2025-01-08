import AcceptEdit from "../../components/Alerts/AcceptPopups/AcceptChanges/AcceptEdit";
import AcceptDelivered from "../../components/Alerts/AcceptPopups/AcceptDelivered/AcceptDelivered";
import SureToDelete from "../../components/Alerts/DeletePopups/AreYouSurePopup/SureToDelete";

export default function TestingPage() {
  return (
    <>
      <SureToDelete />
      <AcceptEdit />
      <AcceptDelivered />
    </>
  );
}
