import Style from "../styles/Components/Section/Section.module.css";

const Section = (props) => {
  return <section className={Style.Block}>{props.children}</section>;
};

export default Section;
