import { SubmitHandler, useForm } from "react-hook-form";
import "./AddTablePopup.css";
import { TableData } from "../../../Types/TableData";

type AddTablePopupProps = {
  handleClose: () => void;
};

export default function AddTablePopup({ handleClose }: AddTablePopupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TableData>();

  const onSubmit: SubmitHandler<TableData> = (data) => {
    console.log(" Table Data in form :", data);

    //custom hook later here
  };
  const validationRules = {
    tableName: {
      required: "This field is required",
    },
    maxCustomers: {
      pattern: {
        value: /^[0-9]+$/,
        message: "Only numeric values are allowed",
      },
    },
  };
  return (
    <>
      <div className="add-table__container">
        <div className="top-bar-title">
          <span id="add-new-title">Add new Table</span>
          <button onClick={() => handleClose()}>X</button>
        </div>

        <form className="new-table-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="new-table-input__box">
            <input
              {...(register("tableName"), validationRules.tableName)}
              type="text"
              placeholder=" "
              required
            ></input>
            <span>Table Name</span>
          </div>
          <div className="new-table-input__box">
            <input
              {...register("maxCustomers", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]+$/, // RegExp
                  message: "Only numeric values are allowed", // Custom error message
                },
              })}
              required
            ></input>
            <span>Max Customers</span>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
