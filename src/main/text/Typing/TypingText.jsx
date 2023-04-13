import Typing from "../../../components/TypingBlock/Typing";
import { useTranslation } from "react-i18next";
import localesEn from './localesText/localesEN.json';
import localesRu from './localesText/localesRU.json';
import Meta from "../../../components/Meta/Meta";

const Type = () => {
    const [t] = useTranslation();
    const text = {
        modeID: 'toTime',
        mode: t('C-forTime'),
        keyboard: 'Qwerty',
        time: 60,
        words: 50,
        lang: 'English',
        section: 'text',
    }

    const localObject = 'text';

    if (localStorage.getItem(localObject) === null || localStorage.getItem(localObject) === '{}') {
        localStorage.setItem(localObject, JSON.stringify(text));
    }

    const parse = JSON.parse(localStorage.getItem(localObject));

    let ourContent = localesEn;
    if (parse.lang === 'English') {
        ourContent = localesEn;
    }
    if (parse.lang === 'Русский') {
        ourContent = localesRu;
    }

    return (
        <>
            <Meta title={t('TI-title')} canon={'text/typing'} description={t('Ti-description')} keywords={'Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training'} />
            <Typing
                localeText1={ourContent}
                parseKeyboard={parse.keyboard}
                parseLang={parse.lang}
                parseTime={parse.time}
                parseWords={parse.words}
                parseMode={parse.modeID}
                section={parse.section}
                historyLang={parse.lang}
            />
        </>
    )
};


export default Type;