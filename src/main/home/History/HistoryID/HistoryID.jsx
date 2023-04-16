import Style from '../../../../styles/Home/History/HistoryID/HistoryID.module.css';
import Meta from '../../../../components/Meta';
import Section from "../../../../components/Section";
import GreenButton from "../../../../components/UI/Buttons/GreenButton";
import Back from "../../../../components/Back";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const HistoryID = () => {
    const [t] = useTranslation();
    const { id } = useParams();
    const res = JSON.parse(localStorage.getItem('HistoryData'));

    return (
        <main>
            <Meta title={t('HHH-title')} canon={'history'} description={''} keywords={''} />
            <Section>
                <Back />
                <h1>{t('H-Stat')}</h1>
                <div className={Style.hisBlockDate}>
                    <h4>
                        <img src='../img/home/History/HistoryID/date.svg' alt="icon" /> {t('HHH-data')}</h4>
                    <p>{res[id].times} <span> || </span> {res[id].timesNow}</p>
                </div>
                <div className={Style.hisData}>
                    <div className={Style.hisDataBlock}>
                        <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 21 21">
                                <path d="M12.334,25l4.3-12.6h1.948L23,25H20.933l-.974-3.307H15.4L14.282,25Zm3.587-5.145h3.373l-1.663-5.093h-.048ZM4.851,21.85,3.544,20.406,8.39,15.051a22.959,22.959,0,0,1-1.6-2.323A18.465,18.465,0,0,1,5.563,10.3H7.63a14.919,14.919,0,0,0,.891,1.641q.487.774,1.1,1.588a14.134,14.134,0,0,0,1.782-2.559A18.814,18.814,0,0,0,12.619,8.2H2V6.1H8.652V4h1.9V6.1H17.2V8.2H14.519a21.193,21.193,0,0,1-1.39,3.557A18.467,18.467,0,0,1,11,15.077l2.328,2.6L12.619,19.8,9.6,16.6Z" transform="translate(-2 -4)" fill="#33d74b"></path>
                            </svg>{res[id].section === 'text' ? ` ${t('HH-lang')}:` : ` ${t('HH-lp')}:`}</h4>
                        <p>{res[id].lang}</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/section.svg' alt="icon" /> {t('HH-section')}</h4>
                        <p>{res[id].section === 'text' ? t('HH-text') : t('HH-code')}</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/HistoryID/modeHis.svg' alt="icon" /> {t('HH-mode')}</h4>
                        <p>{t(res[id].mode)}</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/HistoryID/wordsHis.svg' alt="icon" /> {t('HHH-countWords')}</h4>
                        <p>{res[id].words}</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/HistoryID/font.svg' alt="icon" /> {t('HHH-countSymbols')}</h4>
                        <p>{res[id].symbols}</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/HistoryID/errorHis.svg' alt="icon" /> {t('HHH-countErrors')}</h4>
                        <p>{res[id].errors}</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/HistoryID/correct.svg' alt="icon" /> {t('HHH-correct')}</h4>
                        <p>{res[id].correct}%</p>
                    </div>

                    <div className={Style.hisDataBlock}>
                        <h4><img src='../img/home/History/HistoryID/timeHis.svg' alt="icon" /> {t('HHH-forTime')}</h4>
                        <p>{res[id].timer}</p>
                    </div>
                </div>
                <Link title={t('TIS-back')} to='/history'><GreenButton>{t('TIS-back')}</GreenButton></Link>
            </Section>
        </main>
    );
};

export default HistoryID;