import Style from '../styles/Header/Account/Account.module.css';
import { Link } from 'react-router-dom';

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