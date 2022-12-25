import Style from '../header/Header.module.css';
import { useTranslation } from 'react-i18next';
import {useEffect, useRef, useState } from "react";

const Lang = () => {
    const htmlDOM = document.querySelector('html')
    htmlDOM.setAttribute('lang', localStorage.getItem('i18nextLng'))
    const [t, i18n] = useTranslation();
    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }
    let [lang, setLang] = useState(false);
    const changLang = lang ? 'block' : 'none';
    const langClass = [Style.langChange, changLang];
    let langRefUl = useRef()
    let langRefButton = useRef()
    useEffect(()=>{
        let handler = (event)=>{
        if(!langRefUl.current.contains(event.target) && !langRefButton.current.contains(event.target) ) {
            setLang(false);
        }
    }
        document.addEventListener('mousedown', handler)
        return ()=>{
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <>
        <button title={t('changLang')} className={Style.lang} ref={langRefButton} onClick={()=>{
            setLang(prev => !prev)
        }}>
        <svg className={Style.translateIcon} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <path d="M12.334,25l4.3-12.6h1.948L23,25H20.933l-.974-3.307H15.4L14.282,25Zm3.587-5.145h3.373l-1.663-5.093h-.048ZM4.851,21.85,3.544,20.406,8.39,15.051a22.959,22.959,0,0,1-1.6-2.323A18.465,18.465,0,0,1,5.563,10.3H7.63a14.919,14.919,0,0,0,.891,1.641q.487.774,1.1,1.588a14.134,14.134,0,0,0,1.782-2.559A18.814,18.814,0,0,0,12.619,8.2H2V6.1H8.652V4h1.9V6.1H17.2V8.2H14.519a21.193,21.193,0,0,1-1.39,3.557A18.467,18.467,0,0,1,11,15.077l2.328,2.6L12.619,19.8,9.6,16.6Z" transform="translate(-2 -4)" fill="#33d74b"/>
        </svg>
        <p>{t('English')}</p>
        </button>
        <ul ref={langRefUl} className={langClass.join(' ')}>
            <li title='English' onClick={()=>{
                setLang(false)
                changeLanguage("en")
                htmlDOM.setAttribute('lang', localStorage.getItem('i18nextLng'))
            }}>English</li>
            <li title='Русский' onClick={()=>{
                setLang(false)
                changeLanguage("ru")
                htmlDOM.setAttribute('lang', localStorage.getItem('i18nextLng'))
            }}>Русский</li>
        </ul>
        </>
    );
};


export default Lang;