import {
  FacetsActivateFloatingWrapper,
  FacetsActivateIndicator,
  FacetsActivateStyled,
} from "./Activate.styled";
import React, { useEffect } from "react";

import { ButtonStyled } from "../Shared/Button/Button.styled";
import Container from "../Shared/Container";
import { Flex } from "@radix-ui/themes";
import { LocaleString } from "@hooks/useLocale";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { headerHeight } from "@styles/global";
import useElementPosition from "@src/hooks/useElementPosition";
import { useFacetsState } from "@context/facets";

const FacetsActivate: React.FC = () => {
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  const facetsActivateRef = React.useRef<HTMLDivElement>(null);
  const position = useElementPosition(facetsActivateRef);

  const { facetsState } = useFacetsState();
  const { facetsActive } = facetsState;

  const { length } = Array.from(facetsActive.keys()).filter(
    (key) => key !== "q"
  );

  useEffect(
    () => setIsScrolling(Boolean(position > headerHeight - 100)),
    [position, headerHeight]
  );

  return (
    <FacetsActivateFloatingWrapper
      isScrolling={isScrolling}
      ref={facetsActivateRef}
    >
      <Container containerType="wide">
        <Flex justify="end">
          <FacetsActivateStyled>
            <ButtonStyled size="3">
              {LocaleString("searchFilter")} <MixerHorizontalIcon />
              {length > 0 && (
                <FacetsActivateIndicator>{length}</FacetsActivateIndicator>
              )}
            </ButtonStyled>
          </FacetsActivateStyled>
        </Flex>
      </Container>
    </FacetsActivateFloatingWrapper>
  );
};

export default FacetsActivate;
