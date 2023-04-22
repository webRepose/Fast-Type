import Style from '../../styles/Text/Text.module.css';
import Section from "../../components/Section";
import Back from "../../components/Back";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Meta from "../../components/Meta";

const Text = () => {
    const [t] = useTranslation();

    const text = {
        modeID: 'toTime',
        mode: 'C-forTime',
        keyboard: 'Qwerty',
        time: 60,
        words: 50,
        lang: 'English',
        section: 'text'
    }

    if (localStorage.getItem('text') === null || localStorage.getItem('text') === '{}') {
        localStorage.setItem('text', JSON.stringify(text));
    }

    const parse = JSON.parse(localStorage.getItem('text')),
        [mode, setMode] = useState(parse.mode),
        [langBool, setLangBool] = useState(false),
        [keyboardBool, setKeyboardBool] = useState(false),
        [timeBool, setTimeBool] = useState(false),
        [modeBool, setModeBool] = useState(false),
        [wordsBool, setWordsBool] = useState(false),

        localPush = () => {
            localStorage.setItem('text', JSON.stringify(parse));
        },


        keyboardMenu = (value) => {
            setKeyboardBool(prev => !prev);
            parse.keyboard = value;
            localPush();
        },

        langMenu = (value) => {
            setLangBool(prev => !prev);
            parse.lang = value;
            localPush();
        },

        modeMenu = (value, modeId) => {
            setModeBool(prev => !prev);
            parse.mode = value;         
            parse.modeID = modeId;
            localPush();
            setMode(prev => prev = value);
        },

        timeMenu = (value) => {
            setTimeBool(prev => !prev);
            parse.time = value;
            localPush();
        },

        wordsMenu = (value) => {
            setWordsBool(prev => !prev);
            parse.words = value;
            localPush();
        },


        modeFunc = () => {
            setModeBool(prev => !prev);
            setLangBool(prev => prev = false);
            setKeyboardBool(prev => prev = false);
            setWordsBool(prev => prev = false);
            setTimeBool(prev => prev = false);
        },

        timeFunc = () => {
            setTimeBool(prev => !prev);
            setLangBool(prev => prev = false);
            setKeyboardBool(prev => prev = false);
            setWordsBool(prev => prev = false);
            setModeBool(prev => prev = false);
        },

        wordFunc = () => {
            setWordsBool(prev => !prev);
            setLangBool(prev => prev = false);
            setKeyboardBool(prev => prev = false);
            setTimeBool(prev => prev = false);
            setModeBool(prev => prev = false);
        },

        keyboardFunc = () => {
            setKeyboardBool(prev => !prev);
            setLangBool(prev => prev = false);
            setTimeBool(prev => prev = false);
            setWordsBool(prev => prev = false);
            setModeBool(prev => prev = false);
        },

        langFunc = () => {
            setLangBool(prev => !prev);
            setKeyboardBool(prev => prev = false);
            setTimeBool(prev => prev = false);
            setWordsBool(prev => prev = false);
            setModeBool(prev => prev = false);
        },

    mobMenu = keyboardBool || langBool || timeBool || modeBool || wordsBool ? Style.grid : '';


    return (
        <>
            <main>
            <Meta title={t('T-title')} canon={'text'} description={t('Ti-description')} keywords={'Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training'}/>
                <Section>
                    <Back />
                    <h1>{t('T-options')}</h1>
                    <div className={Style.params}>
                        <div className={Style.paramsBlock}>
                            {window.innerWidth >= 920 &&
                                <div className={Style.paramsSub}>
                                    <article className={Style.paramsText}>
                                        <div className={Style.paramsTextSub}>
                                            <img width='21px' height='21px' src="./img/text/keyboard.svg" alt="keyboard" />
                                            <p>{t('T-klava')}</p>
                                        </div>
                                    </article>
                                    <div>
                                        <button title={t('Ttitle-klava')} onClick={keyboardFunc} className={Style.paramsSelect}>{parse.keyboard}</button>
                                    </div>
                                </div>
                            }
                            <div className={Style.paramsSub}>
                                <article className={Style.paramsText}>
                                    <div className={Style.paramsTextSub}>
                                        <img width='21px' height='21px' src="./img/text/language.svg" alt="lang" />
                                        <p>{t('T-lang')}</p>
                                    </div>
                                </article>
                                <div>
                                    <button title={t('Ttitle-lang')} onClick={langFunc} className={Style.paramsSelect}>{parse.lang}</button>
                                </div>
                            </div>
                            <div className={Style.paramsSub}>
                                <article className={Style.paramsText}>
                                    <div className={Style.paramsTextSub}>
                                        <img width='21px' height='21px' src="./img/text/mode.svg" alt="mode" />
                                        <p>{t('T-mode')}</p>
                                    </div>
                                </article>
                                <div>
                                    <button title={t('Ttitle-mode')} onClick={modeFunc} className={Style.paramsSelect}>{t(parse.mode)}</button>
                                </div>
                            </div>
                            {mode === 'C-forTime' ?
                                <div className={Style.paramsSub}>
                                    <article className={Style.paramsText}>
                                        <div className={Style.paramsTextSub}>
                                            <img width='21px' height='21px' src="./img/text/timer.svg" alt="for a time" />
                                            <p>{t('T-time')}</p>
                                        </div>
                                    </article>
                                    <div>
                                        <button title={t('Ttitle-time')} onClick={timeFunc} className={Style.paramsSelect}>
                                            {parse.time / 60 + ':00'}
                                        </button>
                                    </div>
                                </div>
                                :
                                <div className={Style.paramsSub}>
                                    <article className={Style.paramsText}>
                                        <div className={Style.paramsTextSub}>
                                            <img width='21px' height='21px' src="./img/text/view_list.svg" alt="for a word" />
                                            <p>{t('T-words')}</p>
                                        </div>
                                    </article>
                                    <div>
                                        <button title={t('Ttitle-words')} onClick={wordFunc} className={Style.paramsSelect}>
                                            {parse.words + ' ' + t('T-counWord')}
                                        </button>
                                    </div>
                                </div>
                            }
                            <Link to='./typing'><button title={t('Ttitle-start')} className={Style.Start}>{t('T-start')}</button></Link>
                        </div>
                        <div className={`${Style.paramsChoice} ${mobMenu}`}>
                            <div className={Style.paramsChoiceMobile}>
                                {keyboardBool &&
                                    <>
                                        <p className={Style.blockText}>{t('T-klava')}</p>
                                        <ul className={Style.flex}>
                                            <li title="Colemak" onClick={() => {
                                                keyboardMenu('Colemak');
                                            }}>Colemak</li>
                                            <li title="Dvorak" onClick={() => {
                                                keyboardMenu('Dvorak');
                                            }}>Dvorak</li>
                                            <li title="Qwerty" onClick={() => {
                                                keyboardMenu('Qwerty');
                                            }}>Qwerty</li>
                                        </ul>
                                    </>
                                }

                                {langBool &&
                                    <>
                                        <p className={Style.blockText}>{t('T-lang')}</p>
                                        <ul className={Style.flex}>
                                            <li title="English" onClick={() => {
                                                langMenu('English');
                                            }}>English</li>
                                            <li title="Русский" onClick={() => {
                                                langMenu('Русский');
                                            }}>Русский</li>
                                        </ul>
                                    </>
                                }

                                {modeBool &&
                                    <>
                                        <p className={Style.blockText}>{t('T-mode')}</p>
                                        <ul className={Style.flex}>
                                            <li title={t('C-forTime')} onClick={() => {
                                                modeMenu('C-forTime', 'toTime');
                                            }}>{t('C-forTime')}</li>
                                            <li title={t('C-forWords')} onClick={() => {
                                                modeMenu('C-forWords', 'toWords');
                                            }}>{t('C-forWords')}</li>
                                        </ul>
                                    </>
                                }

                                {timeBool &&
                                    <>
                                        <p className={Style.blockText}>{t('T-time')}</p>
                                        <ul className={Style.flex}>
                                            <li title="1:00" onClick={() => {
                                                timeMenu(60);
                                            }}>1:00</li>
                                            <li title="3:00" onClick={() => {
                                                timeMenu(180);
                                            }}>3:00</li>
                                            <li title="5:00" onClick={() => {
                                                timeMenu(300);
                                            }}>5:00</li>
                                        </ul>
                                    </>
                                }

                                {wordsBool &&
                                    <>
                                        <p className={Style.blockText}>{t('T-words')}</p>
                                        <ul className={Style.flex}>
                                            <li title={50 + ' ' + t('T-counWord')} onClick={() => {
                                                wordsMenu(50);
                                            }}>{50 + ' ' + t('T-counWord')}</li>
                                            <li title={70 + ' ' + t('T-counWord')} onClick={() => {
                                                wordsMenu(70);
                                            }}>{70 + ' ' + t('T-counWord')}</li>
                                            <li title={100 + ' ' + t('T-counWord')} onClick={() => {
                                                wordsMenu(100);
                                            }}>{100 + ' ' + t('T-counWord')}</li>
                                        </ul>
                                    </>
                                }
                                <button onClick={() => {
                                    langFunc();
                                    setLangBool(prev => prev = false);
                                }} className={Style.blockText}>{t('T-close')}</button>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
        </>
    );
};

export default Text;