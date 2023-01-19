import Menu from "../header/Menu";
import Fcss from './Footer.module.css';

const Footer = ()=>{
    return (
        <>
        <footer style={/iPhone|iPad|iPod/i.test(navigator.userAgent) ? {height:'90px'} : {height:'70px'}} className={Fcss.menuMobile}>
            <Menu/>
        </footer>
        </>
    )
};

export default Footer;