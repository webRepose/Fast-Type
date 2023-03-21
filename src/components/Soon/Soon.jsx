import { useTranslation } from "react-i18next";

import Style from '../../styles/Components/Soon/Soon.module.css';
import Back from "../../components/Back/Back";
import Section from "../../components/Section/Section";
import { Link } from "react-router-dom";


const Soon = () => {
    const [t] = useTranslation();

    return (
        <>
        <main>
            <Section>
                <Back/>
                    <div className={Style.soon}>
                        <h1>{t('CS-soon')}</h1>
                        <div className={Style.imgpost}>
                            <img src="./img/coming soon/wait.webp" alt='Illustration by <a href="https://icons8.com/illustrations/author/ODexzOcCgAMh">Finn Reville</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'/>
                        </div>
                        <Link to='/'>
                            <button title={t('NF-gohome')}>{t('NF-gohome')}</button>    
                        </Link>  
                    </div>
            </Section>
        </main>
        </>
    );
};

export default Soon;