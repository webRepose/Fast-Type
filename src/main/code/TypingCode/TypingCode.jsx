import { useTranslation } from "react-i18next";
import Typing from "../../../components/TypingBlock/Typing";
import JavaScript from '../../code/TypingCode/localesText/JavaScript.json';
import secondFile from '../../code/TypingCode/localesText/CSS.json';
import thirdFile from '../../code/TypingCode/localesText/HTML.json';
import Meta from "../../../components/Meta";

const TypeCode = () => {
    const [t] = useTranslation();
    const code = {
        modeID: 'toTime',
        mode: 'C-forTime',
        keyboard: 'Qwerty',
        time: 60,
        words: 50,
        codeProgLang: 'JavaScript',
        lang: 'English',
        section: 'code',
    }

    const localObject = 'code';

    if (localStorage.getItem(localObject) === null || localStorage.getItem(localObject) === '{}') {
        localStorage.setItem(localObject, JSON.stringify(code));
    }

    const parse = JSON.parse(localStorage.getItem(localObject));

    let ourContent = JavaScript;
    if (parse.codeProgLang === 'JavaScript') {
        ourContent = JavaScript;
    }
    if (parse.codeProgLang === 'CSS') {
        ourContent = secondFile;
    }
    if (parse.codeProgLang === 'HTML') {
        ourContent = thirdFile;
    }

    return (
        <>
            <Meta title={t('TC-title')} canon={'code/typing'} description={t('TI-description')} keywords={'Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training'} />
            <Typing
                localeText1={ourContent}
                parseKeyboard={parse.keyboard}
                parseLang={parse.lang}
                parseLangProg={parse.codeProgLang}
                parseTime={parse.time}
                parseWords={parse.words}
                parseMode={parse.modeID}
                section={parse.section}
                historyLang={parse.codeProgLang}
            />
        </>
    )
}

export default TypeCode;