import Style from '../../../styles/Home/History/History.module.css';
import { useEffect, useState } from 'react';
import Section from '../../../components/Section/Section';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GreenButton from '../../../components/GreenButton/GreenButton';
import Back from '../../../components/Back/Back';


const History = () => {
    document.querySelector('html').style.overflow = '';
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
            <Back/>
                <h3>{t('H-Hist')}</h3>
                {checkHistory ? 
                <>
                <GreenButton onClick={clear}>{t('HH-clear')}</GreenButton>
                <div className={Style.historyBlock}>
                {
                    checkHistory !== null && checkHistory.map((result, index) =>
                    <Link key={index} to={'./'+ index}>
                    <div title={t('HH-tapTo')} key={index} className={Style.historyBlockSub}>
                        <h4><img src='./img/home/History/HistoryID/modeHis.svg' alt="icon"/> {t('HH-mode')}</h4>
                        <p>{result.mode}</p>
                        <h4><img src='./img/home/History/HistoryID/timeHis.svg' alt="icon"/> {t('HH-timeInput')}</h4>
                        <p>{result.timer + t('TR-min')}</p>
                        <div className={Style.historyBlockSubTime}>
                        <p>{result.times}</p>
                        <p>{result.timesNow}</p>
                        </div>
                    </div>
                    </Link>
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
                    <GreenButton title={t('HH-try')}>{t('HH-try')}</GreenButton>
                    </Link>
                    </div>
                </div>
                }
            </Section>
        </main>
    );
};

export default History;