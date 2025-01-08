import LandingPanel from "../../components/Wizard/LandingPanel/LandingPanel";
import "./Wizard.css";

import TableSetup from "../../components/Wizard/TablesSetupPanel/TableSetup";
import useSteps from "../../components/Wizard/UseSteps";
import { useEffect, useState } from "react";
import AddTablePopup from "../../components/TablesSettings/AddTablePopup/AddTablePopup";

export default function Wizard() {
  const { currentStep, goToNextStep, prevStep, isFinished } = useSteps({
    totalSteps: 3,
  });

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClose = () => {
    setPopupVisible(false);
  };
  const handleOpen = () => {
    setPopupVisible(true);
  };

  useEffect(() => {
    console.log("Current Step in Wizard comp:", currentStep);
  }, [currentStep]);

  return (
    <>
      <div className="wizard__container">
        <div className="step-counter__container">
          <div style={currentStep >= 1 ? { backgroundColor: "green" } : {}}>
            <span>{currentStep <= 1 ? "1" : "✔"}</span>
          </div>
          <span className="separator"></span>
          <div
            style={
              currentStep === 2 || currentStep === 3
                ? { backgroundColor: "green" }
                : {}
            }
          >
            <span>{currentStep <= 2 ? "2" : "✔"}</span>
          </div>
          <span className="separator"></span>
          <div style={currentStep === 3 ? { backgroundColor: "green" } : {}}>
            <span>{currentStep <= 3 ? "3" : "✔"}</span>
          </div>
        </div>
        <div className="wizard-content__container">
          {currentStep === 1 && <LandingPanel toNextStep={goToNextStep} />}
          {currentStep === 2 && (
            <TableSetup toNextStep={goToNextStep} handleVisible={handleOpen} />
          )}
        </div>
      </div>

      {isPopupVisible && <AddTablePopup handleClose={handleClose} />}
    </>
  );
}
