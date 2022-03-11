import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import TextSnippetSharpIcon from "@mui/icons-material/TextSnippetSharp";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const [setData] = useState("");
  // const [verified, setVerified] = useState(false);
  function loaded() {
    console.log("loaded() triggered.");
  }

  return (
    <form
      className="form__app"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className="form__app-container">
        <div className="form__inputs">
          <span className="form-icon">
            <PersonIcon className="form-icons" />
          </span>

          <input
            {...register("firstName")}
            placeholder="First Name"
            className="form__name"
            required
          />
        </div>
        <div className="form__inputs">
          <span className="form-icon">
            <MailIcon className="form-icons" />
          </span>

          <input
            {...register("email")}
            placeholder="Email Address"
            className="form__email"
            required
          />
        </div>
        <div className="form__inputs text-input">
          <span className="form-icon1">
            <TextSnippetSharpIcon className="form-icons" />
          </span>

          <textarea
            {...register("Message")}
            placeholder="Message for Me"
            className="form__text"
            rows="8"
            cols="50"
            required
          />
        </div>
        {/* <p>{data}</p> */}
        <div className="recaptcha">
          <ReCAPTCHA
            sitekey="6LfUH7IeAAAAAIH59SblFKAV1hjUCe-2hH4B02ud"
            data-theme="light"
            onloadCallback={loaded}
          />
        </div>
        <div className="submit-input">
          <input type="Submit" className="form__submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
