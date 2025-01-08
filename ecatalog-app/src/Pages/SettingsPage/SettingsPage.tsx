import { useState } from "react";
import SettingsSideBar from "../../components/SettingsSideBar/SettingsSideBar";
import "./SettingsPage.css";
import TablesSettings from "../../components/TablesSettings/TableSettings";
import AddTablePopup from "../../components/TablesSettings/AddTablePopup/AddTablePopup";

export default function SettingsPage() {
  const [isTableSettingsVisible, setTableSettingsVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClose = () => {
    setPopupVisible(false);
  };
  const handleOpen = () => {
    setPopupVisible(true);
  };

  const handleTableSettings = () => {
    setTableSettingsVisible(true);
  };
  return (
    <>
      <SettingsSideBar showTableSettings={handleTableSettings} />
      <div className="settings-main__container">
        <div className="settings-top-bar">
          <span>Settings</span>
        </div>
        <TablesSettings handleVisible={handleOpen} />
        {isPopupVisible && <AddTablePopup handleClose={handleClose} />}
      </div>
    </>
  );
}
