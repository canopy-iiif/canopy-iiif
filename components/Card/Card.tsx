import { Content, Wrapper } from "@/components/Card/Card.styled";
import Link from "next/link";
import Figure from "@/components/Figure/Figure";

interface CardProps {
  label: string;
  path: string;
  resource: string;
  context: string;
  size?: string;
  isCover: boolean;
}

const Card: React.FC<CardProps> = ({
  label,
  path,
  resource,
  context = "",
  size = "300,",
  isCover = false,
}) => {
  return (
    <Wrapper>
      <Link href={path}>
        <a>
          <Figure resource={resource} size={size} isCover={isCover} />
          <Content>
            <h4>{label}</h4>
            {context && <span>{context}</span>}
          </Content>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Card;
