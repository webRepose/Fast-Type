import Style from '../../../styles/Home/History/History.module.css';
import { useEffect, useState } from 'react';
import Section from '../../../components/Section/Section';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const History = () => {
    const [t] = useTranslation();
    document.title = t('H-Hist');

    const [checkHistory, setChechHistory] = useState(null);
    useEffect(()=>{
        setChechHistory(prev => prev = JSON.parse(localStorage.getItem('HistoryData')));
    },[])


    const clear = () => {
        const conf = window.confirm(t('HH-confirm'));
        if(conf === true) {
            window.localStorage.removeItem('HistoryData');
            window.location.reload();
        }
    }

    return (
        <main>
            <Section>
                <h3>{t('H-Hist')}</h3>
                {checkHistory ? 
                <>
                <button onClick={clear} className={Style.clearHistory}>{t('HH-clear')}</button>
                <div className={Style.historyBlock}>
                {
                    checkHistory !== null && checkHistory.map((result, index) =>
                    <div title={t('HH-tapTo')} key={index} className={Style.historyBlockSub}>
                        <h4>{t('HH-mode')}</h4>
                        <p>{result.mode}</p>
                        <h4>{t('HH-timeInput')}</h4>
                        <p>{result.timer + t('TR-min')}</p>
                        <div className={Style.historyBlockSubTime}>
                        <p>{result.times}</p>
                        <p>{result.timesNow}</p>
                        </div>
                    </div>
                    )
                }
                </div>
                </>
                : 
                <div className={Style.historyBlockEmpty}>
                    <div>
                    <h4>{t('HH-empty')}</h4>
                    <img src="./img/home/History/Empty1.png" alt='Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>' />
                    <h4>{t('HH-tryNow')}</h4>
                    <Link to='/text/type'>
                    <button className={Style.clearHistory}>{t('HH-try')}</button>
                    </Link>
                    </div>
                </div>
                }
            </Section>
        </main>
    );
};

export default History;