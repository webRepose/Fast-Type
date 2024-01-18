import Style from "../../../styles/Home/Guids/Guids.module.css";
import Section from "../../../components/Section";
import Back from "../../../components/Back";
import Meta from "../../../components/Meta";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Guids = () => {
  const [blindTog, setBlindTog] = useState(false),
    [whatTog, setWhatTog] = useState(false),
    [forneedTog, setForneedTog] = useState(false),
    [noforneedTog, setNoForneedTog] = useState(false),
    [fingerTog, setFingerTog] = useState(false),
    [someNeedTog, setSomeNeedTog] = useState(false),
    [speedTypeTog, setSpeedTypeTog] = useState(false),
    [t] = useTranslation();

  const lazureAns = [
    { translate: "HG-disadvantagesFirst", class: Style.guideLeft },
    { translate: "HG-disadvantagesSecond", class: Style.guideRight },
    { translate: "HG-disadvantagesThird", class: Style.guideLeft },
    { translate: "HG-disadvantagesFour", class: Style.guideRight },
  ];

  const purpleAns = [
    { translate: "HG-advantagesFirst", class: Style.guideLeft },
    { translate: "HG-advantagesSecond", class: Style.guideRight },
    { translate: "HG-advantagesThird", class: Style.guideLeft },
    { translate: "HG-advantagesFour", class: Style.guideRight },
    { translate: "HG-advantagesFive", class: Style.guideLeft },
  ];

  const DarkBlueAns = [
    { translate: "HG-blindNeedFirst", class: Style.guideLeft },
    { translate: "HG-blindNeedSecond", class: Style.guideRight },
    { translate: "HG-blindNeedThird", class: Style.guideLeft },
    { translate: "HG-blindNeedFour", class: Style.guideRight },
    { translate: "HG-blindNeedFive", class: Style.guideLeft },
    { translate: "HG-blindNeedSix", class: Style.guideRight },
  ];

  return (
    <main>
      <Meta
        title={t("HG-title")}
        canon={"answers"}
        description={t("HG-description")}
        keywords={
          "Советы по слепой печати, Слепая печать, Что такое слепая печать, Лучшие способы слепой печати, Tips for blind typing, Blind typing, What is blind typing, The best ways to print blindly"
        }
      />
      <Section>
        <Back />
        <h1>{t("HG-answer")}</h1>
        <div className={`${Style.guideClick} ${Style.guideCream}`}>
          <button
            onClick={() => {
              setBlindTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-whatsBlind")}
          </button>
        </div>
        {blindTog && (
          <div
            className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideCream}`}
          >
            <h4>{t("HG-blindIt")}</h4>
          </div>
        )}

        <div className={`${Style.guideClick} ${Style.guideRed}`}>
          <button
            onClick={() => {
              setWhatTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-blindFor")}
          </button>
        </div>
        {whatTog && (
          <div
            className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideRed}`}
          >
            <h4>{t("HG-blindForIt")}</h4>
          </div>
        )}

        <div className={`${Style.guideClick} ${Style.guideViolet}`}>
          <button
            onClick={() => {
              setForneedTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-advantages")}
          </button>
        </div>
        {forneedTog && (
          <>
            {purpleAns &&
              purpleAns.map((data, id) => (
                <div
                  key={id}
                  className={`${Style.guideAnswer} ${data.class} ${Style.guideViolet}`}
                >
                  <h4>{t(data.translate)}</h4>
                </div>
              ))}
          </>
        )}

        <div className={`${Style.guideClick} ${Style.guideLazure}`}>
          <button
            onClick={() => {
              setNoForneedTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-disadvantages")}
          </button>
        </div>
        {noforneedTog && (
          <>
            {lazureAns &&
              lazureAns.map((data, id) => (
                <div
                  key={id}
                  className={`${Style.guideAnswer} ${data.class} ${Style.guideLazure}`}
                >
                  <h4>{t(data.translate)}</h4>
                </div>
              ))}
          </>
        )}

        <div className={`${Style.guideClick} ${Style.guideBorde}`}>
          <button
            onClick={() => {
              setFingerTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-finger")}
          </button>
        </div>
        {fingerTog && (
          <>
            <div
              className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideBorde}`}
            >
              <h4>{t("HG-fingerUse")}</h4>
            </div>
          </>
        )}

        <div className={`${Style.guideClick} ${Style.guideDarkBlue}`}>
          <button
            onClick={() => {
              setSomeNeedTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-blindNeed")}
          </button>
        </div>
        {someNeedTog && (
          <>
            {DarkBlueAns &&
              DarkBlueAns.map((data, id) => (
                <div
                  key={id}
                  className={`${Style.guideAnswer} ${data.class} ${Style.guideDarkBlue}`}
                >
                  <h4>{t(data.translate)}</h4>
                </div>
              ))}
          </>
        )}

        <div className={`${Style.guideClick} ${Style.guideCreamPurple}`}>
          <button
            onClick={() => {
              setSpeedTypeTog((prev) => !prev);
            }}
            title={t("HG-clickTo")}
          >
            {t("HG-blindSpeed")}
          </button>
        </div>
        {speedTypeTog && (
          <>
            <div
              className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideCreamPurple}`}
            >
              <h4>{t("HG-blindSpeedMiddleTwo")}</h4>
            </div>
            <div
              className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideCreamPurple}`}
            >
              <h4>{t("HG-blindSpeedMiddleTen")}</h4>
            </div>
          </>
        )}
      </Section>
    </main>
  );
};

export default Guids;
