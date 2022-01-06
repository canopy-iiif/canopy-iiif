import RibbonItem from "./Item";
import { Items, Wrapper } from "./Ribbon.styled";

const Ribbon = ({ label, children }) => {
  console.log(children);
  return (
    <Wrapper>
      {label}
      <Items>{children}</Items>
    </Wrapper>
  );
};

Ribbon.Item = RibbonItem;

export default Ribbon;
