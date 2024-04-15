import * as AspectRatio from "@radix-ui/react-aspect-ratio";

import {
  Box,
  Inset,
  Link,
  Card as RadixThemesCard,
  Text,
} from "@radix-ui/themes";
import { Content, Placeholder, Wrapper } from "@components/Card/Card.styled";
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

import Figure from "@components/Figure/Figure";
import { Label } from "@samvera/clover-iiif/primitives";
import React from "react";
import { SearchResponseItem } from "@customTypes/search/search";
import { getLabel } from "@lib/iiif/label";
import { getRandomItem } from "@lib/utils";
import { useInView } from "react-intersection-observer";

interface CardProps {
  resource: SearchResponseItem;
}

const Card: React.FC<CardProps> = ({ resource }) => {
  let aspectRatio = 1;

  const { label, homepage, thumbnail } = resource;
  // @ts-ignore
  const { width, height } = getRandomItem(thumbnail);

  if (width && height) aspectRatio = width / height;

  const { ref, inView } = useInView();
  const alt = getLabel(label);

  return (
    <Wrapper as={Box} ref={ref}>
      <RadixThemesCard
        size="2"
        style={{ width: "100%" }}
        variant="classic"
        asChild
      >
        <Link href={homepage && homepage[0].id ? homepage[0].id : ""}>
          <Inset clip="padding-box" side="top">
            <AspectRatio.Root ratio={aspectRatio}>
              <Placeholder>
                <MotionConfig transition={{ duration: 1 }}>
                  {inView && resource && (
                    <LazyMotion features={domAnimation}>
                      <m.div
                        style={{ height: "100%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Figure resource={thumbnail} alt={alt} />
                      </m.div>
                    </LazyMotion>
                  )}
                </MotionConfig>
              </Placeholder>
            </AspectRatio.Root>
          </Inset>
          <Text size="2" asChild>
            <Content>
              <Label label={label} />
            </Content>
          </Text>
        </Link>
      </RadixThemesCard>
    </Wrapper>
  );
};

export default React.memo(Card);
