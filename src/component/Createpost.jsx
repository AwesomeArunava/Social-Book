import { useState } from "react";
import { PiCodepenLogo } from "react-icons/pi";

const Createpost = () => {
  const [imagePreview, setImagePreview] = useState();

  const handleImagePreview = (event) => {
    const file = event.target.files[0]; // Corrected typo
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file); // Moved inside the if block
    }
  };

  return (
    <div className="d-flex flex-column align-items-center overflow-y-auto">
      <form className="w-50 ">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Post title
          </label>
          <input
            type="text" // Changed from "email" to "text" for post title
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Post Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <img
          id="preview"
          src={imagePreview}
          alt="Image Preview"
          className="mb-3"
          style={{
            display: imagePreview ? "block" : "none",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />

        <div className="d-flex mb-3">
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImagePreview}
          />
          <button type="button">Upload</button> {/* Added type="button" */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createpost;
