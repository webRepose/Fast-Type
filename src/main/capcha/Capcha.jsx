import Style from '../../styles/Text/Text.module.css';
import Section from "../../components/Section";
import Back from "../../components/Back";
import Meta from "../../components/Meta";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Capcha = () => {
    const [t] = useTranslation();

    const captcha = {
        keyboard: 'Qwerty',
        lang: 'English',
    }

    const localObject = 'captcha';

    if (localStorage.getItem(localObject) === null || localStorage.getItem(localObject) === '{}') {
        localStorage.setItem(localObject, JSON.stringify(captcha));
    }

    const parse = JSON.parse(localStorage.getItem(localObject)),
        [keyboardBool, setKeyboardBool] = useState(false),
        [langBool, setLangBool] = useState(false),

        localPush = () => {
            localStorage.setItem(localObject, JSON.stringify(parse));
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


        keyboardFunc = () => {
            setKeyboardBool(prev => !prev);
            setLangBool(prev => prev = false);
        },

        langFunc = () => {
            setLangBool(prev => !prev);
            setKeyboardBool(prev => prev = false);
        },

        mobMenu = keyboardBool || langBool ? Style.grid : '';


    return (
        <>
            <main>
                <Meta title={t('TCP-title')} canon={'captcha'} description={t('TI-description')} keywords={'Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training'} />
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

export default Capcha;