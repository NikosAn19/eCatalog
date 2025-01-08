import "./LandingPanel.css";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  bussinessName: string;
};

type LandinPanelProps = {
  toNextStep: () => void;
};

export default function LandingPanel({ toNextStep }: LandinPanelProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Data in form :", data);
    toNextStep();
  };
  const validationRules = {
    bussinessName: {
      required: "This field is required",
      minLength: { value: 3, message: "Minimum 3 characters required" },
      maxLength: { value: 20, message: "Maximum 20 characters allowed" },
    },
  };
  return (
    <>
      <div className="landing-panel__container">
        <div className="title-topbar">Welcome</div>

        <form className="name-form" onSubmit={handleSubmit(onSubmit)}>
          <span>Enter busisness name </span>
          <div className="name-form-input__box">
            <input
              {...register("bussinessName", {
                required: "This field is required",
              })}
              required
            ></input>
            <span>Business Name</span>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}
