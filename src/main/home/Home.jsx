import Style from '../../styles/Home/Home.module.css';
import { useTranslation } from 'react-i18next';
import ImgBlock from "./BlockImg";
import HomeModule from './HomeModule.json';
import Section from "../../components/Section/Section";
import GreenButton from '../../components/GreenButton/GreenButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    const [t] = useTranslation();
    document.querySelector('html').style.overflow = '';
    
    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <title>Fast Type</title>
                    <meta name="description" content={t('H-description')}></meta>
                    <link rel="canonical" href="https://fast-type-red.vercel.app/"/>
                    <meta name="author" content="https://fast-type-red.vercel.app/"></meta>
                    <meta name="keywords" content="Fast Type, fast type, Фаст тайп, фаст тайп, слепая печать, Слепая печать, Тренажер слепой печати, Слепая печать учить, Тренажер быстрой печати, набор текстов, Blind typing, Blind typing, Blind typing trainer, Blind typing learn, Fast typing trainer, typesetting"></meta>
                    <meta name="apple-mobile-web-app-title" content='Fast Type'></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content='Fast Type'></meta>
                    <meta property="og:description" content={t('H-description')}></meta>
                    <meta property="og:image" content="../../../public/img/logo.png"></meta>
                    <meta property="og:url" content="https://fast-type-red.vercel.app/"></meta>
                </Helmet>
            </HelmetProvider>
            <Section>
                <div className={Style.homeWelcome}>
                <h2>{t('H-Welcome')}</h2>
                <h3>{t('H-Traning')}</h3>
                </div>
            </Section>
            <section className={Style.homeTest}>
                <h3>{t('H-Test')}</h3>
                <GreenButton title={t('H-Pass')}>{t('H-Pass')}</GreenButton>
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