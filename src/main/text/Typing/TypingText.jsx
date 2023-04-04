import Typing from "../../../components/TypingBlock/Typing";
import { useTranslation } from "react-i18next";
import localesEn from './localesText/localesEN.json';
import localesRu from './localesText/localesRU.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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