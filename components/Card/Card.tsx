import { Content, Placeholder, Wrapper } from "@/components/Card/Card.styled";
import Link from "next/link";
import Figure from "@/components/Figure/Figure";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useInView } from "react-intersection-observer";
import { m, LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { useState } from "react";

const Card = ({
  label,
  path,
  resource,
  context = "",
  size = "300,",
  aspectRatio,
  isCover = false,
}) => {
  const { ref, inView } = useInView();

  return (
    <Wrapper ref={ref}>
      <Link href={path}>
        <AspectRatio.Root ratio={aspectRatio}>
          <Placeholder>
            <MotionConfig transition={{ duration: 1 }}>
              {inView && resource && (
                <LazyMotion features={domAnimation}>
                  <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Figure resource={resource} size={size} isCover={isCover} />
                  </m.div>
                </LazyMotion>
              )}
            </MotionConfig>
          </Placeholder>
        </AspectRatio.Root>
        <Content>
          <h4>{label}</h4>
          {context && <span>{context}</span>}
        </Content>
      </Link>
    </Wrapper>
  );
};

export default Card;
