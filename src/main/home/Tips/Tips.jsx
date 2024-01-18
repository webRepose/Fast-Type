import Style from "../../../styles/Home/Tips/Tips.module.css";
import { useTranslation } from "react-i18next";
import Section from "../../../components/Section";
import Back from "../../../components/Back";
import Meta from "../../../components/Meta";

const Tips = () => {
  const [t] = useTranslation();

  const tipsList = [
    { translate: 'HT-first', backColor: Style.tipsRed, answer: 'HT-firstAnswer' },
    { translate: 'HT-second', backColor: Style.tipsCreamPurple, answer: 'HT-secondAnswer' },
    { translate: 'HT-four', backColor: Style.tipsOrange, answer: 'HT-fourAnswer' },
    { translate: 'HT-five', backColor: Style.tipsCream, answer: 'HT-fiveAnswer' },
    { translate: 'HT-six', backColor: Style.tipsYellow, answer: 'HT-sixAnswer' },
    { translate: 'HT-seven', backColor: Style.tipsBlue, answer: 'HT-sevenAnswer' },
  ]
  
  return (
    <main>
      <Meta
        title={t("HT-title")}
        canon={"tips"}
        description={t("HT-description")}
        keywords={
          "Советы по слепой печати, Слепая печать, Что такое слепая печать, Лучшие способы слепой печати, Tips for blind typing, Blind typing, What is blind typing, The best ways to print blindly"
        }
      />
      <Section>
        <Back />
        <h1>{t("H-Help")}</h1>
        <div className={`${Style.tipsBlockTip} ${Style.tipsViolet}`}>
          <h3>1. {t("HT-third")}</h3>
        </div>
        <p className={Style.tipsAnswer}>
          {t("HT-thirdAnswer1")} <br />
          {t("HT-thirdAnswer2")} <br />
          {t("HT-thirdAnswer3")} <br />
          <b>{t("HT-thirdAnswer4")}</b>
        </p>
        <div className={Style.imgpost}>
          <img
            className={Style.tipsKlava}
            width={600}
            src="./img/home/Guids/keyboard.svg"
            alt="Keyboard place"
          />
        </div>
        { tipsList && tipsList.map((data, id) => (
          <div key={id} >
            <div className={`${Style.tipsBlockTip} ${data.backColor}`}>
              <h3>{id+2}. {t(data.translate)}</h3>
            </div>
            <p className={Style.tipsAnswer}>{t(data.answer)}</p>
          </div>
        ))
        }
      </Section>
    </main>
  );
};

export default Tips;
