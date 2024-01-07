import Style from "../styles/Components/Error/Error.module.css";
import Section from "./Section";
import RainbowButton from "./UI/Buttons/RainbowButton";
import { useTranslation } from "react-i18next";

const Error = () => {
  const [t] = useTranslation();
  return (
    <main>
      <Section>
        <div className={Style.errorMobileCenter}>
          <div className={Style.error}>
            <div className={Style.errorText}>
              <p className={Style.errorTextWow}>{t("CE-no")}</p>
              <h2>
                {t("CE-somet")} <br /> <b>{t("CE-gone")}</b> {t("CE-wrong")}
              </h2>
              <p className={Style.errorTextSorry}>{t("CE-sorry")}</p>
              <RainbowButton
                onClick={() => {
                  window.location.reload();
                }}
                title={t("CE-reload")}
              >
                {t("CE-reload")}
              </RainbowButton>
            </div>
            <div>
              <img
                src="../../../../../../../img/Components/Error/error1.png"
                alt='Illustration by <a href="https://icons8.com/illustrations/author/lZpGtGw5182N">Elisabet Guba</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Error;
