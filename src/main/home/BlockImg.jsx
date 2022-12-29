import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Style from "./Home.module.css"

function ImgBlock({imageUrl, name_homeBlock, back_color}) {
    let {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    return (
        <>
        <div title={name_homeBlock} ref={ref} className={Style.homeStatsSub}>
        <Link>
        <div  className={`${Style.homeStatsImg} ${back_color}`}>
        {inView ? <img src={imageUrl} alt={name_homeBlock}/> : <div className={Style.homeStatsSkeleton}></div>}
        </div>
        <p>{name_homeBlock}</p>
        </Link>
        </div>
        </>
    );
};

export default ImgBlock;
