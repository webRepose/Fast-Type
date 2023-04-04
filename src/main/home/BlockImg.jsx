import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Style from '../../styles/Home/Home.module.css';

const ImgBlock = ({ imageUrl, name_homeBlock, back_color, linked }) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: '-20px',
    })
    return (
        <div title={name_homeBlock} ref={ref} className={Style.homeStatsSub}>
            <Link to={linked}>
                <div className={`${Style.homeStatsImg} ${back_color}`}>
                    {inView
                        ?
                        <img src={imageUrl}
                            alt='Illustration by <a href="https://icons8.com/illustrations/author/CkHJmwURlxnt">Olha Khomich</a> from <a href="https://icons8.com/illustrations">Ouch!</a>' />
                        :
                        <div className={Style.homeStatsSkeleton}></div>}
                </div>
                <p>{name_homeBlock}</p>
            </Link>
        </div>
    );
};

export default ImgBlock;
