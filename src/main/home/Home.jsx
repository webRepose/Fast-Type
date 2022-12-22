import Style from "./Home.module.css"
import { Link } from "react-router-dom";
function Home() {
    document.title = '228';
    return (
        <>
        <main>
            <section className={Style.homeWelcome}>
                <h2>Добро пожаловать на Fast type</h2>
                <h3>Здесь вы можете  тренировать слепую печать и улучшать скорость вашего набора.</h3>
            </section>
            <section className={Style.homeTest}>
                <h3>Пройдите тест набора слов что бы мы смогли определить ваш уровень</h3>
                <button className={Style.homeTestStart}>Пройти</button>
            </section>
            <section className={Style.homeStats}>
                <div className={Style.homeStatsBlock}>
                    <div className={Style.homeStatsSub} title='Statistics'>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#5161F9'}}>
                                <img src='./img/stats.svg' alt="statistic"/>
                            </div>
                        <p>Statistics</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title='History'>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#33D74B'}}>
                                <img src='./img/history.svg' alt="history"/>
                            </div>
                        <p>History</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title='Work on errors'>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#EDC4B0'}}>
                                <img src='./img/work.svg' alt="work on errors"/>
                            </div>
                        <p>Work on errors</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title='Guids'>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#4B33E7'}}>
                                <img src='./img/guid.svg' alt="guids"/>
                            </div>
                        <p>Guids</p>
                        </Link>
                    </div>
                    <div className={Style.homeStatsSub} title='Help'>
                        <Link to='/'>
                            <div className={Style.homeStatsImg} style={{backgroundColor: '#9888D2'}}>
                                <img src='./img/what.svg' alt="Help" />
                            </div>
                        <p>Help</p>
                        </Link>
                    </div>
                    {/* <div className={Style.homeStatsSub}>
                        
                    </div> */}
                </div>
            </section>
        </main>
        </>
    );
};

export default Home;