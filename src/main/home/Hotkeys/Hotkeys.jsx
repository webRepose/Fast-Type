import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Style from "../../../styles/Home/Hotkeys/Hotkeys.module.css";
import Back from "../../../components/Back";
import Section from "../../../components/Section";
import Meta from "../../../components/Meta";
import Browsers from "./Browsers.json";
import Browsers2 from "./Browsers2.json";
import Windows from "./Windows.json";
import Windows2 from "./Windows2.json";
import M_Word from "./M_Word.json";
import M_Word2 from "./M_Word2.json";
import M_Exel from "./M_Exel.json";
import M_Exel2 from "./M_Exel2.json";
import VSC from "./VSC.json";
import VSC2 from "./VSC2.json";

const Hotkeys = () => {
  const [t] = useTranslation();
  const [window, setWindow] = useState(false);
  const [browsers, setBrowsers] = useState(false);
  const [vsc, setVsc] = useState(false);
  const [word, setWord] = useState(false);
  const [exel, setExel] = useState(false);
  const spoilerRef = useRef();
  const buttonRef = useRef();

  const openCard = (value) => {
    if (value === 0) setWindow((prev) => (prev = true));
    if (value === 1) setBrowsers((prev) => (prev = true));
    if (value === 2) setVsc((prev) => (prev = true));
    if (value === 3) setWord((prev) => (prev = true));
    if (value === 4) setExel((prev) => (prev = true));
  };

  const closeModal = (value, setValue) => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && value === true) {
        setValue((prev) => (prev = false));
        document.querySelector("body").style.overflow = "auto";
      }
    });
  };

  const cards = [
    "Windows",
    "Browsers",
    "Visual Studio Code",
    "MS Word",
    "MS Exel",
  ];

  const spoilerCards = [
    {
      name: "Windows",
      state: window,
      setState: setWindow,
      hotkeys1: Windows,
      hotkeys2: Windows2,
    },
    {
      name: "Browsers",
      state: browsers,
      setState: setBrowsers,
      hotkeys1: Browsers,
      hotkeys2: Browsers2,
    },
    {
      name: "Visual Studio Code",
      state: vsc,
      setState: setVsc,
      hotkeys1: VSC,
      hotkeys2: VSC2,
    },
    {
      name: "MS Word",
      state: word,
      setState: setWord,
      hotkeys1: M_Word,
      hotkeys2: M_Word2,
    },
    {
      name: "MS Exel",
      state: exel,
      setState: setExel,
      hotkeys1: M_Exel,
      hotkeys2: M_Exel2,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        spoilerRef.current &&
        !spoilerRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setWindow((prev) => (prev = false));
        setBrowsers((prev) => (prev = false));
        setWord((prev) => (prev = false));
        setVsc((prev) => (prev = false));
        setExel((prev) => (prev = false));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [buttonRef, spoilerRef]);

  return (
    <>
      <Meta description={""} title={""} canon={""} keywords={""} />
      <main>
        {spoilerCards &&
          spoilerCards.map((data, id) => (
            <div key={id}>
              {data.state && (
                <div className={Style.hotkeys_modal}>
                  {closeModal(data.state, data.setState)}
                  {(document.querySelector("body").style.overflow = "hidden")}
                  <div ref={spoilerRef} className={Style.hotkeys_modal_block}>
                    <button
                      className={Style.hotkeys_modal_block_close}
                      onClick={() => {
                        data.setState((prev) => !prev);
                        document.querySelector("body").style.overflow = "auto";
                      }}
                    >
                      <img
                        width={25}
                        height={25}
                        src="./img/home/Hotkeys/close.svg"
                        alt="close"
                      />
                    </button>
                    <h3 className={Style.hotkeys_modal_block_name}>
                      {data.name}
                    </h3>
                    <div className={Style.hotkeys_modal_block_content}>
                      <div>
                        {data.hotkeys1 &&
                          data.hotkeys1.map((data, i) => (
                            <article key={i}>
                              <p>
                                <b>{data.combine}</b> {data.text}
                              </p>
                            </article>
                          ))}
                      </div>
                      <div>
                        {data.hotkeys2 &&
                          data.hotkeys2.map((data, i) => (
                            <article key={i}>
                              <p>
                                <b>{data.combine}</b> {data.text}
                              </p>
                            </article>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        <Section>
          <Back />
          <h1>Горячие клавиши</h1>
          <div className={Style.hotkeys}>
            <div className={Style.hotkeys_need}>
              <p>
                Горячие клавиши нужны для более удобного и быстрого
                использования ОС или других приложений, они сокращают время
                нашей работы и упрощают повседневные процессы.
              </p>
            </div>
            <div ref={buttonRef} className={Style.hotkeys_blocks}>
              {cards &&
                cards.map((data, id) => (
                  <div
                    key={id}
                    onClick={() => {
                      openCard(id);
                    }}
                  >
                    <h2 className={Style.hotkeys_blocks_title}>{data}</h2>
                    <p>Нажмите что бы открыть!</p>
                  </div>
                ))}
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Hotkeys;
