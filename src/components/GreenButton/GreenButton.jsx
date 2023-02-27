import Style from '../../styles/Components/GreenButton/GreenButton.module.css'

const GreenButton = (props) => {
    return (
        <button {...props} className={`${Style.GreenButton}`}>{props.children}</button>
    );
};

export default GreenButton;