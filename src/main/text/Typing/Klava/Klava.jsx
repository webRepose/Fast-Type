import { useTranslation } from "react-i18next";
import Style from "../../../../styles/Text/Typing/Klava/Klava.module.css";
import TypeKlava from './KlavaFourLine.json';
import KlavaThird from './KlavaThirdLine.json';
import KlavaSecond from './KlavaSecondLine.json';
import KlavaFirst from './KlavaFirstLine.json';

const Klava = () => {
    const [t] = useTranslation();
    return(
        <div className={Style.klava}>
        <div className={Style.klavaLine}>
        {KlavaFirst.map((lan, i)=>(
            <div translate="no" id={t(lan['klavaOne'])} className={`${lan['stBtn']}`} key={i}>
                <p translate="no"><sub>{t(lan['klavaOne'])}</sub><sup>{t(lan['klavaTwo'])}</sup></p>
            </div>
        ))}
        </div>
        <div className={Style.klavaLine}>
        {KlavaSecond.map((lan, i)=>(
            <div translate="no" id={t(lan['klavaOne'])} className={`${lan['stBtn']}`} key={i}>
                <p translate="no"><sub>{t(lan['klavaOne'])}</sub><sup>{t(lan['klavaTwo'])}</sup></p>
            </div>
        ))}
        </div>
        <div className={Style.klavaLine}>
        {KlavaThird.map((lan, i)=>(
            <div translate="no" id={t(lan['klavaOne'])}  className={`${lan['stBtn']}`} key={i}>
                <p translate="no"><sub>{t(lan['klavaOne'])} </sub><sup>{t(lan['klavaTwo'])}</sup></p>
            </div>
        ))}
        </div>
        <div className={Style.klavaLine}>
        {TypeKlava.map((lan, i)=>(
            <div translate="no" id={t(lan['klavaOne'])}  className={`${lan['stBtn']}`} key={i}>
                <p translate="no"><sub>{t(lan['klavaOne'])}</sub> <sup>{t(lan['klavaTwo'])}</sup></p>
            </div>
        ))}
        </div>
        <div translate="no" className={Style.klavaLine}>
        <div translate="no" id=" " className={Style.klavaSpace}></div>
        </div>
    </div>
    )
}

export default Klava;