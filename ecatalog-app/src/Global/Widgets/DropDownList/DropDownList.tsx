import "./DropDownList.css";

type DropDownListProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function DropDownList({
  options,
  value,
  onChange,
}: DropDownListProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  // const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <>
      <select value={value} onChange={handleChange}>
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
