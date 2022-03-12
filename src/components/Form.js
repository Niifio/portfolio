import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import TextSnippetSharpIcon from "@mui/icons-material/TextSnippetSharp";

const Form = () => {
  const [setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_msou5pq",
        "template_yg8xce8",
        form.current,
        "-W1j1NzxMdAjvqGPT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  function loaded() {
    console.log("loaded() triggered.");
  }

  return (
    <form className="form__app" ref={form} onSubmit={sendEmail}>
      <div className="form__app-container">
        <div className="form__inputs">
          <span className="form-icon">
            <PersonIcon className="form-icons" />
          </span>

          <input
            placeholder="First Name"
            className="form__name"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="form__inputs">
          <span className="form-icon">
            <MailIcon className="form-icons" />
          </span>

          <input
            placeholder="Email Address"
            className="form__email"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="form__inputs text-input">
          <span className="form-icon1">
            <TextSnippetSharpIcon className="form-icons" />
          </span>

          <textarea
            placeholder="Message for Me"
            className="form__text"
            name="message"
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
