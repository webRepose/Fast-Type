import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Style from "../../../styles/Home/History/History.module.css";
import Section from "../../../components/Section";
import GreenButton from "../../../components/UI/Buttons/GreenButton";
import Back from "../../../components/Back";
import Meta from "../../../components/Meta";

const History = () => {
  document.querySelector("html").style.overflow = "";
  const [t] = useTranslation();

  const [checkHistory, setChechHistory] = useState(null);
  useEffect(() => {
    setChechHistory(
      (prev) => (prev = JSON.parse(localStorage.getItem("HistoryData")))
    );
  }, []);

  const clear = () => {
    const conf = window.confirm(t("HH-confirm"));
    if (conf === true) {
      window.localStorage.removeItem("HistoryData");
      window.location.reload();
    }
  };

  return (
    <main>
      <Meta
        title={t("HH-title")}
        canon={"history"}
        description={t("TI-description")}
        keywords={
          "Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training"
        }
      />
      <Section>
        <Back />
        <h1>{t("H-Hist")}</h1>
        {checkHistory ? (
          <>
            <GreenButton onClick={clear}>{t("HH-clear")}</GreenButton>
            <div className={Style.historyBlock}>
              {checkHistory !== null &&
                checkHistory.map((result, index) => (
                  <Link key={index} to={"./" + index}>
                    <div
                      title={t("HH-tapTo")}
                      key={index}
                      className={Style.historyBlockSub}
                    >
                      <h4 style={{ marginBottom: "10px" }}>
                        <img src="./img/home/History/section.svg" alt="icon" />{" "}
                        {result.section === "text"
                          ? t("HH-text")
                          : t("HH-code")}
                      </h4>
                      <h4>
                        <img
                          src="./img/home/History/HistoryID/modeHis.svg"
                          alt="icon"
                        />{" "}
                        {t("HH-mode")}
                      </h4>
                      <p>{t(result.mode)}</p>
                      <h4>
                        <img
                          src="./img/home/History/HistoryID/timeHis.svg"
                          alt="icon"
                        />{" "}
                        {t("HH-timeInput")}
                      </h4>
                      <p>
                        {result.mode === "C-forWords"
                          ? result.timer
                          : "0" + result.timer}
                      </p>
                      <div className={Style.historyBlockSubTime}>
                        <p>{result.times}</p>
                        <p>{result.timesNow}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </>
        ) : (
          <div className={Style.historyBlockEmpty}>
            <div>
              <h4>{t("HH-empty")}</h4>
              <div className={Style.imgpost}>
                <img
                  src="./img/home/History/Empty1.png"
                  alt='Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'
                />
              </div>
              <h4>{t("HH-tryNow")}</h4>
              <Link to="/text/typing">
                <GreenButton title={t("HH-try")}>{t("HH-try")}</GreenButton>
              </Link>
            </div>
          </div>
        )}
      </Section>
    </main>
  );
};

export default History;
