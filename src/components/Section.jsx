import Style from "../styles/Components/Section/Section.module.scss";

const Section = (props) => {
  return <section className={Style.Block}>{props.children}</section>;
};

export default Section;
