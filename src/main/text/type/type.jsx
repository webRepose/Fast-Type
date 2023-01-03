import { useTranslation } from "react-i18next";
import Style from "./type.module.css";
import TypeKlava from './KlavaFourLine.json';
import KlavaThird from './KlavaThirdLine.json';
import KlavaSecond from './KlavaSecondLine.json'
import KlavaFirst from './KlavaFirstLine.json'

function Type() {

    // const textsRu = [
    //     'Разнообразный и богатый опыт консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании системы обучения кадров, соответствующей насущным потребностям! С другой стороны консультация с профессионалами из IT создаёт предпосылки качественно новых шагов для системы масштабного изменения ряда параметров. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствующей насущным потребностям? Таким образом, выбранный нами инновационный путь позволяет оценить значение системы масштабного изменения ряда параметров? Дорогие друзья, выбранный нами инновационный путь играет важную роль в формировании модели развития! Значимость этих проблем настолько очевидна, что реализация намеченного плана развития в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям. Практический опыт показывает, что сложившаяся структура организации обеспечивает широкому кругу специалистов участие в формировании дальнейших направлений развития проекта. Таким образом, социально-экономическое развитие обеспечивает актуальность существующих финансовых и административных условий? Задача организации, в особенности же консультация с профессионалами из IT влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции обеспечивает актуальность системы масштабного изменения ряда параметров. Разнообразный и богатый опыт выбранный нами инновационный путь позволяет выполнить важнейшие задания по разработке новых предложений! Повседневная практика показывает, что рамки и место обучения кадров обеспечивает актуальность системы обучения кадров, соответствующей насущным потребностям. Таким образом, выбранный нами инновационный путь обеспечивает актуальность позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако, забывать о том, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы масштабного изменения ряда параметров? С другой стороны курс на социально-ориентированный национальный проект играет важную роль в формировании системы масштабного изменения ряда параметров? Практический опыт показывает, что выбранный нами инновационный путь позволяет оценить значение модели...',
    //     'Если клиент очень умный, он сможет добиться желаемого результата. Пусть дело решается гибкостью и подобием истины, которую',
    //     'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что пустился это коварный они он то ве',
    // ];
    
    // const textsKeyRu = [textsRu[0].split(''),textsRu[1].split(''),textsRu[2].split(''),];
    
    
    // let textInput = textsRu[Math.floor(Math.random()*textsRu.length)];
    // document.querySelector('#tt-input-t-p').value = textInput[0];
    // if(textInput == textsRu[0]) {
    //     document.querySelector('#tt-input-t-p').innerHTML = textsRu[0];
    // } else if(textInput == textsRu[1]) {
    //     document.querySelector('#tt-input-t-p').innerHTML = textsRu[1];
    // } else if(textInput == textsRu[2]) {
    //     document.querySelector('#tt-input-t-p').innerHTML = textsRu[2];
    // }
    
    
    // document.querySelector('.tt-input-change').addEventListener('click', ()=>{
    //     location.reload();
    // });
    
    // document.querySelector('#tt-input-area').onkeydown = function(e) {
    //     if(e.keyCode == '8') {
    //         return false;
    //     }
    // };


//     const blockInput = document.querySelector('.tt-input-text'),
// inputArea =  document.querySelector('#tt-input-area'),
// inputText = document.querySelector('#tt-input-t-p'),
// inputErorr = document.querySelector('.tt-input-error'),
// inputWords = document.querySelector('.tt-input-words'),
// inputSimbols = document.querySelector('.tt-input-simbols'),
// timerBlock = document.querySelector('.tt-input-timer_block'),
// timerRes = document.querySelector('.tt-count-time-res');
// timerBlock.addEventListener('click', ()=>{
//     timerBlock.classList.toggle('_disabledOpacity');
// })


// const storageMin = window.localStorage.getItem('min');
// let ttTimer = document.querySelector('.tt-input-timer');
// let ttTimerSec = document.querySelector('.tt-input-timer-sec');
// let ttTimerCount = 0;
// let ttTimerCountSec = 0;

// function statsTimer() {
//     ttTimerCountSec = 59;
//     ttTimer.innerHTML = ttTimerCount + ':';
//     ttTimerSec.innerHTML = ttTimerCountSec;
// }

// let timerHis;
// if(storageMin) {
//     if(storageMin == 'one') {
//         ttTimerCount = 0;
//         statsTimer();
//         timerRes.innerHTML = '0:59';
//         timerHis = '1 мин';
//     } else if(storageMin == 'three') {
//         ttTimerCount = 2;
//         statsTimer();
//         timerRes.innerHTML = '2:59';
//         timerHis = '3 мин';
//     } else if(storageMin == 'five') {
//         ttTimerCount = 4;
//         statsTimer();
//         timerRes.innerHTML = '4:59';
//         timerHis = '5 мин';
//     }
// }

// function timerSec() {
//     ttTimerCountSec--;
//     ttTimerSec.innerHTML = ttTimerCountSec;
//     if(ttTimerCountSec < 10) {
//         ttTimerSec.innerHTML = '0' + ttTimerCountSec;
//     }
//     if(ttTimerCountSec == 0) {
//         ttTimerCountSec = 59;
//         ttTimerCount--;
//         ttTimerSec.innerHTML = ttTimerCountSec;
//         ttTimer.innerHTML = ttTimerCount + ':';
//     }
//     else if(ttTimerCount == 0 && ttTimerCountSec == 1) {
//             clearInterval(intervalStart);
//             ttTimerSec.innerHTML = '00';
//             setTimeout(()=>{
//                 document.querySelector('.tt-input-blur-eff').classList.add('tt-input-result');
//                 document.querySelector('.tt-input-blur').classList.add('_active');
//                 inputArea.blur();
//                 inputArea.value = '';
//                 document.querySelector('html').style.overflow = 'hidden';
//             }, 0);
            

//             let historyMode;
//             if(window.localStorage.getItem('mode') == 'word-input'){
//                 historyMode = 'Ввод текста';
//             } else if(window.localStorage.getItem('mode') == 'time-input') {
//                 historyMode = 'Ввод текста';
//             }
//             let offset = new Date().toLocaleDateString();
//             let offsetNow = new Date().toLocaleTimeString();


//             let check = JSON.parse(localStorage.getItem('HistoryData'));
//             let historyArray;
//             if(check!==null) {
//                 historyArray = check;
//             } else {
//                 historyArray = [];
//             }
            
//             let historyData =
//             {
//                     mode: historyMode,
//                     timer: timerHis,
//                     words: wordsCount,
//                     symbols: simbolsCount,
//                     errors: errorCount,
//                     timesNow: offsetNow,
//                     times: offset 
//             };
//                 historyArray.push(historyData);
//                 window.localStorage.setItem('HistoryData', JSON.stringify(historyArray));

//     }
// }



// let countClickTimer = 0;
// let intervalStart = 0;
// function startTimer() {
//     countClickTimer++;
//     if(countClickTimer >= 2) {
//         return false;
//     }

//         if (storageMin == 'three') {
//                 intervalStart = setInterval(()=>{
//                 timerSec();
//             }, 1000);
//         } else if (storageMin == 'one') {
//                 intervalStart = setInterval(()=>{
//                 timerSec();
//             }, 100);
//         } else if (storageMin == 'five') {
//                 intervalStart = setInterval(()=>{
//                 timerSec();
//             }, 1000);
//         }
//     }

    // function backSpace() {
    // var backFun = inputArea.value;
    // backFun = backFun.substr(0,backFun.length - 1);
    // inputArea.value = backFun;
    // }

//     let d = 0;
//     let simbolsCount = 0,
//     errorCount = 0,
//     wordsCount = 0,
//     rightValue = 0;
//     inputArea.addEventListener('keypress', (event)=>{
//         startTimer();
//         if(inputText.value === event.key) {
//             rightValue++;
//             inputText.value = textInput[rightValue];
//             if(event.key == ' ' || event.key == '-' ) {
//                 wordsCount++;
//                 inputWords.innerHTML = wordsCount;
//                 window.localStorage.setItem('WordsCount', wordsCount);
//                 document.querySelector('.tt-count-word-res').innerHTML = wordsCount;
//             }
//             else if(textInput[rightValue]) {
//                 simbolsCount++;
//                 inputSimbols.innerHTML = simbolsCount;
//                 window.localStorage.setItem('SimbolsCount', simbolsCount);
//                 document.querySelector('.tt-count-simbol-res').innerHTML = simbolsCount;
//             }
            

//         } else {
//             errorCount++;
//             inputErorr.innerHTML = errorCount;
//             window.localStorage.setItem('ErrorsCount', errorCount);
//             document.querySelector('.tt-count-error-res').innerHTML = errorCount;
//             setTimeout(backSpace, 0);
//             blockInput.style.border = '1px solid red';
//             setTimeout(()=>{
//                 blockInput.style.border = '1px solid #686868';
//             }, 500);
//         }
//     });


//     if(location.reload) {
//         window.localStorage.setItem('SimbolsCount', simbolsCount);
//         window.localStorage.setItem('WordsCount', wordsCount);
//         window.localStorage.setItem('ErrorsCount', errorCount);
//     }


//     if(window.localStorage.getItem('mode') == 'word-input') {
//         const storageWords = window.localStorage.getItem('words');
//         if(storageWords) {
//             if(storageWords == '50') {
//                 console.log('50');
//             } else if(storageWords == '70') {
//                 console.log('70');
//             } else if(storageWords == '100') {
//                 console.log('100');
//             }
//         }
//     }

// let timerHis;
// if(storageMin) {
//     if(storageMin == 'one') {
//         ttTimerCount = 0;
//         statsTimer();
//         timerRes.innerHTML = '0:59';
//         timerHis = '1 мин';
//     } else if(storageMin == 'three') {
//         ttTimerCount = 2;
//         statsTimer();
//         timerRes.innerHTML = '2:59';
//         timerHis = '3 мин';
//     } else if(storageMin == 'five') {
//         ttTimerCount = 4;
//         statsTimer();
//         timerRes.innerHTML = '4:59';
//         timerHis = '5 мин';
//     }
// }

// let countClickTimer = 0;
// let intervalStart = 0;
// function startTimer() {
//     countClickTimer++;
//     if(countClickTimer >= 2) {
//         return false;
//     }

//         if (storageMin == 'three') {
//                 intervalStart = setInterval(()=>{
//                 timerSec();
//             }, 1000);
//         } else if (storageMin == 'one') {
//                 intervalStart = setInterval(()=>{
//                 timerSec();
//             }, 100);
//         } else if (storageMin == 'five') {
//                 intervalStart = setInterval(()=>{
//                 timerSec();
//             }, 1000);
//         }
//     }

const inputArea = document.querySelector('.'+Style.inputArea);


function backSpace() {
    let backFun = inputArea.value;
    backFun = backFun.substr(0,backFun.length - 1);
    inputArea.value = backFun;
} 


const text = 'Е'


const inputCheck = (event)=> {
    if(event.nativeEvent.data === null) {
        event.preventDefault();
        return false;
    }

    // if(event.keyCode == 8) {
    //     event.preventDefault();
    //     return false;
    // }

    console.log(event)

    console.log(event.nativeEvent.data)

    if(text.valueOf() === event.nativeEvent.data) {
        console.log('ban')
    }
    else {
        setTimeout(backSpace, 0); 
    } 
}


const [t] = useTranslation();

    return (
        <>
        <main>
        <section className={Style.choiceParams}>
            <h3>Набирайте текст</h3>
        </section>
        <section className={Style.choiceParams}>
            <div className={Style.inputMain}>
            <div className={Style.inputBlock}>
                <p className={Style.inputText}>{text}</p>
                <textarea onInput={inputCheck} autoFocus className={Style.inputArea} formvalidate='formNoValidate' spellCheck="false" onPaste={()=>{return false}} autoComplete="off"></textarea>
            </div>
            </div>
            <div className={Style.klava}>
                <div className={Style.klavaLine}>
                {KlavaFirst.map((lan, i)=>(
                    <div className={`${lan['stBtn']}`} key={i}>
                        <p><sub>{t(lan['klavaOne'])}</sub><sup>{t(lan['klavaTwo'])}</sup></p>
                    </div>
                ))}
                </div>
                <div className={Style.klavaLine}>
                {KlavaSecond.map((lan, i)=>(
                    <div className={`${lan['stBtn']}`} key={i}>
                        <p><sub>{t(lan['klavaOne'])}</sub><sup>{t(lan['klavaTwo'])}</sup></p>
                    </div>
                ))}
                </div>
                <div className={Style.klavaLine}>
                {KlavaThird.map((lan, i)=>(
                    <div className={`${lan['stBtn']}`} key={i}>
                        <p><sub>{t(lan['klavaOne'])} </sub><sup>{t(lan['klavaTwo'])}</sup></p>
                    </div>
                ))}
                </div>
                <div className={Style.klavaLine}>
                {TypeKlava.map((lan, i)=>(
                    <div className={`${lan['stBtn']}`} key={i}>
                        <p><sub>{t(lan['klavaOne'])}</sub> <sup>{t(lan['klavaTwo'])}</sup></p>
                    </div>
                ))}
                </div>
                <div className={Style.klavaLine}>
                <div className={Style.klavaSpace}></div>
                </div>
            </div>
        </section>    
        </main>
        </>
    );
};

export default Type;