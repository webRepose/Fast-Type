import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import Section from "../../../../components/Section/Section";
import GreenButton from "../../../../components/GreenButton/GreenButton";
import Style from '../../../../styles/Home/History/HistoryID/HistoryID.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Back from "../../../../components/Back/Back";

const HistoryID = () => {
    const [t] = useTranslation();
    const {id} = useParams();
    const res = JSON.parse(localStorage.getItem('HistoryData'));

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>{t('HHH-title')}</title>
                    <link rel="canonical" href="https://fast-type-red.vercel.app/history/"/>
                    <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
                    <meta name="apple-mobile-web-app-title" content={t('HHH-title')}></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={t('HHH-title')}></meta>
                    <meta property="og:image" content="../../../../public/img/logo.png"></meta>
                    <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
                </Helmet>
            </HelmetProvider>
            <Section>
            <Back/>
            <h3>{t('H-Stat')}</h3>
            <div className={Style.hisBlockDate}>
            <h4><img src='../img/home/History/HistoryID/date.svg' alt="icon"/> {t('HHH-data')}</h4>
            <p>{res[id].times} <span> || </span> {res[id].timesNow}</p>
            </div>
            <div className={Style.hisData}>
                <div className={Style.hisDataBlock}>
                    <h4><img src='../img/home/History/HistoryID/modeHis.svg' alt="icon"/> {t('HH-mode')}</h4>
                    <p>{res[id].mode}</p>
                </div>

                <div className={Style.hisDataBlock}>
                    <h4><img src='../img/home/History/HistoryID/wordsHis.svg' alt="icon"/> {t('HHH-countWords')}</h4>
                    <p>{res[id].words}</p>
                </div>

                <div className={Style.hisDataBlock}>
                    <h4><img src='../img/home/History/HistoryID/font.svg' alt="icon"/> {t('HHH-countSymbols')}</h4>
                    <p>{res[id].symbols}</p>
                </div>

                <div className={Style.hisDataBlock}>
                    <h4><img src='../img/home/History/HistoryID/errorHis.svg' alt="icon"/> {t('HHH-countErrors')}</h4>
                    <p>{res[id].errors}</p>
                </div>

                <div className={Style.hisDataBlock}>
                    <h4><img src='../img/home/History/HistoryID/correct.svg' alt="icon"/> {t('HHH-correct')}</h4>
                    <p>{res[id].correct}%</p>
                </div>

                <div className={Style.hisDataBlock}>
                    <h4><img src='../img/home/History/HistoryID/timeHis.svg' alt="icon"/> {t('HHH-forTime')}</h4>
                    <p>{res[id].timer} {t('TR-min')}</p>
                </div>
            </div>
            <Link title={t('TIS-back')} to='/history'><GreenButton>{t('TIS-back')}</GreenButton></Link>
            </Section>
        </main>
    );
};

export default HistoryID;