import RibbonItem from "./Item";
import { Items, Title, Wrapper } from "./Ribbon.styled";

const Ribbon = ({ label, children }) => {
  return (
    <Wrapper>
      <Title>By {label}</Title>
      <Items>{children}</Items>
    </Wrapper>
  );
};

Ribbon.Item = RibbonItem;

export default Ribbon;
