import LocalizedStrings from 'react-localization';
import Style from '../../styles/Components/Keyboards/Keyboards.module.css';
import QwertyFirst from './Qwerty/QwertyFirst.json';
import QwertySecond from './Qwerty/QwertySecond.json';
import QwertyThird from './Qwerty/QwertyThird.json';
import QwertyFour from './Qwerty/QwertyFour.json';

import ColemakSecond from './Colemak/ColemakSecond.json';
import ColemakThird from './Colemak/ColemakThird.json';
import ColemakFour from './Colemak/ColemakFour.json';

import DvorakFirst from './Dvorak/DvorakFirst.json';
import DvorakSecond from './Dvorak/DvorakSecond.json';
import DvorakThird from './Dvorak/DvorakThird.json';
import DvorakFour from './Dvorak/DvorakFour.json';

const Qwerty = ({keyboard, lang}) => {
    let QLocale = new LocalizedStrings({
        en: {
            "T-`": "`",
            "T-~": "~",
            "T-1": "1",
            "T-!": "!",
            "T-2": "2",
            "T-@": "@",
            "T-3": "3",
            "T-#": "#",
            "T-4": "4",
            "T-$": "$",
            "T-5": "5",
            "T-%": "%",
            "T-6": "6",
            "T-^": "^",
            "T-7": "7",
            "T-&": "&",
            "T-8": "8",
            "T-*": "*",
            "T-9": "9",
            "T-(": "(",
            "T-0": "0",
            "T-)": ")",
            "T--": "-",
            "T-_": "_",
            "T-=": "=",
            "T-+": "+",
            "T-backspace": "Backspace",

            "T-tab": "Tab",
            "T-q": "Q",
            "T-w": "W",
            "T-e": "E",
            "T-r": "R",
            "T-t": "T",
            "T-y": "Y",
            "T-u": "U",
            "T-i": "I",
            "T-o": "O",
            "T-p": "P",
            "T-[": "[",
            "T-{": "{",
            "T-]": "]",
            "T-}": "}",
            "T-/": "/",
            "T-|": "|",

            "T-caps": "CapsLock",
            "T-a": "A",
            "T-s": "S",
            "T-d": "D",
            "T-f": "F",
            "T-g": "G",
            "T-h": "H",
            "T-j": "J",
            "T-k": "K",
            "T-l": "L",
            "T-;": ";",
            "T-;;": ":",
            "T-'": "'",
            "T-enter": "Enter",

            "T-shift": "Shift",
            "T-z": "Z",
            "T-x": "X",
            "T-c": "C",
            "T-v": "V",
            "T-b": "B",
            "T-n": "N",
            "T-m": "M",

            "T-,": ",",
            "T-<": "<",
            "T-.": ".",
            "T->": ">",
            "T-//": "/",
            "T-?": "?"
        },
        ru: {
            "T-`": "Ё",
            "T-~": "~",
            "T-1": "1",
            "T-!": "!",
            "T-2": "2",
            "T-@": "@",
            "T-3": "3",
            "T-#": "#",
            "T-4": "4",
            "T-$": "$",
            "T-5": "5",
            "T-%": "%",
            "T-6": "6",
            "T-^": "^",
            "T-7": "7",
            "T-&": "&",
            "T-8": "8",
            "T-*": "*",
            "T-9": "9",
            "T-(": "(",
            "T-0": "0",
            "T-)": ")",
            "T--": "-",
            "T-_": "_",
            "T-=": "=",
            "T-+": "+",
            "T-backspace": "Backspace",

            "T-tab": "Tab",
            "T-q": "Й",
            "T-w": "Ц",
            "T-e": "У",
            "T-r": "К",
            "T-t": "Е",
            "T-y": "Н",
            "T-u": "Г",
            "T-i": "Ш",
            "T-o": "Щ",
            "T-p": "З",
            "T-[": "Х",
            "T-{": "{",
            "T-]": "Ъ",
            "T-}": "}",
            "T-/": "/",
            "T-|": "|",

            "T-caps": "CapsLock",
            "T-a": "Ф",
            "T-s": "Ы",
            "T-d": "В",
            "T-f": "А",
            "T-g": "П",
            "T-h": "Р",
            "T-j": "О",
            "T-k": "Л",
            "T-l": "Д",
            "T-;": "Ж",
            "T-;;": "",
            "T-'": "Э",
            "T-enter": "Enter",

            "T-shift": "Shift",
            "T-z": "Я",
            "T-x": "Ч",
            "T-c": "С",
            "T-v": "М",
            "T-b": "И",
            "T-n": "Т",
            "T-m": "Ь",

            "T-,": "Б",
            "T-<": "",
            "T-.": "Ю",
            "T->": "",
            "T-//": ".",
            "T-?": ","
        }
    });


    switch (lang) {
        case "English":
            QLocale.setLanguage('en');
            break;
        case "Русский":
            QLocale.setLanguage('ru');
            break;
        default:
            QLocale.setLanguage('en');
    }


    return (
        <section>
            {keyboard === 'Qwerty' &&
                <div className={Style.klava}>
                    <div className={Style.klavaLine}>
                        {QwertyFirst.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {QwertySecond.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {QwertyThird.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {QwertyFour.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div translate="no" className={Style.klavaLine}>
                        <div translate="no" id=" " className={Style.klavaSpace}></div>
                    </div>
                </div>
            }

            {keyboard === 'Colemak' &&
                <div className={Style.klava}>
                    <div className={Style.klavaLine}>
                        {QwertyFirst.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {ColemakSecond.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {ColemakThird.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {ColemakFour.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div translate="no" className={Style.klavaLine}>
                        <div translate="no" id=" " className={Style.klavaSpace}></div>
                    </div>
                </div>
            }

            {keyboard === 'Dvorak' &&
                <div className={Style.klava}>
                    <div className={Style.klavaLine}>
                        {DvorakFirst.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {DvorakSecond.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {DvorakThird.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.klavaLine}>
                        {DvorakFour.map((lan, i) => (
                            <div translate="no" id={QLocale[lan['klavaOne']]} className={`${lan['stBtn']}`} key={i}>
                                <p translate="no"><sub>{QLocale[lan['klavaOne']]}</sub><sup>{QLocale[lan['klavaTwo']]}</sup></p>
                            </div>
                        ))}
                    </div>
                    <div translate="no" className={Style.klavaLine}>
                        <div translate="no" id=" " className={Style.klavaSpace}></div>
                    </div>
                </div>
            }
        </section>
    );
};


export default Qwerty;