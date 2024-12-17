import "./Header.css";
import "../../Global/globalSettings.css";

export default function Header() {
  return (
    <>
      <div className="header__container">
        <div className="logo__container">eCatalogue</div>

        <div className="options__container">
          <span className="user__text">
            Hello <b>restaurant </b>
          </span>
          <button></button>
        </div>
      </div>
    </>
  );
}
