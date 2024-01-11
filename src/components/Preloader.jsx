import Style from "../styles/Components/Preloader/Preloader.module.css";

const preloaderCollection = [
  Style.box0,
  Style.box1,
  Style.box2,
  Style.box3,
  Style.box4,
  Style.box5,
  Style.box6,
  Style.box7,
];

const Preloader = () => {
  return (
    <section className={Style.preloader}>
      <div className={Style.preloaderPlace}>
        <div className={Style.loader}>
          {preloaderCollection &&
            preloaderCollection.map((data, id) => (
              <div key={id} className={`${Style.box} ${data}`}>
                <div></div>
              </div>
            ))}
          <div className={Style.ground}>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
