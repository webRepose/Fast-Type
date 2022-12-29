import {Link } from "react-router-dom";
import Style from './NF404.module.css'
import { useTranslation } from "react-i18next";
function NF404() {
    const [t] = useTranslation();
    return (
        <>
        <main>
            <section className={Style.notFound}>
            <h2>{t('NF-lost')}</h2>
            </section>
            <section className={Style.notFound}>
                <img src="./img/404/404.png" alt="" />
                <p>{t('NF-find')}</p>
                <Link to='/'>
                    <button title={t('NF-gohome')}>
                    {t('NF-home')}
                    </button>
                </Link>
            </section>
        </main>
        </>
    );
};

export default NF404;