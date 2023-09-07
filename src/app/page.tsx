"use client";

import {
  Box,
  Code,
  Container,
  Heading,
  Kbd,
  Strong,
  Text,
} from "@radix-ui/themes";

import { Hero } from "@canopy-iiif/components";

export default function Home() {
  return (
    <main>
      <Hero />
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
