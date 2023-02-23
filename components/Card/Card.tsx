import { Content, Placeholder, Wrapper } from "@/components/Card/Card.styled";
import Link from "next/link";
import Figure from "@/components/Figure/Figure";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { getJsonByURI } from "@/services/utils";
import { getPresentation3 } from "@/services/iiif/context";
import { useInView } from "react-intersection-observer";
import { m, LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { Label } from "@samvera/nectar-iiif";

interface CardProps {
  resource: any;
}

const Card: React.FC<CardProps> = ({ resource }) => {
  const [aspectRatio, setAspectRatio] = useState<number>();
  const { label, homepage, thumbnail } = resource;

  useEffect(() => {
    /**
     * temporary aspect ratio calculation for demo collection
     */
    getJsonByURI(resource.id).then((json) => {
      const manifest = getPresentation3(json);
      const { width, height } = manifest.items
        ? manifest.items[0].items[0].items[0].body
        : undefined;
      setAspectRatio(width / height);
    });

    // if (Array.isArray(thumbnail) && thumbnail[0])
    //   setAspectRatio(thumbnail[0].width / thumbnail[0].height);
  }, [thumbnail]);

  const { ref, inView } = useInView();

  if (!aspectRatio) return <></>;

  return (
    <Wrapper ref={ref}>
      <Link href={homepage[0].id}>
        <AspectRatio.Root ratio={aspectRatio}>
          <Placeholder>
            <MotionConfig transition={{ duration: 1 }}>
              {inView && resource && (
                <LazyMotion features={domAnimation}>
                  <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Figure resource={thumbnail} />
                  </m.div>
                </LazyMotion>
              )}
            </MotionConfig>
          </Placeholder>
        </AspectRatio.Root>
        <Content>
          <Label label={label} as="h4" />
        </Content>
      </Link>
    </Wrapper>
  );
};

export default Card;
