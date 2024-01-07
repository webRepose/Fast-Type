import Style from "../styles/Header/Header.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link translate="no" title="Fast Type" to="/" className={Style.logo}>
      <img
        width={"40px"}
        height={"40px"}
        src="../../../../../img/logo.png"
        alt="Logo"
      />
      <h2 translate="no">Fast Type</h2>
    </Link>
  );
};

export default Logo;
