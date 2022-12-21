import Menu from "../header/Menu";
import Fcss from './Footer.module.css';

const Footer = ()=>{
    return (
        <>
        <footer className={Fcss.menuMobile}>
            <Menu/>
        </footer>
        </>
    )
};

export default Footer;