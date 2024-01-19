import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Style from "../../../styles/Home/Feedback/Email/Email.module.css";

const Email = () => {
  const [t] = useTranslation();
  const captchaLocal = process.env.REACT_APP_API_RECAPTCHA_KEY_LOCAL;
  const captchaOutside = process.env.REACT_APP_API_RECAPTCHA_KEY_OUTSIDE;
  const form = useRef(null);
  const recaptchaRef = useRef(null);
  const [valueEmail, setValueEmail] = useState("");
  const [valueMess, setValueMess] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const Reset = (e) => {
    e.target.reset();
    setValueEmail((prev) => (prev = ""));
    setValueMess((prev) => (prev = ""));
    recaptchaRef.current.reset();
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if ((valueEmail.length && valueMess.length) < 5) {
      alert(t("HF-correct"));
      return false;
    } else if ((valueEmail.length && valueMess.length) > 250) {
      alert(t("HF-less"));
      return false;
    }

    if (recaptchaValue.length <= 0) {
      alert(t("HF-pass"));
      return false;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAILJS_KEY
    );

    Reset(e);
    alert(t("HF-succes"));
  };

  const inputData = [
    {
      placeholder: "Example@gmail.com",
      type: "email",
      name: "user_email",
      img: "./img/home/Feedback/email.svg",
      value: valueEmail,
      set: setValueEmail,
    },
    {
      placeholder: t("HF-prob"),
      type: "text",
      name: "message",
      img: "./img/home/Feedback/mess.svg",
      value: valueMess,
      set: setValueMess,
    },
  ];

  return (
    <div className={Style.form}>
      <h3>{t("HF-sup")}</h3>
      <form ref={form} onSubmit={sendEmail}>
        {inputData &&
          inputData.map((data, id) => (
            <div key={id} className={Style.form_input_block}>
              <div className={Style.form_input_block_img}>
                <img width={22} src={data.img} alt="data img" />
              </div>
              <input
                required
                value={data.value}
                placeholder={data.placeholder}
                type={data.type}
                name={data.name}
                onChange={(e) => {
                  data.set((prev) => (prev = e.target.value));
                }}
              />
            </div>
          ))}
        <ReCAPTCHA
          style={{ margin: "15px auto" }}
          ref={recaptchaRef}
          hl={t('HF-capLang')}
          theme={document.querySelector('html').getAttribute('class')}
          sitekey={
            window.location.hostname === "localhost"
              ? captchaLocal
              : captchaOutside
          }
          onChange={handleRecaptchaChange}
        />
        <button title={t("HF-send")} type="submit">
          {t("HF-send")}
        </button>
      </form>
    </div>
  );
};

export default Email;
