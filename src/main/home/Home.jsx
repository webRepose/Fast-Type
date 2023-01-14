import Style from "./Home.module.css"
import { useTranslation } from 'react-i18next';
import ImgBlock from "./BlockImg";
import HomeModule from './HomeModule.json';


const Home = () => {
    const [t] = useTranslation();
    document.title = 'Fast Type';
    
    return (
        <main>
            <section className={Style.homeWelcome}>
                <h2>{t('H-Welcome')}</h2>
                <h3>{t('H-Traning')}</h3>
            </section>
            <section className={Style.homeTest}>
                <h3>{t('H-Test')}</h3>
                <button title={t('H-Pass')} className={Style.homeTestStart}>{t('H-Pass')}</button>
            </section>
            <section className={Style.homeStats}>
        <div className={Style.homeStatsBlock}>
            {
                HomeModule.map((url, i)=>(
                    <ImgBlock name_homeBlock={t(url['text_translate'])} back_color={url['img_backColor']} key={i} imageUrl={url["img_src"]}/>
                ))
            } 
        </div>
            </section>
        </main>
    );
};

export default Home;