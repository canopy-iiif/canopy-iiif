import { RefObject, useEffect, useState } from "react";

const useElementPosition = (element: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.pageYOffset);

      if (element.current)
        setPosition(window.pageYOffset - element?.current.offsetTop);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, [element]);

  return position;
};

export default useElementPosition;
