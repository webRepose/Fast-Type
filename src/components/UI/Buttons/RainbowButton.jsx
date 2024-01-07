import Style from "../../../styles/Components/UI/Buttons/RainbowButton/RainbowButton.module.css";

const RainbowButton = (props) => {
  return (
    <button className={Style.rainbow} {...props}>
      {props.children}
    </button>
  );
};

export default RainbowButton;
