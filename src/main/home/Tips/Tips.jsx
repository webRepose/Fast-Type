import Style from '../../../styles/Home/Tips/Tips.module.css';
import { useTranslation } from "react-i18next";
import Section from '../../../components/Section';
import Back from '../../../components/Back';
import Meta from "../../../components/Meta";

const Tips = () => {
    const [t] = useTranslation();
    return (
        <main>
            <Meta title={t('HT-title')} canon={'tips'} description={t('HT-description')} keywords={'Советы по слепой печати, Слепая печать, Что такое слепая печать, Лучшие способы слепой печати, Tips for blind typing, Blind typing, What is blind typing, The best ways to print blindly'} />
            <Section>
                <Back />
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
                <p className={Style.tipsAnswer}>{t('HT-thirdAnswer1')} <br />
                    {t('HT-thirdAnswer2')} <br />
                    {t('HT-thirdAnswer3')} <br />
                    <b>{t('HT-thirdAnswer4')}</b>
                </p>
                <div className={Style.imgpost}>
                    <img className={Style.tipsKlava} width={600} src='./img/home/Guids/keyboard.svg' alt="Keyboard place" />
                </div>
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