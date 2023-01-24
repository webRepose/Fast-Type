import Style from '../styles/Header/Header.module.css';
const Account = () => {
    return (
        <>
        <div className={Style.account}>
            <div className={Style.accountIcon}></div>
            <p className={Style.accountName}>Аккаунт</p>
        </div>
        </>
    );
};

export default Account;