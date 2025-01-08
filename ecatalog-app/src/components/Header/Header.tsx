import "./Header.css";
import "../../Global/CSS/globalSettings.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleSettingsNavigate = () => {
    navigate("/settings");
  };
  const handleHomeNavigate = () => {
    navigate("/");
  };
  const handleProductsNavigate = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="header__container">
        <div className="logo__container" onClick={() => handleHomeNavigate()}>
          <span>eCatalogue</span>
        </div>

        <div className="options__container">
          <span className="user__text">
            Hello <b>restaurant </b>
          </span>
          <span id="products-menu" onClick={() => handleProductsNavigate()}>
            Products
          </span>
          <span id="settings-menu" onClick={() => handleSettingsNavigate()}>
            Settings
          </span>
        </div>
      </div>
    </>
  );
}
