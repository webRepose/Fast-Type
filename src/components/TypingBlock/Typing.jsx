import Style from '../../styles/Components/TypingCode/TypingCode.module.css';
import Keyboards from '../Keyboards/Keyboards';
import CopyToClipboard from "react-copy-to-clipboard";
import Section from './../Section';
import GreenButton from '../UI/Buttons/GreenButton';
import Back from "../Back";
import SocialMedia from "./SocialMedia/SocialMedia";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCallback } from 'react';

const inputBackspace = (event) => {
    if (event.keyCode === 8 || event.key === 'Backspace' || event.which === 8) event.preventDefault();
};

const Typing = ({ localeText1, parseMode, parseTime, parseWords, parseKeyboard, parseLang, section, historyLang }) => {
    const [t] = useTranslation();

    if (parseTime === 60 || parseTime === 180 || parseTime === 300) {
    } else parseTime = 60;
    if (parseWords === 50 || parseWords === 70 || parseWords === 100) {
    } else parseWords = 50;

    const textsRu = localeText1,
        inputArea = useRef(),
        inputBlock = useRef(),
        blurCloseRef = useRef(),
        [share, setShare] = useState(false),
        [isType, setIsType] = useState(false),
        [isTypeWords, setIsTypeWords] = useState(false),
        [words, setWords] = useState(0),
        [simbols, setSimbols] = useState(0),
        [errorCount, setErrorCount] = useState(0),
        [klava, setKlava] = useState(true),
        [timerVisible, setTimerVisible] = useState(true),
        [allResVsisible, setAllResVisible] = useState(true),
        [changeTextNew, setChangeTextNew] = useState(false),
        [inputText, setInputText] = useState(''),
        [textInputs, setTextInputs] = useState(),
        [countLength, setCountLenght] = useState(),
        [i, setI] = useState(0),
        [time, setTime] = useState(parseTime),
        [ourCountWords, setOurCountWords] = useState(parseWords),
        [minTimerWords, setMinTimerWords] = useState(0),
        [secTimerWords, setSecTimerWords] = useState(0);


    useMemo(() => {
        if (inputText[i] !== undefined) {
            if (document.getElementsByClassName(Style.onKeyClick).length >= 1) {
                if (klava) {
                    if(document.getElementById(inputText[i].toUpperCase())) {
                        document.getElementById(inputText[i].toUpperCase()).classList.remove(Style.onKeyClick);
                    }
                    if(inputText[i - 2] !== undefined) {
                        document.getElementById(inputText[i - 1].toUpperCase()).classList.remove(Style.onKeyClick);
                        document.getElementById(inputText[i - 2].toUpperCase()).classList.remove(Style.onKeyClick);
                    }
                }
            }
        }
    }, [i, inputText, klava])

    setTimeout(() => {
        if (inputText[i] !== undefined) {
            if (klava && document.getElementById(inputText[i].toUpperCase())) {
                if (document.getElementById(inputText[i].toUpperCase()).classList.contains(Style.onKeyClick) !== true && document.getElementById(inputText[i].toUpperCase())) {
                    document.getElementById(inputText[i].toUpperCase()).classList.add(Style.onKeyClick);
                }
            }
        }
    }, 0)

    const [reset, setReset] = useState('');
    const inputCheck = (event) => {
        if (parseMode === 'toTime') {
            if (event.target.value.length === 1) setIsType(prev => prev = true);
        } else {
            if (event.target.value.length === 1) setIsTypeWords(prev => prev = true);

            if (inputText[i] === event.nativeEvent.data && (event.nativeEvent.data === ' ' || event.nativeEvent.data === '-')) {
                setOurCountWords(prev => prev - 1);
            }
        }
        
        if (!/Android|HarmonyOS/i.test(navigator.userAgent)) {
            if (inputText[i] === event.nativeEvent.data) {
                if (document.getElementById(inputText[i].toUpperCase())) {
                    if (document.getElementById(inputText[i].toUpperCase()) !== undefined) {
                        klava && document.getElementById(inputText[i].toUpperCase()).classList.remove(Style.onKeyClick);
                    }
                }

                setI(prev => prev + 1);
                setSimbols(prev => prev + 1);
                if (event.nativeEvent.data === ' ' || event.nativeEvent.data === '-') {
                    setWords(prev => prev + 1);
                }
            }
            else {
                backSpace();
                if (document.getElementById(inputText[i].toUpperCase())) {
                    if (document.getElementById(inputText[i].toUpperCase()) !== undefined) {
                        klava && document.getElementById(inputText[i].toUpperCase()).classList.remove(Style.onKeyClick);
                    }
                }

                inputBlock.current.style.border = '1px solid red'
                setTimeout(() => { inputBlock.current.style.border = '1px solid #707070' }, 500)
                setErrorCount(prev => prev + 1);

                if (document.getElementById('Backspace') !== null || undefined) {
                    document.getElementById('Backspace').classList.add(Style.onKeyClickBackspace);
                    setTimeout(() => { document.getElementById('Backspace').classList.remove(Style.onKeyClickBackspace) }, 300)
                }
            }
        } else if (/Android|HarmonyOS/i.test(navigator.userAgent)) {
            if (reset + inputText[i] === event.nativeEvent.data) {
                if (event.nativeEvent.data === ' ') {
                    setReset(prev => prev = '');
                    inputArea.current.value = '';
                }

                if (inputArea.current.value.length >= 1) setReset(prev => prev = inputArea.current.value)

                setI(prev => prev + 1);
                setSimbols(prev => prev + 1);
                if (event.nativeEvent.data === ' ' || event.nativeEvent.data === '-') {
                    setWords(prev => prev + 1);
                }

                // alert('this inputtext ' + inputText[i])
                // alert('this reset ' + reset)
                // alert('event native' + event.nativeEvent.data)

            } else {
                backSpace();
                inputBlock.current.style.border = '1px solid red';
                setTimeout(() => { inputBlock.current.style.border = '1px solid #707070' }, 500);
                setErrorCount(prev => prev + 1);
            }
        };


        if (event.target.value.length === countLength) {
            setI(prev => prev = 0);
            setCountLenght(prev => prev = textInput.length);
            const textInput = textsRu[Math.floor(Math.random() * textsRu.length)];
            setInputText(prev => prev = textInput);
            inputArea.current.value = '';
        };
    };

    const shareMob = () => {
        navigator.share({
            text: t('TI-myRes'),
            url: `https://fasttyping.vercel.app/result?words=${words}&&errors=${errorCount}&&symbols=${simbols}&&time=${parseTime}&&timeSelf=${minTimerWords + ':' + secTimerWords}&&precent=${simbols ? Math.round(simbols * (100 / simbols) - errorCount * (100 / simbols)) : 0}`,
            title: t('TI-myRes')
        });
    };

    const sharePc = () => {
        setShare(prev => !prev);
    };


    const Restart = useCallback(() => {
        setKlava(prev => prev = false);
        setTimeout(() => {
            setKlava(prev => prev = true);
        }, 1)

        document.querySelector('html').style.overflow = '';
        inputArea.current.focus();
        setI(prev => prev = 0);
        inputArea.current.value = '';
        setSimbols(prev => prev = 0);
        setWords(prev => prev = 0);
        setErrorCount(prev => prev = 0);
        setIsType(prev => prev = false);
        setIsTypeWords(prev => prev = false);
        setSecTimerWords(prev => prev = 0);
        setTime(prev => prev = parseTime);
        setOurCountWords(prev => prev = parseWords);
    },[parseTime, parseWords])

    useEffect(() => {
        let textInput = textsRu[Math.floor(Math.random() * textsRu.length)];
        setInputText(prev => prev = textInput);
        setCountLenght(prev => prev = textInput.length);


        if (!changeTextNew) {
            setKlava(prev => prev = false);
            setTimeout(() => {
                setKlava(prev => prev = true);
            }, 1)

            inputArea.current.focus();
            setI(prev => prev = 0);
            inputArea.current.value = '';
            setSimbols(prev => prev = 0);
            setWords(prev => prev = 0);
            setErrorCount(prev => prev = 0);
            setIsType(prev => prev = false);
            setIsTypeWords(prev => prev = false);
            setSecTimerWords(prev => prev = 0);
            setMinTimerWords(prev => prev = 0);
            setTime(prev => prev = parseTime);
            setOurCountWords(prev => prev = parseWords);
        }

        changeTextNew &&
            setTextInputs(textsRu[Math.floor(Math.random() * textsRu.length)]);
        setChangeTextNew(prev => prev = false);
    }, [changeTextNew, textInputs, textsRu, parseTime, parseWords]);


    const getTime = (times) => times.toString().padStart(2, "0"),
        min = getTime(Math.floor(time / 60)),
        sec = getTime(time - min * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            isType && setTime((time) => (time >= 1 ? time - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [isType]);

    useEffect(() => {
        if (time === 0 || ourCountWords === 0) {
            let historyMode;
            if (parseMode === 'toTime') historyMode = 'C-forTime';
            else historyMode = 'C-forWords';
            const offset = new Date().toLocaleDateString(),
                offsetNow = new Date().toLocaleTimeString(),
                check = JSON.parse(localStorage.getItem('HistoryData'));
            let historyArray;
            if (check !== null) historyArray = check;
            else historyArray = [];

            let resTimer;
            if (parseMode === 'toTime') resTimer = parseTime / 60 + ' : 00';
            else resTimer = `${minTimerWords < 10 ? minTimerWords.toString().padStart(2, '0') : minTimerWords} : ${secTimerWords < 10 ? secTimerWords.toString().padStart(2, '0') : secTimerWords}`;
            const correct = simbols ? Math.round(simbols * (100 / simbols) - errorCount * (100 / simbols)) : 0;

            const historyData =
            {
                lang: historyLang,
                section: section,
                mode: historyMode,
                timer: resTimer,
                words: words,
                symbols: simbols,
                errors: errorCount,
                timesNow: offsetNow,
                times: offset,
                correct: correct,
            };
            historyArray.push(historyData);
            window.localStorage.setItem('HistoryData', JSON.stringify(historyArray));

            inputArea.current.blur();
            inputArea.current.value = '';
            document.querySelector('html').style.overflow = 'hidden';

            window.addEventListener('keydown', e => {
                if(e.key === 'Escape' || e.code === 'Escape') Restart();
            })
        }

    }, [Restart, errorCount, simbols, time, words, t, ourCountWords, secTimerWords, minTimerWords, sec, min, parseMode, parseTime, section, historyLang]);

    const backSpace = () => {
        let backFun = inputArea.current.value;
        backFun = backFun.substr(0, backFun.length - 1);
        inputArea.current.value = backFun;
    }


    useEffect(() => {
        const intervalTimer = setInterval(() => {
            if (isTypeWords) {
                if (ourCountWords === 0) {
                    setIsTypeWords(prev => prev = false);
                    return false;
                }

                setSecTimerWords(prev => prev + 1);

                if (secTimerWords === 59) {
                    setSecTimerWords(prev => prev = 0);
                    setMinTimerWords(prev => prev + 1);
                }
            }
        }, 1000)

        return () => clearInterval(intervalTimer);

    }, [ourCountWords, secTimerWords, isTypeWords])


    useEffect(() => {
        const handler = (event) => {
            if (share) if (!blurCloseRef.current.contains(event.target)) setShare(prev => prev = false);
        };

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    });

    const shareRes = `https://fasttyping.vercel.app/result?words=${words}&&errors=${errorCount}&&symbols=${simbols}&&time=${parseTime}&&timeSelf=${minTimerWords + ':' + secTimerWords}&&precent=${simbols ? Math.round(simbols * (100 / simbols) - errorCount * (100 / simbols)) : 0}`;
    return (
        <>
            <main>
                <Section>
                    <Back />
                    <h1>{t('TI-tyText')}</h1>
                    <div className={Style.part}>
                        <div className={Style.partFirst}>
                            {allResVsisible &&
                                <div className={Style.countAll}>
                                    <div><img src="../img/text-type/chat.svg" alt="words" />
                                        {parseMode === 'toTime'
                                            ? (words + ' ' + t('T-counWord'))
                                            : `${minTimerWords < 10
                                                ? (minTimerWords.toString().padStart(2, '0'))
                                                : minTimerWords} : ${secTimerWords < 10
                                                    ? secTimerWords.toString().padStart(2, '0')
                                                    : secTimerWords} ${t('TI-TimerUp')}`
                                        }
                                    </div>
                                    <div> <img src="../img/text-type/type.svg" alt="words" />{simbols} <p>{t('TR-sym')}</p></div>
                                    <div><img src="../img/text-type/problem_.svg" alt="words" /> {errorCount} <p>{t('TR-err')}</p></div>
                                </div>
                            }
                            {timerVisible &&
                                <div className={Style.timer}>
                                    {parseMode === 'toTime'
                                        ? <samp><img src='../img/text-type/timer3.0.svg' alt="words" /> {min + ':' + sec}</samp>
                                        : <samp><img src='../img/text-type/timer3.0.svg' alt="words" /> {ourCountWords + ' ' + t('T-counWord')}</samp>}
                                </div>
                            }
                            <div ref={inputBlock} className={Style.inputMain}>
                                <div className={Style.inputBlock}>
                                    <p translate="no" className={Style.inputText}>{inputText}</p>
                                    <textarea
                                        translate="no"
                                        ref={inputArea}
                                        onKeyDown={inputBackspace}
                                        onChange={inputCheck}
                                        autoFocus
                                        className={Style.inputArea}
                                        formNoValidate
                                        onPaste={(e) => { e.preventDefault() }}
                                        aria-haspopup="false"
                                        autoCapitalize="off"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        spellCheck="false"
                                        aria-label="Input">
                                    </textarea>
                                </div>
                            </div>
                            {klava && <Keyboards keyboard={parseKeyboard} lang={parseLang} />}
                            <GreenButton title={t('TI-changeText')} onClick={() => { setChangeTextNew(prev => !prev) }} className={Style.changeText}>{t('TI-changeText')}</GreenButton>
                        </div>
                        <div className={Style.partTwo}>
                            <div className={Style.closeAll}>
                                <button onClick={() => {
                                    setKlava(prev => !prev)
                                }} title={klava ? t('TI-hideKlava') : t('TI-showKlava')} className={Style.closeBlock}>
                                    {klava
                                        ? <img src="../img/text-type/keyboard_off.svg" alt={t('TI-hideKlava')} />
                                        : <img src="../img/text-type/keyboard.svg" alt={t('TI-showKlava')} />}
                                </button>
                                <button onClick={() => { setTimerVisible(prev => !prev) }} title={timerVisible ? t('TI-hideTimer') : t('TI-showTimer')} className={Style.closeBlock}>
                                    {timerVisible
                                        ? <img src="../img/text-type/timer_off.svg" alt={t('TI-hideTimer')} />
                                        : <img src="../img/text-type/timer.svg" alt={t('TI-showTimer')} />}
                                </button>
                                <button onClick={() => { setAllResVisible(prev => !prev) }} title={allResVsisible ? t('TI-hideCateg') : t('TI-showCateg')} className={Style.closeBlock}>
                                    {allResVsisible
                                        ? <img src="../img/text-type/category_off.svg" alt={t('TI-hideCateg')} />
                                        : <img src="../img/text-type/category.svg" alt={t('TI-showCateg')} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {(time && ourCountWords) ? '' :
                        <div className={Style.inputBlur}>
                            <div ref={blurCloseRef} className={Style.inputBlurModals}>
                                {!share && 
                                    <>
                                        <h3>{t('TI-yoRes')}</h3>
                                        <h2>
                                            {parseMode === 'toTime'
                                                ? t('TR-for') + ' ' + parseTime / 60 + ' ' + t('TR-min') + ' ' + t('TI-yoType')
                                                : t('TI-typed') + parseWords + ' ' + t('T-counWord-min')}</h2>
                                        <h2>{parseMode === 'toTime'
                                            ? t('T-counWord') + ': ' + words
                                            : t('TI-laterTime') + `${minTimerWords < 10 ? minTimerWords.toString().padStart(2, '0') : minTimerWords} : ${secTimerWords < 10 ? secTimerWords.toString().padStart(2, '0') : secTimerWords}`}</h2>
                                        <h2>{t('TR-sym')}: {simbols}</h2>
                                        <h2>{t('TR-err')}: {errorCount}</h2>
                                        <h2>{t('TR-right')} {simbols ? Math.round(simbols * (100 / simbols) - errorCount * (100 / simbols)) : 0}%</h2>
                                        <div className={Style.inputBlurModalsButtons}>
                                            <button>
                                                <Link title={t('Home')} to='/' className={Style.navBarActive}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                                                        <path d="M15.654,27H7.75A1.794,1.794,0,0,1,6,25.25V7.75A1.794,1.794,0,0,1,7.75,6h7.9ZM13.9,25.25V7.75H7.75v17.5ZM17.4,15.6V6H25.25A1.794,1.794,0,0,1,27,7.75V15.6Zm1.75-1.75h6.1V7.75h-6.1ZM17.4,27V17.346H27v7.9A1.794,1.794,0,0,1,25.25,27Zm1.75-1.75h6.1V19.1h-6.1ZM13.9,16.5ZM19.154,13.846ZM19.154,19.1Z" transform="translate(-6 -6)" fill="#33d74b" />
                                                    </svg>
                                                    <p>{t('Home')}</p>
                                                </Link>
                                            </button>
                                            <button>
                                                <Link title={t('H-Hist')} to='/history' className={Style.navBarActive}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36">
                                                        <path d="M23.85,42A17.1,17.1,0,0,1,11.2,36.725,17.527,17.527,0,0,1,6,23.95H9A14.678,14.678,0,0,0,13.3,34.6,14.179,14.179,0,0,0,23.85,39,14.541,14.541,0,0,0,34.6,34.55,14.79,14.79,0,0,0,39,23.75a13.964,13.964,0,0,0-4.45-10.475A14.893,14.893,0,0,0,23.85,9a13.6,13.6,0,0,0-6.375,1.55,17.386,17.386,0,0,0-5.175,4.1h5.25v3H7.1V7.25h3v5.3a19.028,19.028,0,0,1,6.175-4.8A17.008,17.008,0,0,1,23.85,6,17.863,17.863,0,0,1,30.9,7.4a18.474,18.474,0,0,1,5.775,3.825,17.956,17.956,0,0,1,3.9,5.675A17.238,17.238,0,0,1,42,23.9a17.592,17.592,0,0,1-1.425,7.05,18.1,18.1,0,0,1-3.9,5.75A18.611,18.611,0,0,1,30.9,40.575,17.592,17.592,0,0,1,23.85,42Zm6.4-9.85-7.7-7.6V13.85h3V23.3L32.4,30Z" transform="translate(-6 -6)" fill="#33d74b" />
                                                    </svg>
                                                    <p>{t('H-Hist')}</p>
                                                </Link>
                                            </button>
                                            <button onClick={Restart}>
                                                <Link title={t('TI-rep')} className={Style.navBarActive}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32.05 37">
                                                        <path d="M22.55,41.9A15.315,15.315,0,0,1,12.2,36.85,15.386,15.386,0,0,1,8,26.05,15.442,15.442,0,0,1,9.775,18.8a14.891,14.891,0,0,1,4.975-5.55L16.9,15.4a11.475,11.475,0,0,0-4.35,4.525A12.716,12.716,0,0,0,11,26.05a12.469,12.469,0,0,0,3.3,8.65,12.643,12.643,0,0,0,8.25,4.2Zm3,0v-3a12.743,12.743,0,0,0,8.25-4.225,12.486,12.486,0,0,0,3.25-8.625,12.89,12.89,0,0,0-13-13h-1l3,3L23.9,18.2l-6.65-6.65L23.9,4.9l2.15,2.15-3,3h1A15.4,15.4,0,0,1,35.4,14.725,15.466,15.466,0,0,1,40.05,26.05a15.436,15.436,0,0,1-4.175,10.8A15.223,15.223,0,0,1,25.55,41.9Z" transform="translate(-8 -4.9)" fill="#33d74b" />
                                                    </svg>
                                                    <p>{t('TI-rep')}</p>
                                                </Link>
                                            </button>
                                            <button title={t('TI-share')} onClick={/Android|iPad|iPhone|HarmonyOS|Mobile|Table|iOS|iPod|BlackBerry|WindowsPhone/i.test(navigator.userAgent) ? shareMob : sharePc}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36.05 40">
                                                    <path d="M36.35,44a5.719,5.719,0,0,1-5.7-5.7,5.388,5.388,0,0,1,.075-.825,4.477,4.477,0,0,1,.225-.875L15.8,27.8a5.713,5.713,0,0,1-1.85,1.375,5.171,5.171,0,0,1-2.25.525,5.488,5.488,0,0,1-4.025-1.675,5.7,5.7,0,0,1,0-8.075,5.691,5.691,0,0,1,6.225-1.2,6.036,6.036,0,0,1,1.9,1.3l15.15-8.7a3.484,3.484,0,0,1-.225-.8,5.181,5.181,0,0,1-.075-.85,5.464,5.464,0,0,1,1.675-4.05A5.688,5.688,0,0,1,42.05,9.7a5.53,5.53,0,0,1-1.65,4.025A5.464,5.464,0,0,1,36.35,15.4a6.707,6.707,0,0,1-2.225-.375A4.269,4.269,0,0,1,32.3,13.8L17.15,22.2a9.239,9.239,0,0,1,.175.925A6.39,6.39,0,0,1,17.4,24a4.081,4.081,0,0,1-.075.75q-.075.4-.175.8l15.15,8.6a5.949,5.949,0,0,1,1.75-1.125,5.837,5.837,0,0,1,2.3-.425,5.71,5.71,0,0,1,4.05,9.725A5.464,5.464,0,0,1,36.35,44Zm0-31.6a2.648,2.648,0,0,0,2.7-2.7,2.7,2.7,0,1,0-5.4,0,2.648,2.648,0,0,0,2.7,2.7ZM11.7,26.7a2.7,2.7,0,1,0,0-5.4,2.7,2.7,0,1,0,0,5.4ZM36.35,41a2.648,2.648,0,1,0-1.925-.775A2.614,2.614,0,0,0,36.35,41ZM36.35,9.7ZM11.7,24ZM36.35,38.3Z" transform="translate(-6 -4)" fill="#33d74b" />
                                                </svg>
                                                <p>{t('TI-share')}</p>
                                            </button>
                                        </div>
                                    </>
                                }
                                {share &&
                                    <div className={Style.sharePc}>
                                    <button title={t('TIS-back')} onClick={() => { setShare(prev => !prev) }} className={Style.Back}>
                                        <img src="../img/text-type/arrow_back.svg" alt="back" />
                                    </button>
                                    <h1>{t('TIS-share')}</h1>
                                    <CopyToClipboard onCopy={() => { alert('You copied') }} text={shareRes}>
                                        <button className={Style.sharePcCopy}>
                                            <div title={t('TIS-copy')} className={Style.sharePcCopyText}>
                                                <p>{t('TIS-copy')}</p>
                                                <div className={Style.sharePcCopyLink}>
                                                    <img src="../img/text-type/content_copy.svg" alt="copy" />
                                                </div>
                                            </div>
                                        </button>
                                    </CopyToClipboard>
                                    <div className={Style.sharePcOr}>
                                        <div></div>
                                        <p>{t('TIS-or')}</p>
                                        <div></div>
                                    </div>
                                    <div className={Style.sharePcOther}>
                                        <SocialMedia shareRes={shareRes} />
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    }
                </Section>
            </main>
        </>
    );
};

export default Typing;