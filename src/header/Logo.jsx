import Style from '../header/Header.module.css';
import { Link } from 'react-router-dom';
const Logo = ()=> {
    return (
        <>
            <Link to="/" className={Style.logo}>
            <img width={'40px'} height={'40px'} src="./img/logo.png" alt="Logo"/>
            <h2>Fast type</h2>
            </Link>
        </>
    );
};

export default Logo;