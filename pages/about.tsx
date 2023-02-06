import React from "react";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";
import Heading from "../components/Shared/Heading/Heading";
import { DefinitionListWrapper } from "../components/Shared/DefinitionList.styled";
import { ButtonWrapper } from "../components/Shared/Button/Button.styled";
import Button from "../components/Shared/Button/Button";

export default function About() {
  return (
    <Layout>
      <Container>
        <div>
          <Heading as="h1">About</Heading>
          <p>
            <strong>Canopy IIIF</strong> is a purely{" "}
            <a href="https://iiif.io/">IIIF</a> sourced site generator using
            Next.js. Canopy is an experimental application that will standup a
            browseable and searchable digital collections style site entirely
            from a <a href="https://iiif.io/">IIIF Collection</a> and the
            resources it references.
          </p>
          <ButtonWrapper>
            <Button
              href="https://github.com/mathewjordan/canopy-iiif"
              buttonType="primary"
            >
              View Code
            </Button>
          </ButtonWrapper>
        </div>
        <section>
          <header>
            <Heading as="h2">Basic Features</Heading>
          </header>
          <div>
            <p>[content]</p>
          </div>
        </section>
        <section>
          <header>
            <Heading as="h2">Getting Started</Heading>
          </header>
          <div>
            <p>[content]</p>
          </div>
        </section>
        <section>
          <header>
            <Heading as="h2">History</Heading>
          </header>
          <div>
            <p>
              Canopy was initially conceived at the University of Tennessee
              Libraries in the Summer ’21 as a statically generated web
              application for the{" "}
              <a href="https://rfta.lib.utk.edu/">
                Rising from the Ashes: The Chimney Tops 2 Wildfires Oral History
                Project
              </a>
              . The primary goal of the project was to allow IIIF resources
              hosted in another repository to be enhanced and remixed without
              any duplication of the source material.{" "}
              <a href="https://www.gatsbyjs.com/">Gatsby.js</a> was chosen as
              the static site generator to deliver materials sourced from a
              single IIIF Collection and present IIIF Manifests of diverse
              content resource types including: Sound, Video, and Image. Various
              front end user interface components were also created to help in
              this presentation, along with search and faceting functionality
              built around <a href="https://lunrjs.com/">lunr.js</a>.
            </p>
            <p>
              The original Canopy was generated from a single IIIF Collection;
              however, the components delivering the user interface became
              heavily tailored to the source material of the Rising from the
              Ashes project, thus limiting the reuse of the codebase for other
              collections. The original Canopy featured a heavily integrated
              IIIF A/V Viewer designed to deliver Sound and Video resources.
              This A/V viewer would eventually evolve into a partial inspiration
              for{" "}
              <a href="https://samvera-labs.github.io/clover-iiif/">
                Clover IIIF
              </a>
              .
            </p>
            <p>
              Canopy was reimagined as Canopy IIIF in early Winter ’22 with the
              primary focus of the project maintaining the the ability to build
              an interoperable site from any IIIF Collection following IIIF
              Presentation API 2.0 and 3.0 specifications. In this version the
              decision was also made to switch from Gatsby.js platform to
              Next.js.
              <br />
              <br />
              [Next.js selection]
              <br />
              <br />
              [Roadmap of project now.]
            </p>
          </div>
        </section>
        <section>
          <header>
            <Heading as="h2">Contributors</Heading>
          </header>
          <div>
            <DefinitionListWrapper>
              <dl>
                <dt>Mat Jordan</dt>
                <dd>Developer, Northwestern University Libraries</dd>
                <dd>
                  Former Director of Technology Solutions, University of
                  Tennessee Libraries
                </dd>
                <dt>Mark Baggett</dt>
                <dd>
                  Head, Digital Initiatives, University of Tennessee Libraries
                </dd>
                <dt>Emily Gore</dt>
                <dd>
                  Associate University Librarian, University of Georgia
                  Libraries
                </dd>
                <dd>
                  Former Assistant Dean of Libraries, University of Tennessee
                  Libraries
                </dd>
                <dt>Adam Arling</dt>
                <dd>Senior Developer, Northwestern University Libraries</dd>
                <dt>David Schober</dt>
                <dd>
                  Product Owner and Team Lead, Northwestern University Libraries
                </dd>
              </dl>
            </DefinitionListWrapper>
          </div>
        </section>
        <section>
          <header>
            <Heading as="h2">Colophon</Heading>
          </header>
          <div>
            <p>
              Mat Jordan, the primary author of Canopy IIIF, was born within the
              original homelands of the{" "}
              <a href="https://wikipedia.org/wiki/Nez_Perce">
                Nimíipuu (Nez Percé)
              </a>{" "}
              and hails from Nez Perce County, Idaho, in the United States.
              Relating to this, the source collection for the Canopy IIIF
              demonstration is provided{" "}
              <a href="https://dc.library.northwestern.edu/collections/55ff2504-dd53-4943-b2cb-aeea46e77bc3">
                <em>
                  <strong>Edward S. Curtis's The North American Indian</strong>,
                  Volume 8. The Nez Perces. Wallawalla. Umatilla. Cayuse. The
                  Chinookan tribes
                </em>{" "}
              </a>
              collection and series, by Northwestern University Libraries.
            </p>
            <p>
              The project name &ldquo;Canopy&rdquo; is inspired by the
              presentation,{" "}
              <a href="https://www.cni.org/topics/standards/a-trees-strength-is-its-trunk-iiif-as-central-operational-infrastructure">
                A Tree’s Strength Is Its Trunk: IIIF as Central Operational
                Infrastructure
              </a>
              , delivered by María Matienzo (formerly Stanford University
              Libraries) and Esmé Cowles (Princeton University Library) at the
              CNI Fall 2020 Virtual Membership Meeting.
            </p>
            <p>
              Canopy IIIF is created using{" "}
              <a href="https://nextjs.org/">Next.js 13</a>, with a{" "}
              <a href="https://github.com/nextapps-de/flexsearch">FlexSearch</a>{" "}
              index for text search,{" "}
              <a href="https://iiif.io/api/presentation/3.0/">
                IIIF Presentation API 3.0
              </a>{" "}
              delivering resource content,{" "}
              <a href="https://www.radix-ui.com/">Radix UI</a> and{" "}
              <a href="https://stitches.dev/">Stitches</a> used throughout for
              the user interface, and various community modules from{" "}
              <a href="https://github.com/IIIF-Commons">IIIF Commons</a> and{" "}
              <a href="https://samvera.org/">Samvera</a> supporting the work
              presentation and resource delivery.
            </p>
            <p>
              This demonstration instance of Canopy IIIF is hosted on Vercel
              with a consistent build time under 40 seconds. The build process
              includes metadata aggregation requests of 81 IIIF Manifests. This
              IIIF Collection and its Manifest resources are delivered via a
              search response from the{" "}
              <a href="https://api.dc.library.northwestern.edu/docs/v2/index.html">
                Northwestern University Libraries Digital Collections API
              </a>
              . Referenced IIIF Image resources are delivered via{" "}
              <a href="https://github.com/samvera/serverless-iiif">
                Serverless IIIF
              </a>
              .
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
