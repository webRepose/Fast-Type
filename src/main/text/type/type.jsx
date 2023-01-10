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

const inputArea = useRef();
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
                timer: localStorage.getItem('mode-time'),
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

const inputCheck = (event)=> {
    if(event.target.value.length === 1) {
        setIsType(prev => prev = true);
    }

    // if(/Android/i.test(navigator.userAgent)) {
    //     if(inputText[i-1] !== undefined || null) {
    //     console.log(event.nativeEvent.data[i-1])
    //     // event.nativeEvent.data[i-1] = ''
    //     // event.nativeEvent.data[i-1] = null;
    //     }
    // }
    console.log(event)

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