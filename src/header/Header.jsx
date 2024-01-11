import { useState } from "react";
import { Outlet } from "react-router-dom";
import Style from "../styles/Header/Header.module.css";
import Menu from "./Menu";
import Lang from "./Lang";
import Logo from "./Logo";
import Theme from "./Theme";
import Account from "./Account";
import LangAbsolute from "./LangAbsolute";

const Header = () => {
  const [lang, setLang] = useState(false);

  return (
    <>
      <div className={Style.basement}>
        {lang && <LangAbsolute setLang={setLang}/>}
        <header>
          <aside className={Style.menu}>
            <Logo />
            <Theme />
            <Menu />
            <hr className={Style.stick} />
            <Lang setLang={setLang} />
            <Account />
          </aside>
          <div className={Style.menuMobile}>
            <Logo />
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Theme />
              <Lang setLang={setLang}/>
              <Account />
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </>
  );
};
export default Header;
