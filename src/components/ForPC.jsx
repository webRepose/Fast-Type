import Style from "../styles/Components/ForPC/Forpc.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GreenButton from "./UI/Buttons/GreenButton";

const ForPC = () => {
  const [t] = useTranslation();

  return (
    <div className={Style.pc}>
      <div>
        <h1>{t("TC-only")}</h1>
        <figure className={Style.pcImg}>
          <img src="../../img/main/symbols/pc.png" alt="no avilable" />
        </figure>
        <Link title={t("NF-gohome")} to={"/"}>
          <GreenButton>{t("NF-gohome")}</GreenButton>
        </Link>
      </div>
    </div>
  );
};

export default ForPC;
