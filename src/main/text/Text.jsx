import Style from '../../styles/Text/Text.module.css';
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import Back from '../../components/Back/Back';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Text = () => {
    if(window.localStorage.getItem('klava') === null) localStorage.klava = 'Qwerty';
    if(window.localStorage.getItem('mode') === null) localStorage.mode = 't-time';
    if(window.localStorage.getItem('mode-time') === null) window.localStorage.setItem('mode-time', '60');
    if(window.localStorage.getItem('mode-words') === null) window.localStorage.setItem('mode-words', '50');
    if(window.localStorage.getItem('lange') === null) {
        if(window.localStorage.getItem('i18nextLng') === 'ru') localStorage.lange = 'ru';
        else if(window.localStorage.getItem('i18nextLng') === 'en') localStorage.lange = 'en-US';
    }

    const [t] = useTranslation(),
    blockText = Style.blockText,
    none = Style.none,
    flex = Style.flex,
    [klava, setKlava] = useState(false),
    [lange, setLange] = useState(false),
    [mode, setMode] = useState(false),
    [time, setTime] = useState(false),
    [words, setWords] = useState(false),
    modeClass = mode ?  flex : '',
    modeClassText = mode ?  blockText : none,
    visibleWords = window.localStorage.getItem('mode') !== 't-time' ?  flex : none,
    classVisibleWords = [Style.paramsSub, visibleWords],
    visibleMin = window.localStorage.getItem('mode') === 't-time' ?  flex : none,
    classVisibleMin = [Style.paramsSub, visibleMin],
    timeClass = time ?  flex : '',
    timeClassText = time ?  blockText : none,
    wordsClass = words ?  flex : '',
    wordsClassText = words ?  blockText : none,

    langeClass = lange ?  flex : '',
    langeClassText = lange ?  blockText : none,
    klavaClassAbsolute = klava || lange || mode || time || words ?  Style.grid : '',
    klavaClass = klava ?  flex : '',
    klavaClassText = klava ?  blockText : none,
    ourKlavaClass = [Style.paramsChoice, klavaClassAbsolute];
    if(klava || lange || mode || time || words) document.querySelector('html').style.overflow= 'hidden';
    else document.querySelector('html').style.overflow= '';

    const refKlavaBtn = useRef(),
    refKlavaUl = useRef(),
    refLangeBtn = useRef(),
    refModeBtn = useRef(),
    refTimeBtn = useRef(),
    refWordsBtn = useRef();
    useEffect(()=>{
        let handler = (event)=>{
        if(!refKlavaUl.current.contains(event.target) &&
        !refLangeBtn.current.contains(event.target)  &&
        !refTimeBtn.current.contains(event.target)  &&
        !refWordsBtn.current.contains(event.target)  &&
        !refModeBtn.current.contains(event.target)) {
            setKlava(prev => prev = false);
            setLange(prev => prev = false);
            setMode(prev => prev = false);
            setTime(prev => prev = false);
            setWords(prev => prev = false);
        }

        if(refKlavaBtn.current === true) {
            if(!refKlavaBtn.current.contains(event.target)) {
                setKlava(prev => prev = false);
                setLange(prev => prev = false);
                setMode(prev => prev = false);
                setTime(prev => prev = false);
                setWords(prev => prev = false);
            }
        }
    }
        document.addEventListener('mousedown', handler);
        return ()=> document.removeEventListener('mousedown', handler);
    })

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>{t('T-title')}</title>
                    <meta name="description" content={t('TI-description')}></meta>
                    <link rel="canonical" href="https://fast-type-red.vercel.app/text"/>
                    <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
                    <meta name="keywords" content="???????????????? ???????????? ????????????, ???????????? ????????????, ?????????? ???????????? ????????????, ?????????????? ????????????, ?????????????? ???????????? ????????????, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training"></meta>
                    <meta name="apple-mobile-web-app-title" content={t('T-title')}></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={t('T-title')}></meta>
                    <meta property="og:description" content={t('TI-description')}></meta>
                    <meta property="og:image" content="../../../../public/img/logo.png"></meta>
                    <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
                </Helmet>
            </HelmetProvider>
            <Section>
            <Back/>
            <h1>{t('T-options')}</h1>
            <section className={Style.params}>
                <div className={Style.paramsBlock}>
                    {window.innerWidth >= 920 &&
                                        <div className={Style.paramsSub}>
                                        <div className={Style.paramsText}>
                                            <div className={Style.paramsTextSub}>
                                            <img width='21px' height='21px' src="./img/text/keyboard.svg" alt="keyboard" />
                                        <p>{t('T-klava')}</p>
                                            </div>
                                        </div>
                                        <div>
                                        <button
                                        title={t('Ttitle-klava')} 
                                        ref={refKlavaBtn} 
                                        className={Style.paramsSelect} 
                                        onClick={()=>{
                                        setKlava(prev => !prev)
                                        setLange(prev => prev = false)
                                        setMode(prev => prev = false)
                                        setTime(prev => prev = false)
                                        setWords(prev => prev = false)
                                        }}>{window.localStorage.getItem('klava')}
                                        </button>
                                        </div>
                                    </div>
                                    }
                    {/* lang */}
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                            <div className={Style.paramsTextSub}>
                            <img width='21px' height='21px' src="./img/text/language.svg" alt="language" />
                        <p>{t('T-lang')}</p>
                            </div>
                        </div>
                        <button
                        title={t('Ttitle-lang')}
                        ref={refLangeBtn}
                        onClick={()=>{
                            setLange(prev => !prev)
                            setKlava(prev => prev = false)
                            setMode(prev => prev = false)
                            setTime(prev => prev = false)
                            setWords(prev => prev = false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('lange') === 'en-US' ? 'English' : '??????????????'}
                        </button>
                    </div>
                    {/* mode */}
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                            <div className={Style.paramsTextSub}>
                            <img width='21px' height='21px' src="./img/text/mode.svg" alt="mode" />
                        <p>{t('T-mode')}</p>
                            </div>
                        </div>
                        <button
                            title={t('Ttitle-mode')} 
                            ref={refModeBtn}
                            onClick={()=>{
                            setMode(prev => !prev)
                            setKlava(prev => prev = false)
                            setLange(prev => prev = false)
                            setTime(prev => prev = false)
                            setWords(prev => prev = false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('mode') === 't-time' ?  t('T-onTime') : t('T-onWords')}
                        </button>
                    </div>
                    {/* on time */}
                    <div className={classVisibleMin.join(' ')}>
                        <div className={Style.paramsText}>
                            <div className={Style.paramsTextSub}>
                            <img width='21px' height='21px' src="./img/text/timer.svg" alt="time" />
                        <p>{t('T-time')}</p>
                            </div>
                        </div>
                        <button
                            title={t('Ttitle-time')}
                            ref={refTimeBtn}
                            onClick={()=>{
                            setTime(prev => !prev)
                            setKlava(prev => prev = false)
                            setLange(prev => prev = false)
                            setMode(prev => prev = false)
                            setWords(prev => prev = false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('mode-time') / 60 + ':00'}
                        </button>
                    </div>
                        {/* on words */}
                        <div className={classVisibleWords.join(' ')}>
                        <div className={Style.paramsText}>
                            <div className={Style.paramsTextSub}>
                            <img width='21px' height='21px' src="./img/text/view_list.svg" alt="words" />
                           <p>{t('T-words')}</p>
                            </div>
                        </div>
                        <button
                            title={t('Ttitle-words')}
                            ref={refWordsBtn}
                            onClick={()=>{
                            setWords(prev => !prev)
                            setTime(prev => prev = false)
                            setKlava(prev => prev = false)
                            setLange(prev => prev = false)
                            setMode(prev => prev = false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('mode-words') + ' ' + t('T-counWord')}
                        </button>
                    </div>
                    <Link to='./type'><button title={t('Ttitle-start')} className={Style.Start}>{t('T-start')}</button></Link>
                </div>
                <div className={ourKlavaClass.join(' ')}>
                    <div ref={refKlavaUl} className={Style.paramsChoiceMobile}>
                    <p style={{fontWeight: 'bold'}} className={klavaClassText}>{t('T-klava')}</p>
                    <p style={{fontWeight: 'bold'}} className={langeClassText}>{t('T-lang')}</p>
                    <p style={{fontWeight: 'bold'}} className={modeClassText}>{t('T-mode')}</p>
                    <p style={{fontWeight: 'bold'}} className={timeClassText}>{t('T-time')}</p>
                    <p style={{fontWeight: 'bold'}} className={wordsClassText}>{t('T-words')}</p>
                <ul className={klavaClass}>
                            <li title="Colemak" onClick={()=>{
                                setKlava(prev => prev = false)
                                window.localStorage.setItem('klava', 'Colemak');
                            }}>Colemak</li>
                            <li title="Work-man" onClick={()=>{
                                setKlava(prev => prev = false)
                                window.localStorage.setItem('klava', 'Work-man');
                            }}>Work-man</li>
                            <li title="Qwerty" onClick={()=>{
                                setKlava(prev => prev = false)
                                window.localStorage.setItem('klava', 'Qwerty');
                            }}>Qwerty</li>
                        </ul>
                <ul className={langeClass}>
                            <li title="??????????????" onClick={()=>{
                                setLange(prev => prev = false)
                                window.localStorage.setItem('lange','ru')
                            }}>??????????????</li>
                            <li title="English" onClick={()=>{
                                setLange(prev => prev = false)
                                window.localStorage.setItem('lange','en-US')
                            }}>English</li>
                        </ul>
                <ul className={modeClass}>
                            <li title={t('T-onTime')} onClick={()=>{
                                setMode(prev => prev = false)
                                window.localStorage.setItem('mode', 't-time')
                            }}>{t('T-onTime')}</li>
                            <li title={t('T-onWords')} onClick={()=>{
                                setMode(prev => prev = false)
                                window.localStorage.setItem('mode','t-word')
                            }}>{t('T-onWords')}</li>
                        </ul>
                <ul className={timeClass}>
                            <li title="1:00" onClick={()=>{
                                setTime(prev => prev = false)
                                window.localStorage.setItem('mode-time','60')
                            }}>1:00</li>
                            <li title="3:00" onClick={()=>{
                                setTime(prev => prev = false)
                                window.localStorage.setItem('mode-time','180')
                            }}>3:00</li>
                            <li title="5:00" onClick={()=>{
                                setTime(prev => prev = false)
                                window.localStorage.setItem('mode-time','300')
                            }}>5:00</li>
                        </ul>
                <ul className={wordsClass}>
                            <li title={50 + ' ' + t('T-counWord')} onClick={()=>{
                                setWords(prev => prev = false)
                                window.localStorage.setItem('mode-words','50')
                            }}>50 {t('T-counWord')}</li>
                            <li title={70 + ' ' + t('T-counWord')} onClick={()=>{
                                setWords(prev => prev = false)
                                window.localStorage.setItem('mode-words','70')
                            }}>70 {t('T-counWord')}</li>
                            <li title={100 + ' ' + t('T-counWord')} onClick={()=>{
                                setWords(prev => prev = false)
                                window.localStorage.setItem('mode-words','100')
                            }}>100 {t('T-counWord')}</li>
                        </ul>
                        <button onClick={()=>{
                                setKlava(prev => prev = false)
                                setLange(prev => prev = false)
                                setMode(prev => prev = false)
                                setTime(prev => prev = false)
                                setWords(prev => prev = false)
                        }} className={klavaClassText}>{t('T-close')}</button>
                    </div>
                </div>
            </section>
            </Section>
            
        </main>  
    );
};

export default Text;

