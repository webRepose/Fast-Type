import Section from '../../../components/Section/Section';
import Back from '../../../components/Back/Back';
import Style from '../../../styles/Home/Guids/Guids.module.css';

const Guids = () => {
    alert('in progress');
    return (
        <main>
            <Section>
            <Back/>
            <h3>Гайд</h3>
            <div className={Style.guidsAbout}>
                <p>Слепая печать — особый метод набора текста. Развивает память, дисциплину и другое.</p>
            </div>

            <div className={Style.guidsAbout}>
                <p className={Style.guidsAboutPrint}><b>В обществе приняты два способа слепой печати:</b></p>
                <p className={Style.guidsAboutTwo}>1. Это печать 2-4 пальцами.</p>
                <p className={Style.guidsAboutTwo}>2. Это печать 10 пальцами выделив для каждого пальца свою зону действия.</p>
            </div>

            <div className={Style.guidsAboutSecond}>
               <div>
               <p className={Style.guidsAboutPrint}><b>Поза при печатании:</b></p>
                <p className={Style.guidsAboutTwo}>1. Сиди ровно и держи спину прямой.</p>
                <p className={Style.guidsAboutTwo}>2. Локти держи согнутыми под прямым углом.</p>
                <p className={Style.guidsAboutTwo}>3.Голова должна быть немного наклонена вперед.</p>
                <p className={Style.guidsAboutTwo}>4. Расстояние от глаз до экрана должно быть 45-70 см.</p>
                <p className={Style.guidsAboutTwo}>5. Расслабь мышцы плеч, рук и кистей. Кисти могут немного касаться стола в нижней части клавиатуры, но не переноси.</p>
               </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img width={150} src="./img/home/Guids/position.png" alt='Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>'/>
                </div>
            </div>

            <div style={{display:'block'}} className={Style.guidsAboutSecond}>
                <p className={Style.guidsAboutPrint}><b>Расположение рук при печатании</b></p>
                <img width={550} src="./img/home/Guids/QWERTY.png" alt='Keyboard'/>

            </div>
            </Section>
        </main>
    );
};

export default Guids;