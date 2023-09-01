"use client";

import { Box, Container, Tabs, Text } from "@radix-ui/themes";

import Link from "next/link";
import dynamic from "next/dynamic";

const CloverViewer = dynamic(() => import("@samvera/clover-iiif/viewer"), {
  ssr: false,
});

const iiifContent =
  "https://api.dc.library.northwestern.edu/api/v2/works/972196ff-d614-4b76-9d12-80e18f1f37c9?as=iiif";

export default function Work() {
  return (
    <main>
      <Box width="100%">
        <div style={{ minHeight: "640px" }}>
          <CloverViewer
            iiifContent={iiifContent}
            options={{
              showIIIFBadge: false,
              showTitle: false,
              showInformationToggle: false,
              renderAbout: false,
              canvasHeight: "640px",
              canvasBackgroundColor: "var(--slate-4)",
              openSeadragon: {
                gestureSettingsMouse: {
                  scrollToZoom: false,
                },
              },
            }}
          />
        </div>
      </Box>
      <Container size="4">
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="account">
              <Text size="2">About</Text>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Transcription</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">Translation</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Container>
    </main>
  );
}
