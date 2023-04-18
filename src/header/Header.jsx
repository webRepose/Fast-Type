import Style from '../styles/Header/Header.module.css';
import { Outlet } from "react-router-dom";
import Menu from './Menu';
import Lang from './Lang';
import Logo from './Logo';
import Theme from './Theme';
import Account from './Account';

const Header = () => {
//     chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     sendResponse({damn: true});
//   });
    return (
        <>
            <header>
                <aside className={Style.menu}>
                    <Logo />
                    <Theme />
                    <Menu />
                    <hr className={Style.stick} />
                    <Lang />
                    <Account />
                </aside>
                <div className={Style.menuMobile}>
                    <Logo />
                    <div style={{ display: 'flex', marginLeft: 'auto' }}>
                        <Theme />
                        <Lang />
                        <Account />
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};
export default Header;