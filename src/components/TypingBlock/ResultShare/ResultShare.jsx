import Style from '../../../styles/Components/TypingCode/ResultShare/ResultShare.module.css';
import Section from "../../Section";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResultShare = () => {
    const [t] = useTranslation();
    document.title = t('TR-res');
    const useQuery = () => {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }

    let query = useQuery();

    return (
        <main>
            <Section>
                <h1>{t('TR-res')}</h1>
                <h1>{t('TR-type')}</h1>
                <div className={Style.center}>
                    <div>
                        <div><p>{t('T-counWord') + ':'} {query.get('words') !== null && <p>{query.get('words')}</p>}</p></div>
                        <div><p>{t('TR-sym') + ':'} {query.get('symbols') !== null && <p>{query.get('symbols')}</p>}</p></div>
                        <div><p>{t('TR-err') + ':'} {query.get('errors') !== null && <p>{query.get('errors')}</p>}</p></div>
                    </div>
                    <div>
                        <div><p>{t('TR-right')} {query.get('precent') !== null && <p>{query.get('precent')}%</p>}</p></div>
                        <div>
                            <p>{t('TR-for') + ' '}
                                {localStorage.getItem('mode') !== 't-word'
                                    ? query.get('time') !== null && <p>{query.get('time') / 60 + t('TR-min')}</p>
                                    : query.get('timeSelf') !== null && <p>{query.get('timeSelf') + t('TR-min')}</p>}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Style.choiceParams}>
                    <h2>{t('TR-canMore')}</h2>
                    <Link to='/text/typing'>
                        <button title={t('TR-try')}>{t('TR-try')}</button>
                    </Link>
                    <h2>{t('TR-noTrust')}</h2>
                    <Link to='/'>
                        <button title={t('TR-tryCourse')} style={{ background: 'linear-gradient(#6157FF, #EE49FD)' }}>{t('TR-tryCourse')}</button>
                    </Link>
                </div>
            </Section>
        </main>
    );
};

export default ResultShare;