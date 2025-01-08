import "./DropDownList.css";

import { SetStateAction, useState } from "react";

type DropDownListProps = {
  options: string[];
};

export default function DropDownList({ options }: DropDownListProps) {
  const [selectedOption, setSelectedOption] = useState(""); // Κατάσταση για την επιλογή

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value); // Ενημέρωση της κατάστασης
  };

  // const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          -- Select a category --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
