import Style from "../styles/Header/Theme/Theme.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Theme = () => {
  const [t] = useTranslation();
  const htmlDOM = document.querySelector("html");
  if (window.localStorage.getItem("theme") == null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.localStorage.setItem("theme", "dark");
      htmlDOM.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      htmlDOM.classList.add("light");
      window.localStorage.setItem("theme", "light");
    }
  }

  if (window.localStorage.getItem("theme") === "dark") {
    htmlDOM.classList.add("dark");
    htmlDOM.classList.remove("light");
    window.localStorage.setItem("theme", "dark");
  } else {
    htmlDOM.classList.add("light");
    htmlDOM.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  }

  let forState;
  if (localStorage.getItem("theme") === "light") forState = true;
  else forState = false;

  const [pressTheme, setPressTheme] = useState(forState);

  const switchTheme = () => {
    setPressTheme((prev) => !prev);
    if (htmlDOM.classList.contains("dark")) {
      htmlDOM.classList.add("light");
      htmlDOM.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      htmlDOM.classList.add("dark");
      htmlDOM.classList.remove("light");
      window.localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div title={t("changTheme")} className={Style.toggle_switch}>
      <label className={Style.switch_label}>
        <input
          onClick={switchTheme}
          checked={pressTheme ? "checked" : ""}
          readOnly
          type="checkbox"
          className={Style.checkbox}
        />
        <span className={Style.slider}></span>
      </label>
    </div>
  );
};

export default Theme;
