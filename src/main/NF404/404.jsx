import {Link } from "react-router-dom";
import Style from '../../styles/NF404/NF404.module.css';
import { useTranslation } from "react-i18next";
import Section from "../../components/Section/Section";
import GreenButton from "../../components/GreenButton/GreenButton";
import Back from "../../components/Back/Back";

const NF404 = () => {
    const [t] = useTranslation();
    return (
        <main>
            <Section>
            <Back/>
                <div className={Style.notFoundMain}>
                <div className={Style.notFound}>
                <h1>{t('NF-lost')}</h1>
                <img src="../../../../../img/404/404.webp" alt="404"/>
                <p>{t('NF-find')}</p>
                <Link to='/'>
                    <GreenButton title={t('NF-gohome')}>
                    {t('NF-home')}
                    </GreenButton>
                </Link>
                </div>
                </div>
            </Section>
        </main>
    );
};

export default NF404;