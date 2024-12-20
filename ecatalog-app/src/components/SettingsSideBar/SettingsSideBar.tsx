import "./SettingsSideBar.css";

type SettingsSideBarProps = {
  showTableSettings: () => void;
};

export default function SettingsSideBar({
  showTableSettings,
}: SettingsSideBarProps) {
  return (
    <>
      <div className="side-menu__container">
        <ul>
          <li onClick={() => showTableSettings()}>Tables</li>
        </ul>
      </div>
    </>
  );
}
