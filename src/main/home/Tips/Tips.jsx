import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Style from '../../../styles/Home/Tips/Tips.module.css';
import Section from '../../../components/Section/Section';
import Back from '../../../components/Back/Back';

const Tips = () => {
    const [t] = useTranslation();
    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>{t('HT-title')}</title>
                    <meta name="description" content={t('HT-description')}></meta>
                    <link rel="canonical" href="https://fast-type-red.vercel.app/tips"/>
                    <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
                    <meta name="keywords" content="Советы по слепой печати, Слепая печать, Что такое слепая печать, Лучшие способы слепой печати, Tips for blind typing, Blind typing, What is blind typing, The best ways to print blindly"></meta>
                    <meta name="apple-mobile-web-app-title" content={t('HT-title')}></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={t('HT-title')}></meta>
                    <meta property="og:description" content={t('HT-description')}></meta>
                    <meta property="og:image" content="../../../../public/img/logo.png"></meta>
                    <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
                </Helmet>
            </HelmetProvider>

            <Section>
                <Back/>
                <h1>{t('H-Help')}</h1>
                <div className={`${Style.tipsBlockTip} ${Style.tipsRed}`}>
                    <h3>1. {t('HT-first')}</h3>
                </div>
                <p className={Style.tipsAnswer}>{t('HT-firstAnswer')}</p>
                <div className={`${Style.tipsBlockTip} ${Style.tipsCreamPurple}`}>
                    <h3>2. {t('HT-second')}</h3>
                </div>
                <p className={Style.tipsAnswer}>{t('HT-secondAnswer')}</p>
                <div className={`${Style.tipsBlockTip} ${Style.tipsViolet}`}>
                    <h3>3. {t('HT-third')}</h3>
                </div>
                <p className={Style.tipsAnswer}>{t('HT-thirdAnswer1')} <br/>
                {t('HT-thirdAnswer2')} <br/>
                {t('HT-thirdAnswer3')} <br/>
                <b>{t('HT-thirdAnswer4')}</b>
                </p>
                <img className={Style.tipsKlava} width={600} src='./img/home/Guids/keyboard.svg' alt="Keyboard place"/>
                <div className={`${Style.tipsBlockTip} ${Style.tipsOrange}`}>
                    <h3>4. {t('HT-four')}</h3>
                </div>
                <p className={Style.tipsAnswer}>{t('HT-fourAnswer')}
                </p>
                <div className={`${Style.tipsBlockTip} ${Style.tipsCream}`}>
                    <h3>5. {t('HT-five')}</h3>
                </div>
                <p className={Style.tipsAnswer}>
                {t('HT-fiveAnswer')}
                </p>
                <div className={`${Style.tipsBlockTip} ${Style.tipsYellow}`}>
                    <h3>6. {t('HT-six')}</h3>
                </div>
                <p className={Style.tipsAnswer}>
                {t('HT-sixAnswer')}
                </p>
                <div className={`${Style.tipsBlockTip} ${Style.tipsBlue}`}>
                    <h3>7. {t('HT-seven')}</h3>
                </div>
                <p className={Style.tipsAnswer}>
                {t('HT-sevenAnswer')}
                </p>
            </Section>
        </main>
    );
};


export default Tips;