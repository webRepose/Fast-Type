import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Style from "../../styles/Home/Home.module.css";

const ImgBlock = ({ imageUrl, name_homeBlock, back_color, linked }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "-20px",
  });
  return (
    <div title={name_homeBlock} ref={ref} className={Style.homeStatsSub}>
      <Link to={linked}>
        <div className={`${Style.homeStatsImg} ${back_color}`}>
          {inView ? (
            <img
              width={100}
              src={imageUrl}
              alt='<a href="https://www.flaticon.com/free-icons/" title="icons">icons created by Freepik - Flaticon</a>'
            />
          ) : (
            <div className={Style.homeStatsSkeleton}></div>
          )}
        </div>
        <p>{name_homeBlock}</p>
      </Link>
    </div>
  );
};

export default ImgBlock;
