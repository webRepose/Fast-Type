import Style from "./Text.module.css"
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

function Text() {
    const [t] = useTranslation();
    document.title = t('T-title');
    const [klava, setKlava] = useState(false);
    const [lange, setLange] = useState(false);
    const [mode, setMode] = useState(false);
    const [time, setTime] = useState(false);
    const [words, setWords] = useState(false);

    const visibleWords = window.localStorage.getItem('mode') !== 't-time' ?  'flex' : 'none';
    const classVisibleWords = [Style.paramsSub, visibleWords]
    const visibleMin = window.localStorage.getItem('mode') === 't-time' ?  'flex' : 'none';
    const classVisibleMin = [Style.paramsSub, visibleMin]

    const timeClass = time ?  'flex' : '';
    const timeClassText = time ?  'blockText' : 'none';

    const wordsClass = words ?  'flex' : '';
    const wordsClassText = words ?  'blockText' : 'none';

    const modeClass = mode ?  'flex' : '';
    const modeClassText = mode ?  'blockText' : 'none';

    const langeClass = lange ?  'flex' : '';
    const langeClassText = lange ?  'blockText' : 'none';

    const klavaClassAbsolute = klava || lange || mode || time || words ?  'grid' : '';
    const klavaClass = klava ?  'flex' : '';
    const klavaClassText = klava ?  'blockText' : 'none';

    const ourKlavaClass = [Style.paramsChoice, klavaClassAbsolute]
    if(klava || lange || mode || time || words) {
        document.querySelector('html').style.overflow= 'hidden'
    } else {
        document.querySelector('html').style.overflow= ''
    } 
    if(window.localStorage.getItem('klava') === null) {
       window.localStorage.setItem('klava', 'Qwerty');
    }
    if(window.localStorage.getItem('mode-time') === null) {
        window.localStorage.setItem('mode-time', '1:00');
    }
    if(window.localStorage.getItem('mode-words') === null) {
        window.localStorage.setItem('mode-words', '50');
    }
    if(window.localStorage.getItem('mode') === null) {
        window.localStorage.setItem('mode', 't-time');
    }
    if(window.localStorage.getItem('lange') === null) {
        if(window.localStorage.getItem('i18nextLng') === 'ru') {
            window.localStorage.setItem('lange', 'Русский');
        } else if(window.localStorage.getItem('i18nextLng') === 'en') {
            window.localStorage.setItem('lange', 'English');
        }
    }

    let refKlavaBtn = useRef()
    let refKlavaUl = useRef()
    let refLangeBtn = useRef()
    let refModeBtn = useRef()
    let refTimeBtn = useRef()
    let refWordsBtn = useRef()
    useEffect(()=>{
        let handler = (event)=>{
        if(!refKlavaUl.current.contains(event.target) &&
        !refKlavaBtn.current.contains(event.target) && 
        !refLangeBtn.current.contains(event.target)  &&
        !refTimeBtn.current.contains(event.target)  &&
        !refWordsBtn.current.contains(event.target)  &&
        !refModeBtn.current.contains(event.target)) {
            setKlava(false);
            setLange(false);
            setMode(false);
            setTime(false);
            setWords(false)
        }
    }
        document.addEventListener('mousedown', handler)
        return ()=>{
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <>
        <main>
            <section className={Style.choiceParams}>
                <h3>{t('T-options')}</h3>
            </section>
            <section className={Style.params}>
                <div className={Style.paramsBlock}>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>{t('T-klava')}</p>
                        </div>
                        <div>
                        <button
                        title={t('Ttitle-klava')} 
                        ref={refKlavaBtn} 
                        className={Style.paramsSelect} 
                        onClick={()=>{
                        setKlava(prev => !prev)
                        setLange(false)
                        setMode(false)
                        setTime(false)
                        setWords(false)
                        }}>{window.localStorage.getItem('klava')}
                        </button>
                        </div>
                    </div>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>{t('T-lang')}</p>
                        </div>
                        <button
                        title={t('Ttitle-lang')}
                        ref={refLangeBtn}
                        onClick={()=>{
                            setLange(prev => !prev)
                            setKlava(false)
                            setMode(false)
                            setTime(false)
                            setWords(false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('lange')}
                        </button>
                    </div>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>{t('T-mode')}</p>
                        </div>
                        <button
                            title={t('Ttitle-mode')} 
                            ref={refModeBtn}
                            onClick={()=>{
                            setMode(prev => !prev)
                            setKlava(false)
                            setLange(false)
                            setTime(false)
                            setWords(false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('mode') === 't-time' ?  t('T-onTime') : t('T-onWords')}
                        </button>
                    </div>
                    <div className={classVisibleMin.join(' ')}>
                        <div className={Style.paramsText}>
                        <p>{t('T-time')}</p>
                        </div>
                        <button
                            title={t('Ttitle-time')}
                            ref={refTimeBtn}
                            onClick={()=>{
                            setTime(prev => !prev)
                            setKlava(false)
                            setLange(false)
                            setMode(false)
                            setWords(false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('mode-time')}
                        </button>
                    </div>
                        <div className={classVisibleWords.join(' ')}>
                        <div className={Style.paramsText}>
                        <p>{t('T-words')}</p>
                        </div>
                        <button
                            title={t('Ttitle-words')}
                            ref={refWordsBtn}
                            onClick={()=>{
                            setWords(prev => !prev)
                            setTime(false)
                            setKlava(false)
                            setLange(false)
                            setMode(false)
                        }} 
                        className={Style.paramsSelect}>
                            {window.localStorage.getItem('mode-words') + ' ' + t('T-counWord')}
                        </button>
                    </div>
                    <button title={t('Ttitle-start')} className='Start'>{t('T-start')}</button>
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
                                setKlava(false)
                                window.localStorage.setItem('klava', 'Colemak');
                            }}>Colemak</li>
                            <li title="Work-man" onClick={()=>{
                                setKlava(false)
                                window.localStorage.setItem('klava', 'Work-man');
                            }}>Work-man</li>
                            <li title="Qwerty" onClick={()=>{
                                setKlava(false)
                                window.localStorage.setItem('klava', 'Qwerty');
                            }}>Qwerty</li>
                        </ul>
                <ul className={langeClass}>
                            <li title="Русский" onClick={()=>{
                                setLange(false)
                                window.localStorage.setItem('lange','Русский')
                            }}>Русский</li>
                            <li title="English" onClick={()=>{
                                setLange(false)
                                window.localStorage.setItem('lange','English')
                            }}>English</li>
                            <li title="France">France</li>
                        </ul>
                <ul className={modeClass}>
                            <li title={t('T-onTime')} onClick={()=>{
                                setMode(false)
                                window.localStorage.setItem('mode', 't-time')
                            }}>{t('T-onTime')}</li>
                            <li title={t('T-onWords')} onClick={()=>{
                                setMode(false)
                                window.localStorage.setItem('mode','t-word')
                            }}>{t('T-onWords')}</li>
                        </ul>
                <ul className={timeClass}>
                            <li title="1:00" onClick={()=>{
                                setTime(false)
                                window.localStorage.setItem('mode-time','1:00')
                            }}>1:00</li>
                            <li title="3:00" onClick={()=>{
                                setTime(false)
                                window.localStorage.setItem('mode-time','3:00')
                            }}>3:00</li>
                            <li title="5:00" onClick={()=>{
                                setTime(false)
                                window.localStorage.setItem('mode-time','5:00')
                            }}>5:00</li>
                        </ul>
                <ul className={wordsClass}>
                            <li title={50 + ' ' + t('T-counWord')} onClick={()=>{
                                setWords(false)
                                window.localStorage.setItem('mode-words','50')
                            }}>50 {t('T-counWord')}</li>
                            <li title={70 + ' ' + t('T-counWord')} onClick={()=>{
                                setWords(false)
                                window.localStorage.setItem('mode-words','70')
                            }}>70 {t('T-counWord')}</li>
                            <li title={100 + ' ' + t('T-counWord')} onClick={()=>{
                                setWords(false)
                                window.localStorage.setItem('mode-words','100')
                            }}>100 {' '} {t('T-counWord')}</li>
                        </ul>
                        <button onClick={()=>{
                                setKlava(false)
                                setLange(false)
                                setMode(false)
                                setTime(false)
                                setWords(false)
                        }} className={klavaClassText}>{t('T-close')}</button>
                    </div>
                </div>
            </section>
        </main>  
        </>
    );
};

export default Text;