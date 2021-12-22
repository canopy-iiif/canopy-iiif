import Link from "next/link";

const GridCard = ({ title, thumbnail, href }) => {
  return (
    <Link href={href}>
      <a>
        <figure>{thumbnail}</figure>
        <div>{title}</div>
      </a>
    </Link>
  );
};

export default GridCard;
