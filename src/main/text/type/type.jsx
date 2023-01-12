import { useTranslation } from "react-i18next";
import Style from "./type.module.css";
import {useEffect, useRef, useState} from "react";
import Klava from "./Klava/Klava";
import { Link } from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";

const Type = () => {
      const shareMob = () => {
        if(/Android/||/Iphone/i.test(navigator.userAgent)) {
            navigator.share({
                text: 'Hello',
                url: 'http://localhost:3000/text/type',
                title: 'ban'
            })
        } else {
            setShare(prev => !prev)
        }
}



const [t] = useTranslation();
if(window.localStorage.getItem('mode-time') === null || undefined) {
    window.localStorage.setItem('mode-time', 60);
} if(window.localStorage.getItem('mode') === null || undefined) {
    window.localStorage.setItem('mode', 't-time');
} if(window.localStorage.getItem('klava') === null || undefined) {
    window.localStorage.setItem('klava', 'Qwerty');
} if(window.localStorage.getItem('lange') === null || undefined) {
    window.localStorage.setItem('lange', 'en-US');
}

const inputArea = useRef();
const inputBlock = useRef();
const [share, setShare] = useState(false)
const [isType, setIsType] = useState(false);
const [words, setWords] = useState(0);
const [simbols, setSimbols] = useState(0);
const [errorCount, setErrorCount] = useState(0);
const [klava, setKlava] = useState(true);
const [timerVisible, setTimerVisible] = useState(true);
const [allResVsisible, setAllResVisible] = useState(true);
const [changeTextNew, setChangeTextNew] = useState(false);
const [inputText, setInputText] = useState('');
const [textInputs, setTextInputs] = useState();
const [countLength, setCountLenght] = useState();
const [i, setI] = useState(0);
const [time, setTime] = useState(window.localStorage.getItem('mode-time'));
const [textsRu] = useState([        
    'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Значимость этих проблем настолько очевидна, что консультация с широким активом играет.',
    'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности.',
    'Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Товарищи! постоянное информационно-пропагандистское обеспечение нашей.',
    'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом реализация.',
    'Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Идейные соображения высшего.',
    'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимы',
    'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусств',
    'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.  Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообра',
    'В рамках спецификации современных стандартов, независимые государства обнародованы. Но постоянное информационно-пропагандистское обеспечение нашей деятельности однозначно определяет каждого участника как способного принимать собственные решения касаемо',
    'В рамках спецификации современных стандартов, действия представителей оппозиции освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, указаны как претенденты на роль ключевых факторов! Лишь непосредственные',
]);


useEffect(()=>{
let textInput = textsRu[Math.floor(Math.random()*textsRu.length)];
setInputText(prev => prev = textInput);
setCountLenght(prev => prev = textInput.length);


if(changeTextNew === false) {
    setI(prev => prev = 0);
    inputArea.current.value = '';
    setSimbols(prev => prev = 0);
    setWords(prev => prev = 0);
    setErrorCount(prev => prev =0)
    setIsType(prev => prev = false);
    setTime(window.localStorage.getItem('mode-time'));
}

changeTextNew && 
    setTextInputs(textsRu[Math.floor(Math.random()*textsRu.length)]);
    setChangeTextNew(false);
},[changeTextNew, textInputs, textsRu]);


const getTime = (times) => times.toString().padStart(2, "0");
const min = getTime(Math.floor(time / 60));
const sec = getTime(time - min * 60);

useEffect(()=>{
    const interval = setInterval(()=>{
        isType && 
        setTime((time) => (time >= 1 ? time -1 : 0));
    } ,100);

    return () => {
        clearInterval(interval);
    }
},[isType]);


useEffect(()=>{
    if(time === 0) {
        let historyMode;
        if(window.localStorage.getItem('mode') === 't-time'){
            historyMode = 'Ввод на время';
        } else if(window.localStorage.getItem('mode') === 't-words') {
            historyMode = 'Ввод текста';
        }
        let offset = new Date().toLocaleDateString();
        let offsetNow = new Date().toLocaleTimeString();
    
    
        let check = JSON.parse(localStorage.getItem('HistoryData'));
        let historyArray;
        if(check!==null) {
            historyArray = check;
        } else {
            historyArray = [];
        }
        
        let historyData =
        {
                mode: historyMode,
                timer: localStorage.getItem('mode-time'),
                words: words,
                symbols: simbols,
                errors: errorCount,
                timesNow: offsetNow,
                times: offset
        };
            historyArray.push(historyData);
            window.localStorage.setItem('HistoryData', JSON.stringify(historyArray));

            inputArea.current.blur();
            inputArea.current.value = '';
            document.querySelector('html').style.overflow = 'hidden';
    }
    
}, [errorCount, simbols, time, words]);

const backSpace = () => {
    let backFun = inputArea.current.value;
    backFun = backFun.substr(0,backFun.length - 1);
    inputArea.current.value = backFun;
} 


// const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// const rusUpper = rusLower.toUpperCase();
// const enLower = 'abcdefghijklmnopqrstuvwxyz';
// const enUpper = enLower.toUpperCase();
// const rus = rusLower + rusUpper;
// const en = enLower + enUpper;

// const getChar = (event) => event.nativeEvent.key;

const inputBackspace = (event) => {
    if(event.keyCode === 8 || event.key ==='Backspace' || event.which === 8) {
        event.preventDefault();
        return false;
    }


    // console.log(event.nativeEvent.key)
    // const char = getChar(event)
    // if (event.target.value.length === 0) {
    //     if(localStorage.getItem('lange') === 'en-US') {
    //         if(event.nativeEvent.key !== 'CapsLock' || 'Shift' || 'Tab' || 'Control' || 'Alt' || 'Escape') {
    //             if(en.includes(char) === false) {
    //                 console.log('enable English please!')
    //             }
    //         }
    //     }
    // }
}

const inputCheck = (event)=> {
    if(event.target.value.length === 1) {
        setIsType(prev => prev = true);
    }

    console.log(event)
    if(/Android/i.test(navigator.userAgent)) {
        if(inputText[i-1] !== undefined || null) {
            alert(event.target.value)
            alert(event.nativeEvent.data)
        }
    }


    if(inputText[i] === event.nativeEvent.data) {
        setI(prev => prev+1);
        setSimbols(prev => prev+1);
        if(event.nativeEvent.data === ' ' || event.nativeEvent.data === '-' ) {
            setWords(prev => prev+1);
        }
    }
    else {
        setTimeout(backSpace, 0);
        inputBlock.current.style.border = '1px solid red'
        setTimeout(()=>{inputBlock.current.style.border = '1px solid #707070'}, 500)
        setErrorCount(prev => prev+1);
    }


    if(event.target.value.length === countLength) {
        setI(prev => prev = 0);
        setCountLenght(prev => prev = textInput.length);
        let textInput = textsRu[Math.floor(Math.random()*textsRu.length)];
        setInputText(prev => prev = textInput);
        inputArea.current.value = '';
    }
}

    return (
        <>
        <main>
        <section className={Style.choiceParams}>
            <h3>Набирайте текст</h3>
        </section>
        <section className={Style.choiceParams}>
           <div className={Style.part}>
            <div className={Style.partFirst}>
            <div ref={inputBlock} className={Style.inputMain}>
            <div className={Style.inputBlock}>
                <p className={Style.inputText}>{inputText}</p>
                <textarea
                ref={inputArea}
                onKeyDown={inputBackspace}
                onChange={inputCheck}
                autoFocus
                className={Style.inputArea}
                formNoValidate
                spellCheck="false"
                onPaste={(e)=>{e.preventDefault()}}
                autoComplete="none">
                </textarea>
            </div>
            </div>
            {klava &&
            <Klava/>
            }
            <button title="Сменить текст" onClick={()=>{setChangeTextNew(prev => !prev)}} className={Style.changeText}>Сменить текст</button>
            {timerVisible &&
                    <div className={Style.timer}>
                        <samp><img src="../img/text-type/timer.svg" alt="words"/>{min + ':' + sec}</samp>
                    </div>
            }
            {allResVsisible &&
                        <div className={Style.countAll}>
                        <div><img src="../img/text-type/chat.svg" alt="words"/>{words} <p>Слов</p></div>
                        <div> <img src="../img/text-type/type.svg" alt="words"/>{simbols} <p>Символов</p></div>
                        <div><img src="../img/text-type/problem_.svg" alt="words"/> {errorCount} <p>Ошибок</p></div>
                    </div>
            }
            </div>
            <div className={Style.partTwo}>
                <div className={Style.closeAll}>
                <div onClick={()=>{setKlava(prev => !prev)}} title={klava ? 'Cкрыть клавиатуру' : 'Показать клавиатуру'} className={Style.closeBlock}>
                    {klava ? <img src="../img/text-type/keyboard_off.svg" alt="Клавиатура"/> : <img src="../img/text-type/keyboard.svg" alt="Клавиатура" />}
                </div>
                <div onClick={()=>{setTimerVisible(prev => !prev)}} title={timerVisible ? 'Скрыть таймер' : 'Показать таймер'} className={Style.closeBlock}>
                    {timerVisible ? <img src="../img/text-type/timer_off.svg" alt="Таймер" /> : <img src="../img/text-type/timer.svg" alt="Таймер" />}
                </div>
                <div onClick={()=>{setAllResVisible(prev => !prev)}} title={allResVsisible ? 'Скрыть ошибки/символы/слова' : 'Показать ошибки/символы/слова'} className={Style.closeBlock}>
                    {allResVsisible ? <img src="../img/text-type/category_off.svg" alt="ошибки/символы/слова"/> : <img src="../img/text-type/category.svg" alt="ошибки/символы/слова"/>}
                </div> 
                </div>
            </div>
           </div>
           {time ? '' : 
                <div className={Style.inputBlur}>
                    <div className={Style.inputBlurModals}>
                        {share ? '' :  
                        <>
                        <h3>Ваши результаты!</h3>
                        <h2>За {localStorage.getItem('mode-time') / 60} минут вы набрали:</h2>
                        <h2>Слов: {words}</h2>
                        <h2>Символов: {simbols}</h2>
                        <h2>Ошибок: {errorCount}</h2>
                        <h2>Правильных символов  {simbols ? Math.round(simbols * (100 / simbols) - errorCount * (100 / simbols)) : 0}%</h2>
                        <div className={Style.inputBlurModalsButtons}>
                        <button>
                        <Link title={t('Home')} to='/' className={Style.navBarActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                            <path d="M15.654,27H7.75A1.794,1.794,0,0,1,6,25.25V7.75A1.794,1.794,0,0,1,7.75,6h7.9ZM13.9,25.25V7.75H7.75v17.5ZM17.4,15.6V6H25.25A1.794,1.794,0,0,1,27,7.75V15.6Zm1.75-1.75h6.1V7.75h-6.1ZM17.4,27V17.346H27v7.9A1.794,1.794,0,0,1,25.25,27Zm1.75-1.75h6.1V19.1h-6.1ZM13.9,16.5ZM19.154,13.846ZM19.154,19.1Z" transform="translate(-6 -6)" fill="#33d74b"/>
                        </svg>
                            <p>{t('Home')}</p>
                        </Link>
                        </button>
                        <button>
                        <Link title={t('H-Hist')} to='/' className={Style.navBarActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36">
                        <path d="M23.85,42A17.1,17.1,0,0,1,11.2,36.725,17.527,17.527,0,0,1,6,23.95H9A14.678,14.678,0,0,0,13.3,34.6,14.179,14.179,0,0,0,23.85,39,14.541,14.541,0,0,0,34.6,34.55,14.79,14.79,0,0,0,39,23.75a13.964,13.964,0,0,0-4.45-10.475A14.893,14.893,0,0,0,23.85,9a13.6,13.6,0,0,0-6.375,1.55,17.386,17.386,0,0,0-5.175,4.1h5.25v3H7.1V7.25h3v5.3a19.028,19.028,0,0,1,6.175-4.8A17.008,17.008,0,0,1,23.85,6,17.863,17.863,0,0,1,30.9,7.4a18.474,18.474,0,0,1,5.775,3.825,17.956,17.956,0,0,1,3.9,5.675A17.238,17.238,0,0,1,42,23.9a17.592,17.592,0,0,1-1.425,7.05,18.1,18.1,0,0,1-3.9,5.75A18.611,18.611,0,0,1,30.9,40.575,17.592,17.592,0,0,1,23.85,42Zm6.4-9.85-7.7-7.6V13.85h3V23.3L32.4,30Z" transform="translate(-6 -6)" fill="#33d74b"/>
                        </svg>
                            <p>{t('H-Hist')}</p>
                        </Link>
                        </button>
                        <button>
                        <a title={'Повторить'} href='/text/type' className={Style.navBarActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32.05 37">
                        <path d="M22.55,41.9A15.315,15.315,0,0,1,12.2,36.85,15.386,15.386,0,0,1,8,26.05,15.442,15.442,0,0,1,9.775,18.8a14.891,14.891,0,0,1,4.975-5.55L16.9,15.4a11.475,11.475,0,0,0-4.35,4.525A12.716,12.716,0,0,0,11,26.05a12.469,12.469,0,0,0,3.3,8.65,12.643,12.643,0,0,0,8.25,4.2Zm3,0v-3a12.743,12.743,0,0,0,8.25-4.225,12.486,12.486,0,0,0,3.25-8.625,12.89,12.89,0,0,0-13-13h-1l3,3L23.9,18.2l-6.65-6.65L23.9,4.9l2.15,2.15-3,3h1A15.4,15.4,0,0,1,35.4,14.725,15.466,15.466,0,0,1,40.05,26.05a15.436,15.436,0,0,1-4.175,10.8A15.223,15.223,0,0,1,25.55,41.9Z" transform="translate(-8 -4.9)" fill="#33d74b"/>
                        </svg>
                            <p>Повторить</p>
                        </a>
                        </button>
                        <button title={'Поделиться'} onClick={shareMob}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36.05 40">
                        <path d="M36.35,44a5.719,5.719,0,0,1-5.7-5.7,5.388,5.388,0,0,1,.075-.825,4.477,4.477,0,0,1,.225-.875L15.8,27.8a5.713,5.713,0,0,1-1.85,1.375,5.171,5.171,0,0,1-2.25.525,5.488,5.488,0,0,1-4.025-1.675,5.7,5.7,0,0,1,0-8.075,5.691,5.691,0,0,1,6.225-1.2,6.036,6.036,0,0,1,1.9,1.3l15.15-8.7a3.484,3.484,0,0,1-.225-.8,5.181,5.181,0,0,1-.075-.85,5.464,5.464,0,0,1,1.675-4.05A5.688,5.688,0,0,1,42.05,9.7a5.53,5.53,0,0,1-1.65,4.025A5.464,5.464,0,0,1,36.35,15.4a6.707,6.707,0,0,1-2.225-.375A4.269,4.269,0,0,1,32.3,13.8L17.15,22.2a9.239,9.239,0,0,1,.175.925A6.39,6.39,0,0,1,17.4,24a4.081,4.081,0,0,1-.075.75q-.075.4-.175.8l15.15,8.6a5.949,5.949,0,0,1,1.75-1.125,5.837,5.837,0,0,1,2.3-.425,5.71,5.71,0,0,1,4.05,9.725A5.464,5.464,0,0,1,36.35,44Zm0-31.6a2.648,2.648,0,0,0,2.7-2.7,2.7,2.7,0,1,0-5.4,0,2.648,2.648,0,0,0,2.7,2.7ZM11.7,26.7a2.7,2.7,0,1,0,0-5.4,2.7,2.7,0,1,0,0,5.4ZM36.35,41a2.648,2.648,0,1,0-1.925-.775A2.614,2.614,0,0,0,36.35,41ZM36.35,9.7ZM11.7,24ZM36.35,38.3Z" transform="translate(-6 -4)" fill="#33d74b"/>
                        </svg>
                            <p>Поделиться</p>
                        </button>
                        </div>
                        </>
                        }
                            {share ?             
                            <VKShareButton 
                                    title={'Мои результаты набора текста, Попробуй ты!'} 
                                    url={`https://fast-type-red.vercel.app/result?words=${words}&&errors=${errorCount}&&symbols=${simbols}&&time=${localStorage.getItem('mode-time')}&&precent=${simbols ? Math.round(simbols * (100 / simbols) - errorCount * (100 / simbols)) : 0}`}>                        
                                    <VKIcon round={true} size={40}></VKIcon>
                            </VKShareButton> : ''
                            }
                    </div>
                </div>
            }
        </section>    
        </main>
        </>
    );
};

export default Type;