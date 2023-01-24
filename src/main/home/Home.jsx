import Style from '../../styles/Home/Home.module.css';
import { useTranslation } from 'react-i18next';
import ImgBlock from "./BlockImg";
import HomeModule from './HomeModule.json';
import Section from "../../components/Section/Section";


const Home = () => {
    const [t] = useTranslation();
    document.title = 'Fast Type';
    
    return (
        <main>
            <Section>
                <div className={Style.homeWelcome}>
                <h2>{t('H-Welcome')}</h2>
                <h3>{t('H-Traning')}</h3>
                </div>
            </Section>
            <section className={Style.homeTest}>
                <h3>{t('H-Test')}</h3>
                <button title={t('H-Pass')} className={Style.homeTestStart}>{t('H-Pass')}</button>
            </section>
            <Section className={Style.homeStats}>
            <div className={Style.homeStatsBlock}>
                {
                    HomeModule.map((url, i)=>(
                        <ImgBlock linked={url['link']} name_homeBlock={t(url['text_translate'])} back_color={url['img_backColor']} key={i} imageUrl={url["img_src"]}/>
                    ))
                } 
            </div>
            </Section>
        </main>
    );
};

export default Home;