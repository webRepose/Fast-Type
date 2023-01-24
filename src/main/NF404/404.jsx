import {Link } from "react-router-dom";
import Style from '../../styles/NF404/NF404.module.css';
import { useTranslation } from "react-i18next";
import Section from "../../components/Section/Section";

const NF404 = () => {
    const [t] = useTranslation();
    return (
        <main>
            <Section>
                <div className={Style.notFoundMain}>
                <div className={Style.notFound}>
                <h3>{t('NF-lost')}</h3>
                <img src="../../../../../img/404/404.webp" alt="404"/>
                <p>{t('NF-find')}</p>
                <Link to='/'>
                    <button title={t('NF-gohome')}>
                    {t('NF-home')}
                    </button>
                </Link>
                </div>
                </div>
            </Section>
        </main>
    );
};

export default NF404;