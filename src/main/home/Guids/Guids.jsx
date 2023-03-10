import Section from '../../../components/Section/Section';
import Back from '../../../components/Back/Back';
import Style from '../../../styles/Home/Guids/Guids.module.css';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Guids = () => {
    const [blindTog, setBlindTog] = useState(false),
    [whatTog, setWhatTog] = useState(false),
    [forneedTog, setForneedTog] = useState(false),
    [noforneedTog, setNoForneedTog] = useState(false),
    [fingerTog, setFingerTog] = useState(false),
    [someNeedTog, setSomeNeedTog] = useState(false),
    [speedTypeTog, setSpeedTypeTog] = useState(false),
    [t] = useTranslation();

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>{t('HG-title')}</title>
                    <meta name="description" content={t('HG-description')}></meta>
                    <link rel="canonical" href="https://fast-type-red.vercel.app/answers"/>
                    <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
                    <meta name="keywords" content="Советы по слепой печати, Слепая печать, Что такое слепая печать, Лучшие способы слепой печати, Tips for blind typing, Blind typing, What is blind typing, The best ways to print blindly"></meta>
                    <meta name="apple-mobile-web-app-title" content={t('HG-title')}></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={t('HG-title')}></meta>
                    <meta property="og:description" content={t('HG-description')}></meta>
                    <meta property="og:image" content="../../../../public/img/logo.png"></meta>
                    <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
                </Helmet>
            </HelmetProvider>
            <Section>
            <Back/>
            <h1>{t('HG-answer')}</h1>
            <div className={`${Style.guideClick} ${Style.guideCream}`}>
                <button onClick={()=>{
                    setBlindTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-whatsBlind')}</button>
            </div>
            {blindTog && 
                <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideCream}`}>
                    <h4>{t('HG-blindIt')}</h4>
                </div>
            }

            <div className={`${Style.guideClick} ${Style.guideRed}`}>
                <button onClick={()=>{
                    setWhatTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-blindFor')}</button>
            </div>
            {whatTog && 
                <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideRed}`}>
                    <h4>{t('HG-blindForIt')}</h4>
                </div>
            }

            <div className={`${Style.guideClick} ${Style.guideViolet}`}>
                <button onClick={()=>{
                    setForneedTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-advantages')}</button>
            </div>
            {forneedTog && 
                <>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideViolet}`}>
                        <h4>{t('HG-advantagesFirst')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideViolet}`}>
                        <h4>{t('HG-advantagesSecond')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideViolet}`}>
                        <h4>{t('HG-advantagesThird')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideViolet}`}>
                        <h4>{t('HG-advantagesFour')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideViolet}`}>
                        <h4>{t('HG-advantagesFive')}</h4>
                    </div>
                </>
            }

            <div className={`${Style.guideClick} ${Style.guideLazure}`}>
                <button onClick={()=>{
                    setNoForneedTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-disadvantages')}</button>
            </div>
            {noforneedTog && 
                <>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideLazure}`}>
                        <h4>{t('HG-disadvantagesFirst')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideLazure}`}>
                        <h4>{t('HG-disadvantagesSecond')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideLazure}`}>
                        <h4>{t('HG-disadvantagesThird')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideLazure}`}>
                        <h4>{t('HG-disadvantagesFour')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideLazure}`}>
                        <h4>{t('HG-disadvantagesFive')}</h4>
                    </div>
                </>
            }

            <div className={`${Style.guideClick} ${Style.guideBorde}`}>
                <button onClick={()=>{
                    setFingerTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-finger')}</button>
            </div>
            {fingerTog && 
                <>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideBorde}`}>
                        <h4>{t('HG-fingerUse')}</h4>
                    </div>
                </>
            }

            <div className={`${Style.guideClick} ${Style.guideDarkBlue}`}>
                <button onClick={()=>{
                    setSomeNeedTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-blindNeed')}</button>
            </div>
            {someNeedTog && 
                <>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideDarkBlue}`}>
                        <h4>{t('HG-blindNeedFirst')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideDarkBlue}`}>
                        <h4>{t('HG-blindNeedSecond')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideDarkBlue}`}>
                        <h4>{t('HG-blindNeedThird')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideDarkBlue}`}>
                        <h4>{t('HG-blindNeedFour')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideDarkBlue}`}>
                        <h4>{t('HG-blindNeedFive')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideDarkBlue}`}>
                        <h4>{t('HG-blindNeedSix')}</h4>
                    </div>
                </>
            }

            <div className={`${Style.guideClick} ${Style.guideCreamPurple}`}>
                <button onClick={()=>{
                    setSpeedTypeTog(prev => !prev)
                }} title={t('HG-clickTo')}>{t('HG-blindSpeed')}</button>
            </div>
            {speedTypeTog && 
                <>
                    <div className={`${Style.guideAnswer} ${Style.guideLeft} ${Style.guideCreamPurple}`}>
                        <h4>{t('HG-blindSpeedMiddleTwo')}</h4>
                    </div>
                    <div className={`${Style.guideAnswer} ${Style.guideRight} ${Style.guideCreamPurple}`}>
                        <h4>{t('HG-blindSpeedMiddleTen')}</h4>
                    </div>
                </>
            }
            </Section>
        </main>
    );
};

export default Guids;