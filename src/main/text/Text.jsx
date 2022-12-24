import { useState } from "react";
import Style from "./Text.module.css"
import { useEffect, useRef } from "react";
function Text() {
    document.title = 'Набор текста'
    const [klava, setKlava] = useState(false);
    const klavaClass = klava ?  'flex' : '';
    const klavaClassAbsolute = klava ?  'block' : '';
    const klavaClassText = klava ?  'blockText' : 'none';
    const ourKlavaClass = [Style.paramsChoice, klavaClassAbsolute]
    if(klava) {document.querySelector('html').style.overflow= 'hidden'}
    else {document.querySelector('html').style.overflow= ''} 
    if(window.localStorage.getItem('klava') === null) {
        window.localStorage.setItem('klava', 'Qwerty');
    }

    let langRefButton = useRef()
    useEffect(()=>{
        let handler = (event)=>{
        if(!langRefButton.current.contains(event.target) ) {
            setKlava(false);
        }
    }
        document.addEventListener('mousedown', handler)
        return ()=>{
            document.removeEventListener('mousedown', handler)
        }
    })


    return (
        <>
        <main>
            <section className={Style.choiceParams}>
                <h3>Выберите параметры:</h3>
            </section>
            <section className={Style.params}>
                <div className={Style.paramsBlock}>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>Выберите раскладку:</p>
                        </div>
                        <div>
                        <button className={Style.paramsSelect} onClick={()=>{
                        setKlava(prev => !prev)
                        }}>Qwerty</button>
                        </div>
                    </div>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>Выберите язык ввода:</p>
                        </div>
                        <button className={Style.paramsSelect}>Русский</button>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>Выберите режим:</p>
                        </div>
                        <button className={Style.paramsSelect}>Ввод на кол-во слов</button>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={Style.paramsSub}>
                        <div className={Style.paramsText}>
                        <p>Выберите кол-во слов:</p>
                        </div>
                        <button className={Style.paramsSelect}>70 слов</button>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <button className='Start'>Начать</button>
                </div>
                <div ref={langRefButton} className={ourKlavaClass.join(' ')}>
                    <p style={{fontWeight: 'bold'}} className={klavaClassText}>Выберите раскладку:</p>
                <ul className={klavaClass}>
                            <li onClick={()=>{
                                setKlava(false)
                                window.localStorage.setItem('klava', 'Colemak');
                            }}>Colemak</li>
                            <li onClick={()=>{
                                setKlava(false)
                                window.localStorage.setItem('klava', 'Work-man');
                            }}>Work-man</li>
                            <li onClick={()=>{
                                setKlava(false)
                                window.localStorage.setItem('klava', 'Qwerty');
                            }}>Qwerty</li>
                            <li>sdadad</li>
                            <li>sdadaddasda</li>
                            <li>sdadad</li>
                            <li>sdaddasdadad</li>
                            <li>sdadad</li>

                            {/* <li>sdadad</li>
                            <li>sdadaddasda</li>
                            <li>sdadad</li>
                            <li>sdaddasdadad</li>
                            <li>sdadad</li> */}
                        </ul>
                        <button onClick={()=>{
                                setKlava(false)
                        }} className={klavaClassText}>Закрыть</button>
                </div>
            </section>
        </main>
        </>
    );
};

export default Text;
// --paddingHome)