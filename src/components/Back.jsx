import Style from '../styles/Components/Back/Back.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Back = () => {
    const [t] = useTranslation();
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1);
    }
    return (
        <Link onClick={Back} title = {t('TIS-back')}>
            <button className={Style.Back}>
                <div className={Style.BackImages}></div>
            </button>
        </Link>
    );
};

export default Back;