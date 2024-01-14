import Style from "../../styles/NF404/NF404.module.css";
import Section from "../../components/Section";
import GreenButton from "../../components/UI/Buttons/GreenButton";
import Back from "../../components/Back";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NF404 = () => {
  const [t] = useTranslation();
  return (
    <main>
      <Section>
        <Back />
        <div className={Style.notFoundMain}>
          <div className={Style.notFound}>
            <h1>{t("NF-lost")}</h1>
            <img
              src="../../../../../../img/404/404-error.webp"
              alt='<a href="https://www.flaticon.com/free-icons/404-error" title="404 error icons">404 error icons created by Freepik - Flaticon</a>'
            />
            <p>{t("NF-find")}</p>
            <Link to="/">
              <GreenButton title={t("NF-gohome")}>{t("NF-home")}</GreenButton>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default NF404;
