import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Style from "./ResultShare.module.css";
import { Link } from "react-router-dom";
const ResultShare = () => {
    function useQuery() { 
        const { search } = useLocation(); 
        return useMemo(() => new URLSearchParams(search), [search]); 
    }

    let query = useQuery();
    return (
        <main>
            <section className={Style.choiceParams}>
            <h3>Мои результаты !</h3>
            </section>
            <section className={Style.choiceParams}>
            <h1>Я набрал:</h1>
            <div className={Style.center}>
                <div>
                <div><p>Слов: {query.get('words') !== null && <p>{query.get('words')}</p>}</p></div>
            <div><p>Символов: {query.get('symbols') !== null && <p>{query.get('symbols')}</p>}</p></div>
            <div><p>Ошибок: {query.get('errors') !== null && <p>{query.get('errors')}</p>}</p></div>
                </div>
                <div>
                <div><p>Правильно ввел: {query.get('precent') !== null && <p>{query.get('precent')}%</p>}</p></div>
            <div><p>За {query.get('time') !== null && <p>{query.get('time') / 60 + ' мин'}</p>}</p></div>
                </div>
            </div>
            <h2>Сможешь набрать больше?</h2>
            <Link to='/'>
            <button>Попробовать</button>
            </Link>
            <h2>Не уверен?</h2>
            <button style={{background: 'var(--gradient1-color)'}}>Попробовать курсы</button>
            </section>
        </main>
    );
};

export default ResultShare;