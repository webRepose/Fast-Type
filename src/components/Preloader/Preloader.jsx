import Style from '../../styles/Components/Preloader/Preloader.module.css';

const Preloader = () => {
    return (
        <section className={Style.preloader}>
            <div className={Style.preloaderPlace}>
                <div className={Style.lds_heart}><div></div></div>
            </div>
        </section>
    );
};

export default Preloader;