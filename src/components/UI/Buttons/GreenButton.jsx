import Style from "../../../styles/Components/UI/Buttons/GreenButton/GreenButton.module.scss";

const GreenButton = (props) => {
  return (
    <button {...props} className={`${Style.GreenButton}`}>
      {props.children}
    </button>
  );
};

export default GreenButton;
