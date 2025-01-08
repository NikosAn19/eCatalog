import "./AddNewProductForm.css";
import DropDownList from "../../Widgets/DropDownList/DropDownList";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "../../../Types/Product";
import { useState } from "react";

type AddNewProductFormProps = {
  showPopup: () => void;
};

export default function AddNewProductForm({
  showPopup,
}: AddNewProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit: SubmitHandler<Product> = (data) => {
    console.log(" Table Data in form :", data);

    //custom hook later here
  };

  const options = [
    "Appetizers",
    "Main Dishes",
    "Desserts",
    "Beverages",
    "Alcohol Drinks",
    "Non Alcohol Drinks",
  ];

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <>
      <div className="add-new-product__container">
        <form
          className="add-new-product-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="add-new-product-input__box">
            <input
              {...register("title", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]+$/, // RegExp
                  message: "Only numeric values are allowed", // Custom error message
                },
              })}
              required
            ></input>
            <span>Title</span>
          </div>
          <div className="add-new-product-input__box">
            <textarea
              {...register("description", {
                required: "Η περιγραφή είναι υποχρεωτική",
                maxLength: {
                  value: 500,
                  message:
                    "Η περιγραφή δεν μπορεί να ξεπερνά τους 500 χαρακτήρες",
                },
              })}
              placeholder="Πληκτρολόγησε την περιγραφή σου εδώ..."
            ></textarea>
          </div>
          <div className="add-new-product-input__box">
            <input
              {...register("price", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]+$/, // RegExp
                  message: "Only numeric values are allowed", // Custom error message
                },
              })}
              required
            ></input>
            <span>Price</span>
          </div>
          <div className="add-new-product-input__box">
            <input
              type="file"
              accept="image/*"
              {...register("img", {
                required: "This field is required",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                  handleImageUpload(event);
                },
              })}
              required
            ></input>
          </div>
          <DropDownList options={options} />
          <button type="submit" onClick={() => showPopup()}>
            Submit
          </button>
        </form>

        {selectedImage && (
          <div className="add-new-img__container">
            <img src={selectedImage}></img>
          </div>
        )}
      </div>
    </>
  );
}
