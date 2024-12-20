import { useState } from "react";
import SettingsSideBar from "../../components/SettingsSideBar/SettingsSideBar";
import "./SettingsPage.css";
import TablesSettings from "../../components/TablesSettings/TableSettings";

export default function SettingsPage() {
  const [isTableSettingsVisible, setTableSettingsVisible] = useState(false);

  const handleTableSettings = () => {
    setTableSettingsVisible(true);
  };
  return (
    <>
      <SettingsSideBar showTableSettings={handleTableSettings} />
      <TablesSettings />
    </>
  );
}
