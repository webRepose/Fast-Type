import { Link } from 'react-router-dom';
import Style from '../styles/Header/Header.module.css';
const Account = () => {
    return (
        <Link to={'/user'}>
        <div className={Style.account}>
            <div className={Style.accountIcon}></div>
            <p className={Style.accountName}>Name</p>
        </div>
        </Link>
    );
};

export default Account;