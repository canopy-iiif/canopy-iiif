"use client";

import {
  Box,
  Button,
  Code,
  Container,
  DropdownMenu,
  Heading,
  Kbd,
  Strong,
  Tabs,
  Text,
} from "@radix-ui/themes";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Box
        width="100%"
        style={{
          backgroundColor: "var(--slate-4)",
        }}
      >
        <Container size="3">
          <Box style={{ height: "640px", position: "relative", zIndex: "0" }}>
            <Button
              size="4"
              style={{ position: "absolute", bottom: "0", right: "0" }}
              mb="9"
              asChild
            >
              <Link href="/work">
                Grizzly Bear - Ferocious <ChevronRightIcon />
              </Link>
            </Button>
          </Box>
        </Container>
      </Box>
      <Box p="9">
        <Container size="4">
          <Heading size="8" trim="both" mb="6">
            About Canopy
          </Heading>
          <Text size="5">
            <Strong>Canopy IIIF</Strong> is a purely IIIF sourced site generator
            using Next.js. Canopy is an experimental application that will
            standup a browseable and searchable digital collections style site
            entirely from a IIIF Collection and the resources it references. Try
            it out by editing <Code>src/app/page.tsx</Code> and saving. Maybe
            search by using the search bar above, use keyboard <Kbd>⌘K</Kbd>.
          </Text>
        </Container>
      </Box>
    </main>
  );
}
