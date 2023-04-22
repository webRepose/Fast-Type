import Style from '../../../styles/Main/Captcha/Captcha.module.css';
import Meta from '../../../components/Meta';
import Section from "../../../components/Section";
import Back from "../../../components/Back";
import Keyboards from '../../../components/Keyboards/Keyboards';
import GreenButton from '../../../components/UI/Buttons/GreenButton';
import { useTranslation } from "react-i18next";
import { useState, useRef } from 'react';

const inputBackspace = (event) => {
    if (event.keyCode === 8 || event.key === 'Backspace' || event.which === 8) event.preventDefault();
};

const classArray = [
    Style.captchaFirstLetter,
    Style.captchaSecondLetter,
    Style.captchaThirdLetter,
    Style.captchaFourLetter,
    Style.captchaFifthLetter,
    Style.captchaSixLetter
].sort(() => Math.random() - 0.5);


let captchaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateCaptchaChar = () => {
  const index = Math.floor(Math.random() * captchaChars.length);
  return captchaChars[index];
}

const generateCaptcha = (length) => {
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += generateCaptchaChar();
  }
  return captcha;
}

const TypingCapcha = () => {
    const [t] = useTranslation(),
    inputRef = useRef(),
    [iteration, setIteration] = useState(0),
    [captchaText, setCaptchaText] = useState(generateCaptcha(6)),
    [ran, setRan] = useState(Math.floor(Math.random() * 19)),

    captcha = {
        keyboard: 'Qwerty',
        lang: 'English',
    },
    
    localObject = 'captcha';

    if (localStorage.getItem(localObject) === null || localStorage.getItem(localObject) === '{}') {
        localStorage.setItem(localObject, JSON.stringify(captcha));
    }
    const parse = JSON.parse(localStorage.getItem(localObject));

    if(parse.lang === 'English') {
        captchaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    } else {
        captchaChars = "АБВГЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЭЮЯабвгеёжзийклмнопрстуфхцчшщыэюя0123456789";
    }

    const capchaChange = () => {
        if (document.getElementById(captchaText[iteration].toUpperCase())) {
            if (document.getElementById(captchaText[iteration].toUpperCase()) !== undefined) {
                document.getElementById(captchaText[iteration].toUpperCase()).classList.remove(Style.onKeyClick);
            }
        }
        setCaptchaText(generateCaptcha(6));
        setRan(prev => prev = Math.floor(Math.random() * 19));
    }

    const backSpace = () => {
        let backFun = inputRef.current.value;
        backFun = backFun.substr(0, backFun.length - 1);
        inputRef.current.value = backFun;
    }
    
    if(inputRef.current) inputRef.current.focus();

    if (document.getElementsByClassName(Style.onKeyClick).length >= 1) {
        if(document.getElementById(captchaText[iteration].toUpperCase())) {
            document.getElementById(captchaText[iteration].toUpperCase()).classList.remove(Style.onKeyClick);
        }
        if(captchaText[iteration - 2] !== undefined) {
            document.getElementById(captchaText[iteration - 1].toUpperCase()).classList.remove(Style.onKeyClick);
            document.getElementById(captchaText[iteration - 2].toUpperCase()).classList.remove(Style.onKeyClick);
        }  
    }

    if (captchaText[iteration] !== undefined) {
        if (document.getElementById(captchaText[iteration].toUpperCase())) {
            if (document.getElementById(captchaText[iteration].toUpperCase()).classList.contains(Style.onKeyClick) !== true && document.getElementById(captchaText[iteration].toUpperCase())) {
                document.getElementById(captchaText[iteration].toUpperCase()).classList.add(Style.onKeyClick);
            }
        }
    }


    const inputCheckOut = (event) => {
        if (!/Android|HarmonyOS/i.test(navigator.userAgent)) {
            if (captchaText[iteration] === event.nativeEvent.data) {
                if (document.getElementById(captchaText[iteration].toUpperCase())) {
                    if (document.getElementById(captchaText[iteration].toUpperCase()) !== undefined) {
                        document.getElementById(captchaText[iteration].toUpperCase()).classList.remove(Style.onKeyClick);
                    }
                }
                setIteration(prev => prev + 1);
            }
            else {
                backSpace();
                inputRef.current.style.border = '1px solid red';
                setTimeout(() => { inputRef.current.style.border = '1px solid #707070' }, 500);

                if (document.getElementById('Backspace') !== null || undefined) {
                    document.getElementById('Backspace').classList.add(Style.onKeyClickBackspace);
                    setTimeout(() => { document.getElementById('Backspace').classList.remove(Style.onKeyClickBackspace) }, 300)
                }
            }

            if(event.target.value.length >= 6) {
                inputRef.current.value = '';
                if (document.getElementById(captchaText[iteration].toUpperCase())) {
                    if (document.getElementById(captchaText[iteration].toUpperCase()) !== undefined) {
                        document.getElementById(captchaText[iteration].toUpperCase()).classList.remove(Style.onKeyClick);
                    }
                }
                setCaptchaText(generateCaptcha(6));
                setRan(prev => prev = Math.floor(Math.random() * 19));
                setIteration(prev => prev = 0);
            }
        }
    }

    return (
        <>
        <Meta title={t('CP-title')} canon={'captcha/typing'} description={t('TI-description')} keywords={'Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training'} />
        <main>
            <Section>
                <Back/>
                <h1>{t('CP-zag')}</h1>
                <div className={Style.captcha}>
                    <img src={`../img/main/captcha/captcha${ran}.png`} alt="background"/>
                    {captchaText &&
                        <span translate='no'>
                            <p className={classArray[0]}>{captchaText[0]}</p>
                            <p className={classArray[1]}>{captchaText[1]}</p>
                            <p className={classArray[2]}>{captchaText[2]}</p>
                            <p className={classArray[3]}>{captchaText[3]}</p>
                            <p className={classArray[4]}>{captchaText[4]}</p>
                            <p className={classArray[5]}>{captchaText[5]}</p>
                        </span>
                    }
                </div>
                <input
                onPaste={(e) => { e.preventDefault() }}
                formNoValidate 
                ref={inputRef}
                className={Style.captchaInput}
                name="text" 
                placeholder={t('CP-input')} 
                type="text"
                autoComplete='off'       
                autoCorrect="off"
                spellCheck="false"
                aria-label="Input"
                onKeyDown={inputBackspace}
                onChange={inputCheckOut}>
                </input>
                <Keyboards keyboard={parse.keyboard} lang={parse.lang}/>
                <div className={Style.captchaChange}>
                    <GreenButton onClick={capchaChange}>{t('CP-change')}</GreenButton>
                </div>
            </Section>
        </main>
        </>
    )
};

export default TypingCapcha;