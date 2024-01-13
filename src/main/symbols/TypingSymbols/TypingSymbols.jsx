import Style from "../../../styles/Main/Symbols/Symbols.module.css";
import Meta from "../../../components/Meta";
import Back from "../../../components/Back";
import Section from "../../../components/Section";
import Keyboards from "../../../components/Keyboards/Keyboards";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ForPC from "../../../components/ForPC";

const TypingSymbols = () => {
  const [t] = useTranslation();
  const symbols = {
    keyboard: "Qwerty",
    lang: "English",
  };

  const localObject = "symbols";

  if (
    localStorage.getItem(localObject) === null ||
    localStorage.getItem(localObject) === "{}"
  ) {
    localStorage.setItem(localObject, JSON.stringify(symbols));
  }

  const parse = JSON.parse(localStorage.getItem(localObject));

  const [arr, setArr] = useState([t("TS-enter")]);
  useMemo(() => {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Meta" ||
        e.key === "Backspace" ||
        e.key === "CapsLock" ||
        e.key === "Control" ||
        e.key === "Shift" ||
        e.key === "Tab" ||
        e.key === "Enter" ||
        e.key === "Alt"
      ) {
        return false;
      }
      setArr((current) => [...current, e.key]);
    });
  }, []);

  if (document.getElementsByClassName(Style.onKeyClick).length >= 1) {
    document.getElementById(arr[arr.length - 2].toUpperCase()) &&
      document
        .getElementById(arr[arr.length - 2].toUpperCase())
        .classList.remove(Style.onKeyClick);
  }

  if (document.getElementById(arr[arr.length - 1].toUpperCase())) {
    if (
      document
        .getElementById(arr[arr.length - 1].toUpperCase())
        .classList.contains(Style.onKeyClick) !== true &&
      document.getElementById(arr[arr.length - 1].toUpperCase())
    ) {
      document
        .getElementById(arr[arr.length - 1].toUpperCase())
        .classList.add(Style.onKeyClick);
    }
  }

  let check;
  if (
    arr[arr.length - 1] === "Meta" ||
    arr[arr.length - 1] === "Backspace" ||
    arr[arr.length - 1] === "CapsLock" ||
    arr[arr.length - 1] === "Control" ||
    arr[arr.length - 1] === "Shift" ||
    arr[arr.length - 1] === "Tab" ||
    arr[arr.length - 1] === "Enter" ||
    arr[arr.length - 1] === "Alt" ||
    arr[arr.length - 1] === t("TS-enter")
  ) {
    check = arr[arr.length - 1];
  } else {
    check = arr[arr.length - 1].toUpperCase();
  }

  return (
    <>
      <main>
        <Meta
          title={t("TS-title")}
          canon={"symbols/typing"}
          description={t("TS-desc")}
          keywords={
            "Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training"
          }
        />
        <Section>
          <Back />
          {window.innerWidth > 967 ? (
            <>
              <h1>{t("TI-tyText")}</h1>
              <article className={Style.symbolBlock}>
                <h2>
                  {arr[arr.length - 1] === " " ? "_" : arr[arr.length - 1]}
                </h2>
              </article>
              <article className={Style.symbolInfo}>
                <div className={Style.symbolKey}>
                  <article className={Style.symbolExample}>
                    <p>{check === " " ? "_" : check}</p>
                  </article>
                </div>
                <div className={Style.symbolSlesh}></div>
                <button className={Style.symbolRestart}>
                  <div
                    role="button"
                    title={t("TS-restart")}
                    onClick={() => {
                      if (document.getElementsByClassName(Style.onKeyClick)) {
                        document.getElementById(
                          arr[arr.length - 1].toUpperCase()
                        ) &&
                          document
                            .getElementById(arr[arr.length - 1].toUpperCase())
                            .classList.remove(Style.onKeyClick);
                      }
                      setArr([t("TS-enter")]);
                    }}
                  >
                    <img src="../img/main/symbols/restart.svg" alt="restart" />
                  </div>
                </button>
              </article>
              <Keyboards keyboard={parse.keyboard} lang={parse.lang} />
            </>
          ) : (
            <ForPC />
          )}
        </Section>
      </main>
    </>
  );
};

export default TypingSymbols;
