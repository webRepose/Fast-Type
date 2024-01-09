import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Style from "../../../../styles/Home/History/HistoryID/HistoryID.module.css";
import Meta from "../../../../components/Meta";
import Section from "../../../../components/Section";
import GreenButton from "../../../../components/UI/Buttons/GreenButton";
import Back from "../../../../components/Back";

const HistoryID = () => {
  const [t] = useTranslation();
  const { id } = useParams();
  const res = JSON.parse(localStorage.getItem("HistoryData"));
  const dataArray = Object.values(res[id]);
  dataArray.splice(7, 2);
  dataArray.push(dataArray[3]);
  dataArray.splice(3, 1);

  const imgArray = [
    "../img/home/History/HistoryID/langHis.svg",
    "../img/home/History/section.svg",
    "../img/home/History/HistoryID/modeHis.svg",
    "../img/home/History/HistoryID/wordsHis.svg",
    "../img/home/History/HistoryID/font.svg",
    "../img/home/History/HistoryID/errorHis.svg",
    "../img/home/History/HistoryID/correct.svg",
    "../img/home/History/HistoryID/timeHis.svg",
  ];
  const langTrans = dataArray[1] === "text" ? "HH-lang" : "HH-lp";

  const nameArray = [
    langTrans,
    "HH-section",
    "HH-mode",
    "HHH-countWords",
    "HHH-countSymbols",
    "HHH-countErrors",
    "HHH-correct",
    "HHH-forTime",
  ];

  return (
    <main>
      <Meta
        title={t("HHH-title")}
        canon={"history"}
        description={""}
        keywords={""}
      />
      <Section>
        <Back />
        <h1>{t("H-Stat")}</h1>
        <div className={Style.hisBlockDate}>
          <h4>
            <img src="../img/home/History/HistoryID/date.svg" alt="icon" />{" "}
            {t("HHH-data")}
          </h4>
          <p>
            {res[id].times} <span> || </span> {res[id].timesNow}
          </p>
        </div>
        <div className={Style.hisData}>
          {dataArray.map((data, id) => (
            <div key={id} className={Style.hisDataBlock}>
              <h4>
                <img src={imgArray[id]} alt="icons" />
                {t(nameArray[id])}
              </h4>
              <p>
                {t(data) !== "text"
                  ? id === 6
                    ? t(data) + "%"
                    : t(data)
                  : t(data)
                  ? t("HH-text")
                  : t("HH-code")}
              </p>
            </div>
          ))}
        </div>
        <Link title={t("TIS-back")} to="/history">
          <GreenButton>{t("TIS-back")}</GreenButton>
        </Link>
      </Section>
    </main>
  );
};

export default HistoryID;
