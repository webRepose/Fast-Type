import { useMemo } from "react";
import { Router, useLocation } from "react-router-dom";

const ResultShare = () => {
    // const router = useLocation()
    // console.log(router)
    function useQuery() { 
        const { search } = useLocation(); 
        return useMemo(() => new URLSearchParams(search), [search]); 
    }

    let query = useQuery();
    console.log(query.get('words'))
    console.log(query.get('error'))
    return (
        <main>
        <h1>Слово: {query.get('words') !== null && query.get('words')}</h1>
        <h1>Ошибки: {query.get('errors') !== null && query.get('errors')}</h1>
        <h1>Результат проценты: {query.get('precent') !== null && query.get('precent')}</h1>
        <h1>Символы: {query.get('symbols') !== null && query.get('symbols')}</h1>
        <h1>Таймер: {query.get('time') !== null && query.get('time')}</h1>
        </main>
    );
};

export default ResultShare;