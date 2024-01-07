import Style from "../styles/Components/Preloader/Preloader.module.css";

const Preloader = () => {
  return (
    <section className={Style.preloader}>
      <div className={Style.preloaderPlace}>
        <div className={Style.loader}>
          <div className={`${Style.box} ${Style.box0}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box1}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box2}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box3}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box4}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box5}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box6}`}>
            <div></div>
          </div>
          <div className={`${Style.box} ${Style.box7}`}>
            <div></div>
          </div>
          <div className={Style.ground}>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
