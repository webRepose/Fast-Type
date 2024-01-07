import Menu from "../header/Menu";
import Style from "../styles/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer
      style={
        /iPhone|iPad|iPod/i.test(navigator.userAgent)
          ? { height: "70px" }
          : { height: "60px" }
      }
      className={Style.menuMobile}
    >
      <Menu />
    </footer>
  );
};

export default Footer;
