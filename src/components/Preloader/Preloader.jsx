import Style from '../../styles/Components/Preloader/Preloader.module.css';
import Logo from '../../header/Logo';

const Preloader = () => {
    return (
        <section className={Style.preloader}>
            <div className={Style.preloaderPlace}>
                <div className={Style.preloaderObject}>
                </div>
                <Logo/>
            </div>
        </section>
    );
};

export default Preloader;