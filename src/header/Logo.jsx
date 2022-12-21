import Style from '../header/Header.module.css';
import { Link } from 'react-router-dom';
const Logo = ()=> {
    return (
        <>
            <Link to="/" className={Style.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="36" viewBox="0 0 40.5 36">
                <path d="M18.75,42l.65-4.1h4.65L28.5,10.1H21.95l-1.65,10H16.05L18.35,6h25.9l-2.3,14.1H37.7l1.6-10H32.75L28.3,37.9h4.65L32.3,42ZM7.7,13l.5-3h6.45l-.5,3ZM6.4,21.25l.5-3h6.45l-.5,3ZM3.75,37.75l.5-3H15.7l-.45,3ZM5.1,29.5l.5-3H17.05l-.5,3Z" transform="translate(-3.75 -6)" fill="#33d74b"/>
            </svg>
            <h2>Fast type</h2>
            </Link>
        </>
    );
};

export default Logo;