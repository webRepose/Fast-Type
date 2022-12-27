import Style from './Preloader.module.css'
import Logo from '../../header/Logo';
function Preloader() {
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