import Style from "./Home.module.css"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Home() {
    const [t] = useTranslation();
    document.title = 'Fast Type';
    return (
        <>
        <main>
            <section className={Style.homeWelcome}>
                <h2>{t('H-Welcome')}</h2>
                <h3>{t('H-Traning')}</h3>
            </section>
            <section className={Style.homeTest}>
                <h3>{t('H-Test')}</h3>
                <button title={t('H-Pass')} className={Style.homeTestStart}>{t('H-Pass')}</button>
            </section>
            <section className={Style.homeStats}>
                <div className={Style.homeStatsBlock}>
                    <div className={Style.homeStatsSub} title={t('H-Stat')}>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#5161F9'}}>
                                <img src='./img/home/stats.webp' loading="lazy" alt={t('H-Stat')}/>
                            </div>
                        <p>{t('H-Stat')}</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title={t('H-Hist')}>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#33D74B'}}>
                                <img src='./img/home/history.webp' loading="lazy" alt={t('H-Hist')}/>
                            </div>
                        <p>{t('H-Hist')}</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title={t('H-Work')}>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#EDC4B0'}}>
                                <img src='./img/home/work.webp' loading="lazy" alt={t('H-Work')}/>
                            </div>
                        <p>{t('H-Work')}</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title={t('H-Guid')}>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#4B33E7'}}>
                                <img src='./img/home/guid.webp'loading="lazy" alt={t('H-Guid')}/>
                            </div>
                        <p>{t('H-Guid')}</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title={t('H-Help')}>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#9888D2'}}>
                                <img src='./img/home/what.webp' loading="lazy" alt={t('H-Help')}/>
                            </div>
                        <p>{t('H-Help')}</p>
                        </Link>
                    </div>

                    <div id={Style.courses} className={Style.homeStatsSub} title={t('Courses')}>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#652F6B'}}>
                                <img loading="lazy" src='./img/home/course.webp' alt={t('Courses')}/>
                            </div>
                        <p>{t('Courses')}</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};

export default Home;