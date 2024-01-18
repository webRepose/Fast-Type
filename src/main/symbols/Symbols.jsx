import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Style from "../../styles/Main/Text/Text.module.css";
import Section from "../../components/Section";
import Back from "../../components/Back";
import Meta from "../../components/Meta";
import ForPC from "../../components/ForPC";

const Symbols = () => {
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

  const parse = JSON.parse(localStorage.getItem(localObject)),
    [keyboardBool, setKeyboardBool] = useState(false),
    [langBool, setLangBool] = useState(false),
    localPush = () => {
      localStorage.setItem(localObject, JSON.stringify(parse));
    },
    keyboardMenu = (value) => {
      setKeyboardBool((prev) => !prev);
      parse.keyboard = value;
      localPush();
    },
    langMenu = (value) => {
      setLangBool((prev) => !prev);
      parse.lang = value;
      localPush();
    },
    keyboardFunc = () => {
      setKeyboardBool((prev) => !prev);
      setLangBool((prev) => (prev = false));
    },
    langFunc = () => {
      setLangBool((prev) => !prev);
      setKeyboardBool((prev) => (prev = false));
    },
    mobMenu = keyboardBool || langBool ? Style.grid : "";

  const KeyboardsNames = ["Colemak", "Dvorak", "Qwerty"];
  const LangNames = ["English", "Русский", 'Қазақ'];

  const sectionChoice = [
    {
      img: "./img/text/keyboard.svg",
      alt: "Keyboard",
      name: "T-klava",
      buttonTitle: "Ttitle-klava",
      func: keyboardFunc,
      text: parse.keyboard,
    },
    {
      img: "./img/text/language.svg",
      alt: "Lang",
      name: "T-lang",
      buttonTitle: "Ttitle-lang",
      func: langFunc,
      text: parse.lang,
    },
  ];

  return (
    <>
      <main>
        <Meta
          title={t("TS-setting")}
          canon={"symbols"}
          description={t("TS-desc")}
          keywords={
            "Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training"
          }
        />
        <Section>
          <Back />
          {window.innerWidth > 967 ? (
            <>
              <h1>{t("T-options")}</h1>
              <div className={Style.params}>
                <div className={Style.paramsBlock}>
                  {sectionChoice &&
                    sectionChoice.map((data, id) => (
                      <div key={id} className={Style.paramsSub}>
                        <article className={Style.paramsText}>
                          <div className={Style.paramsTextSub}>
                            <img
                              width="21px"
                              height="21px"
                              src={data.img}
                              alt={data.alt}
                            />
                            <p>{t(data.name)}</p>
                          </div>
                        </article>
                        <div>
                          <button
                            title={t(data.buttonTitle)}
                            onClick={data.func}
                            className={Style.paramsSelect}
                          >
                            {t(data.text)}
                          </button>
                        </div>
                      </div>
                    ))}
                  <Link to="./typing">
                    <button title={t("Ttitle-start")} className={Style.Start}>
                      {t("T-start")}
                    </button>
                  </Link>
                </div>
                <div className={`${Style.paramsChoice} ${mobMenu}`}>
                  <div className={Style.paramsChoiceMobile}>
                    {keyboardBool && (
                      <>
                        <p className={Style.blockText}>{t("T-klava")}</p>
                        <ul className={Style.flex}>
                          {KeyboardsNames &&
                            KeyboardsNames.map((data, id) => (
                              <li
                                key={id}
                                title={data}
                                onClick={() => {
                                  keyboardMenu(data);
                                }}
                              >
                                {data}
                              </li>
                            ))}
                        </ul>
                      </>
                    )}

                    {langBool && (
                      <>
                        <p className={Style.blockText}>{t("T-lang")}</p>
                        <ul className={Style.flex}>
                          {LangNames &&
                            LangNames.map((data, id) => (
                              <li
                                key={id}
                                title={data}
                                onClick={() => {
                                  langMenu(data);
                                }}
                              >
                                {data}
                              </li>
                            ))}
                        </ul>
                      </>
                    )}
                    <button
                      onClick={() => {
                        langFunc();
                        setLangBool((prev) => (prev = false));
                      }}
                      className={Style.blockText}
                    >
                      {t("T-close")}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <ForPC />
          )}
        </Section>
      </main>
    </>
  );
};

export default Symbols;
