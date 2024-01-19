import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Style from "../../../styles/Home/Feedback/Feedback.module.css";
import Back from "../../../components/Back";
import Section from "../../../components/Section";
import Meta from "../../../components/Meta";
import Email from "./Email";

const Feedback = () => {
  const [t] = useTranslation();

  const socialList = [
    {
      to: "https://t.me/just_a_machine",
      img: "./img/home/Feedback/telegram.webp",
      name: "Telegram",
    },
    {
      to: "https://wa.me/77075775124?text=",
      img: "./img/home/Feedback/whatsapp.webp",
      name: "Whatsapp",
    },
    {
      to: "https://vk.com/mnmmmh",
      img: "./img/home/Feedback/vk.webp",
      name: "VKontakte",
    },
    {
      to: "tel:+7 707 577 51 24",
      img: "./img/home/Feedback/phones.webp",
      name: "+7 707 577 51 24",
    },
  ];

  return (
    <main>
      <Meta
        title={t("Feedback") + " | Fast Type"}
        canon={"feedback"}
        description={""}
        keywords={
          "Fast Type support, fast type tech support, fast type feedback, feedback Fast Type, Обратная связь Фаст тайп, Контакты fast type"
        }
      />
      <Section>
        <Back />
        <h1>{t("Feedback")}</h1>
        <Email />
        <div className={Style.social}>
          <h3>{t("HF-social")}</h3>
          <div className={Style.social_display}>
            {socialList &&
              socialList.map((data, id) => (
                <Link key={id} target="_blank" to={data.to}>
                  <button title={data.name} className={Style.social_block}>
                    <div className={Style.social_block_img}>
                      <img width={24} src={data.img} alt="data img" />
                    </div>
                    <h4>{data.name}</h4>
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Feedback;
