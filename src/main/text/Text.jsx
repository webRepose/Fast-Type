import { useState } from "react";
import Style from "./Text.module.css"
function Text() {
    document.title = 'Набор текста'
    const [klava, setKlava] = useState(false);
    const klavaClass = klava ?  'flex' : '';
    // const ourKlavaClass = [Style.paramsFirst, klavaClass]
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
                        <button className={Style.paramsSelect} onClick={()=>{
                        setKlava(prev => !prev)
                        }}>Qwerty</button>
                        <ul className={klavaClass}>
                            <li>Colemak</li>
                            <li>Work-man</li>
                        </ul>
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
            </section>
        </main>
        </>
    );
};

export default Text;
// --paddingHome)