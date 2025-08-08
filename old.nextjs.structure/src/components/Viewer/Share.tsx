import {
  Box,
  Button,
  CheckboxCards,
  Dialog,
  Flex,
  Text,
  TextArea,
} from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

import { Share1Icon } from "@radix-ui/react-icons";
import { encodeContentState } from "@iiif/helpers";
import { useCanopyState } from "@src/context/canopy";

interface ViewerShareProps {
  iiifContent: string;
  isContentStateViewer?: boolean;
}

const ViewerShare: React.FC<ViewerShareProps> = ({
  iiifContent,
  isContentStateViewer = false,
}) => {
  const [shareUrl, setShareUrl] = useState(iiifContent);
  const [canvasThumbnail, setCanvasThumbnail] = useState<HTMLImageElement>();
  const [currentItem, setCurrentItem] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  const {
    canopyState: { iiifContentState },
  } = useCanopyState();

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("iiif-content");

    if (isContentStateViewer && iiifContentState) {
      const contentStateJson = JSON.parse(iiifContentState);
      const activeCanvas = contentStateJson.target.id;

      const thumbnails = document.querySelectorAll(
        `.clover-viewer-media-wrapper button[role="radio"]`
      );

      const activeThumbnail = Array.from(thumbnails).find((thumbnail) => {
        const canvasId = thumbnail.getAttribute("value");
        return canvasId === activeCanvas;
      });

      const defaultThumbnail = Array.from(thumbnails)[0];
      const thumbnail = activeThumbnail || defaultThumbnail;

      const img = thumbnail?.querySelector("img");
      if (img) setCanvasThumbnail(img);

      setCurrentItem(
        `(${Number(thumbnail?.getAttribute("data-canvas")) + 1} / ${
          thumbnails?.length
        })`
      );
    }

    if (options.includes("canvas")) {
      url.searchParams.set(
        "iiif-content",
        encodeContentState(iiifContentState)
      );
    }

    return setShareUrl(url.toString());
  }, [iiifContentState, iiifContent, options]);

  const handleOptionsOnChange = (values: string[]) => {
    setOptions(values);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="3">
          <Share1Icon />
          Share
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Share</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Share this item with others by copying the link below.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {isContentStateViewer && iiifContentState && canvasThumbnail && (
            <Box>
              <CheckboxCards.Root
                defaultValue={options}
                onValueChange={handleOptionsOnChange}
              >
                <CheckboxCards.Item value="canvas">
                  <Flex direction="row" width="100%">
                    {canvasThumbnail && (
                      <img
                        src={canvasThumbnail.src}
                        alt="Canvas Thumbnail"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          marginRight: "8px",
                        }}
                      />
                    )}
                    <Flex direction="column">
                      {canvasThumbnail && (
                        <Text weight="bold">{canvasThumbnail.alt}</Text>
                      )}
                      <Text>Jump to current item {currentItem}</Text>
                    </Flex>
                  </Flex>
                </CheckboxCards.Item>
              </CheckboxCards.Root>
            </Box>
          )}

          <label>
            <TextArea variant="soft" value={shareUrl} disabled />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleCopyUrl}>Copy URL</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ViewerShare;
