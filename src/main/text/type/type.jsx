import { useTranslation } from "react-i18next";
import Style from "./type.module.css";
import TypeKlava from './TypeKlava.json';
function Type() {
const [t] = useTranslation();

    return (
        <>
        <main>
        <section className={Style.choiceParams}>
            <h3>Набирайте текст</h3>
        </section>
        <section className={Style.choiceParams}>
            <div className={Style.inputMain}>
            <div className={Style.inputBlock}>
                <p className={Style.inputText}>Если клиент очень умный, он сможет добиться желаемого результата. Пусть дело решается гибкостью и подобием истины, которую</p>
                <textarea autoFocus className={Style.inputArea} formvalidate='formNoValidate' spellCheck="false" onPaste={()=>{return false}} autoComplete="off"></textarea>
            </div>
            </div>
            <div className={Style.klava}>
                <div className={Style.klavaLine}>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-`')}</sub><sup>{t('T-~')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-1')}</sub><sup>{t('T-!')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-2')}</sub><sup>{t('T-@')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-3')}</sub><sup>{t('T-#')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-4')}</sub><sup>{t('T-$')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-5')}</sub><sup>{t('T-%')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-6')}</sub><sup>{t('T-^')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-7')}</sub><sup>{t('T-&')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-8')}</sub><sup>{t('T-*')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-9')}</sub><sup>{t('T-(')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-0')}</sub><sup>{t('T-)')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
            <p><sub>{t('T--')}</sub><sup>{t('T-_')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-=')}</sub><sup>{t('T-+')}</sup></p>
            </div>
            <div className={Style.klavaBackspace}>
                <p>{t('T-backspace')}</p>
            </div>
                </div>
                <div className={Style.klavaLine}>
            <div className={Style.klavaBackspace}>
                <p>{t('T-tab')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-q')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-w')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-e')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-r')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-t')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-y')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-u')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-i')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-o')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-p')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-[')}</sub><sup>{t('T-{')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-]')}</sub><sup>{t('T-}')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-/')}</sub><sup>{t('T-|')}</sup></p>
            </div>
                </div>
                <div className={Style.klavaLine}>
            <div className={Style.klavaEntCap}>
                <p>{t('T-caps')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-a')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-s')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-d')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-f')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-g')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-h')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-j')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-k')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t('T-l')}</p>
            </div>
            <div className={Style.klavaBtn}>
                <p><sub>{t('T-;')}</sub><sup>{t('T-;;')}</sup></p>
            </div>
            <div className={Style.klavaBtn}>
                <p>{t("T-'")}</p>
            </div>
            <div className={Style.klavaEntCap}>
                <p>{t("T-enter")}</p>
            </div>
                </div>
                <div className={Style.klavaLine}>
                <div className={Style.klavaShift}>
                <p>{t("T-shift")}</p>
                </div>
                {TypeKlava.map((lan, i)=>(
                    <div className={Style.klavaBtn} key={i}>
                        <p>{t(lan['klavaOne'])} <span>{t(lan['klavaTwo'])}</span></p>
                    </div>
                ))}
                <div className={Style.klavaShift}>
                <p>{t("T-shift")}</p>
                </div>
                </div>
                <div className={Style.klavaLine}>
                <div className={Style.klavaSpace}></div>
                </div>
            </div>
        </section>    
        </main>
        </>
    );
};

export default Type;