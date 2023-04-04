import { useTranslation } from "react-i18next";
import Typing from "../../../components/TypingBlock/Typing";
import JavaScript from '../../code/TypingCode/localesText/JavaScript.json';
import secondFile from '../../code/TypingCode/localesText/CSS.json';
import thirdFile from '../../code/TypingCode/localesText/HTML.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const TypeCode = () => {
    const [t] = useTranslation();
    const code = {
        modeID: 'toTime',
        mode: t('C-forTime'),
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
            <HelmetProvider>
                <Helmet>
                    <title>{t('TI-title')}</title>
                    <meta name="description" content={t('TI-description')}></meta>
                    <link rel="canonical" href="https://fast-type-red.vercel.app/text/typing" />
                    <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
                    <meta name="keywords" content="Тренажер слепой печати, Слепая печать, Уроки слепой печати, Тренинг печати, Тренинг слепой печати, Blind Print Trainer, Blind Print, Blind Print Lessons, Blind Print Training, Blind Print Training"></meta>
                    <meta name="apple-mobile-web-app-title" content={t('TI-title')}></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={t('TI-title')}></meta>
                    <meta property="og:description" content={t('TI-description')}></meta>
                    <meta property="og:image" content="../../../../../public/img/logo.png"></meta>
                    <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
                </Helmet>
            </HelmetProvider>
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