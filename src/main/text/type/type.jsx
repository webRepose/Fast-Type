// import { useTranslation } from "react-i18next";
import Style from "./type.module.css";
import {useEffect, useRef, useState} from "react";
import Klava from "./Klava";

const Type = () => {
if(window.localStorage.getItem('mode-time') === null || undefined) {
    window.localStorage.setItem('mode-time', 60);
} if(window.localStorage.getItem('mode') === null || undefined) {
    window.localStorage.setItem('mode', 't-time');
} if(window.localStorage.getItem('klava') === null || undefined) {
    window.localStorage.setItem('klava', 'Qwerty');
} if(window.localStorage.getItem('lange') === null || undefined) {
    window.localStorage.setItem('lange', 'en-US');
}

const [words, setWords] = useState(0);
const [simbols, setSimbols] = useState(0);
const [errorCount, setErrorCount] = useState(0);
const [klava, setKlava] = useState(true);
const [timerVisible, setTimerVisible] = useState(true);
const [allResVsisible, setAllResVisible] = useState(true);

const [changeTextNew, setChangeTextNew] = useState(false);
const inputArea = useRef();
let [inputText, setInputText] = useState('');
let [textInputs, setTextInputs] = useState();

// const [counterClearArea , setCounterClearArea] = useState(0);

const t = [
'Таким образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации соответствующий условий активизации.'
];


useEffect(()=>{
    const textsRu = [
        // 'Разнообразный и богатый опыт консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании системы обучения кадров, соответствующей насущным потребностям! С другой стороны консультация с профессионалами из IT создаёт предпосылки качественно новых шагов для системы масштабного изменения ряда параметров. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствующей насущным потребностям? Таким образом, выбранный нами инновационный путь позволяет оценить значение системы масштабного изменения ряда параметров? Дорогие друзья, выбранный нами инновационный путь играет важную роль в формировании модели развития! Значимость этих проблем настолько очевидна, что реализация намеченного плана развития в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Практический опыт показывает, что сложившаяся структура организации обеспечивает широкому кругу специалистов участие в формировании дальнейших направлений развития проекта. Таким образом, социально-экономическое развитие обеспечивает актуальность существующих финансовых и административных условий? Задача организации, в особенности же консультация с профессионалами из IT влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции обеспечивает актуальность системы масштабного изменения ряда параметров. Разнообразный и богатый опыт выбранный нами инновационный путь позволяет выполнить важнейшие задания по разработке новых предложений! Повседневная практика показывает, что рамки и место обучения кадров обеспечивает актуальность системы обучения кадров, соответствующей насущным потребностям. Таким образом, выбранный нами инновационный путь обеспечивает актуальность позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако, забывать о том, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы масштабного изменения ряда параметров? С другой стороны курс на социально-ориентированный национальный проект играет важную роль в формировании системы масштабного изменения ряда параметров? Практический опыт показывает, что выбранный нами инновационный путь позволяет оценить значение модели...',
        'Если клиент очень умный, он сможет добиться желаемого результата. Пусть дело решается гибкостью и подобием истины, которую',
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что пустился это коварный они он то ве',
        'Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации систем массового участия.',
        'Товарищи! постоянный количественный рост и сфера нашей активности играет важную роль в формировании соответствующий условий активизации.',
        'Товарищи! сложившаяся структура организации требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.',
        'Не следует, однако забывать, что реализация намеченных плановых заданий способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных.',
        'Таким образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации соответствующий условий активизации.'
];

let textInput = textsRu[Math.floor(Math.random()*textsRu.length)];
setInputText(textInput[0]);
if(textInput === textsRu[0]) {
    setInputText(textsRu[0]);
} else if(textInput === textsRu[1]) {
    setInputText(textsRu[1]);
} else if(textInput === textsRu[2]) {
    setInputText(textsRu[2]);
} else if(textInput === textsRu[3]) {
    setInputText(textsRu[3]);
} else if(textInput === textsRu[4]) {
    setInputText(textsRu[4]);
} else if(textInput === textsRu[5]) {
    setInputText(textsRu[5]);
} else if(textInput === textsRu[6]) {
    setInputText(textsRu[6]);
}


// if(changeTextNew === false) {
//     inputArea.current.value = ''
// }

changeTextNew && 
    setTextInputs(textsRu[Math.floor(Math.random()*textsRu.length)]);
    setChangeTextNew(false);
},[changeTextNew, textInputs]);


const [isType, setIsType] = useState(false);
const getTime = (times) => times.toString().padStart(2, "0");
const [time, setTime] = useState(window.localStorage.getItem('mode-time'));
const min = getTime(Math.floor(time / 60));
const sec = getTime(time - min * 60);

useEffect(()=>{
    const interval = setInterval(()=>{
        isType && 
        setTime((time) => (time >= 1 ? time -1 : 0));
    } ,1000);

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
                timer: Math.floor(time / 60),
                words: words,
                symbols: simbols,
                errors: errorCount,
                timesNow: offsetNow,
                times: offset
        };
            historyArray.push(historyData);
            window.localStorage.setItem('HistoryData', JSON.stringify(historyArray));
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

const [i, setI] = useState(0);
const inputCheck = (event)=> {
    if(event.target.value.length === 1) {
        setIsType(prev => prev = true);
    }

    if(inputText[i-1] !== undefined || null) {
        // alert(inputText[i-1])
        if(/Android/i.test(navigator.userAgent)) {
            // inputText[i-1] = ''
            alert(event.nativeEvent.data[i-2])
            alert(event.nativeEvent.data[i-1])
            // alert(inputText[i+1])
            // alert(inputText[i])
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
        setErrorCount(prev => prev+1);
    }

    // console.log(inputArea.current.value)
    // console.log(inputText[i+1])
    // // console.log(t[0])
    // console.log()

    // if(event.target.value.length === 3) {
    //     console.log('молодец вам бан!')
    //     inputArea.current.value = ''
    //     setInputText(t[0]);
    //     setTextInputs(t[Math.floor(Math.random()*t.length)]);
    // }
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
            <div className={Style.inputMain}>
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
        </section>    
        </main>
        </>
    );
};

export default Type;