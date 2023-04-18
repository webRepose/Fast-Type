import Style from '../../styles/Home/Home.module.css';
import ImgBlock from "./BlockImg";
import HomeModule from './HomeModule.json';
import Section from "../../components/Section";
import GreenButton from '../../components/UI/Buttons/GreenButton';
import Meta from '../../components/Meta';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [t] = useTranslation();
    document.querySelector('html').style.overflow = '';

    return (
        <main>
            <Meta title={t('H-title')} canon={''} description={t('H-description')} keywords={'Fast Type, fast type, Фаст тайп, фаст тайп, слепая печать, Слепая печать, Тренажер слепой печати, Слепая печать учить, Тренажер быстрой печати, набор текстов, Blind typing, Blind typing, Blind typing trainer, Blind typing learn, Fast typing trainer, typesetting'} />
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
                        HomeModule.map((url, i) => (
                            <ImgBlock linked={url['link']} name_homeBlock={t(url['text_translate'])} back_color={url['img_backColor']} key={i} imageUrl={url["img_src"]} />
                        ))
                    }
                </div>
            </Section>
        </main>
    );
};

export default Home;