import { useTranslation } from "react-i18next";
import Style from "../../../styles/Home/Feedback/Feedback.module.css";
import Back from "../../../components/Back";
import Section from "../../../components/Section";
import Meta from "../../../components/Meta";

const Feedback = () => {
  const [t] = useTranslation();

  return (
    <main>
      <Meta
        title={t("Feedback")}
        canon={"feedback"}
        description={""}
        keywords={""}
      />
      <Section>
        <Back />
        <h1>{t("Feedback")}</h1>
        Скоро
      </Section>
    </main>
  );
};

export default Feedback;
