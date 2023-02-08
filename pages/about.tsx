import React from "react";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";
import Heading from "../components/Shared/Heading/Heading";
import { DefinitionListWrapper } from "../components/Shared/DefinitionList.styled";
import { ButtonWrapper } from "../components/Shared/Button/Button.styled";
import Button from "../components/Shared/Button/Button";
import Code from "../components/Shared/Code/Code";

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
        {/* <section>
          <header>
            <Heading as="h2">Basic Features</Heading>
          </header>
          <div>
            <p>[content]</p>
          </div>
        </section> */}
        <section>
          <header>
            <Heading as="h2">Getting Started</Heading>
            <p>
              Canopy IIF is a Next.js application where production and
              development builds will follow{" "}
              <a href="https://nextjs.org/docs/getting-started">
                Next documentation
              </a>{" "}
              accordingly.
            </p>
          </header>
          <div>
            <Heading as="h3">Setup</Heading>
            <Heading as="h4">Dependency Install</Heading>
            <Code language="bash">npm i</Code>
            <Heading as="h4">Running in Development</Heading>
            <Code language="bash">npm run dev</Code>
            <Heading as="h4">Building in Production</Heading>
            <Code language="bash">npm run build</Code>
            <Heading as="h4">Configuration</Heading>
            Canopy IIIF uses a default configuration{" "}
            <code>config/.default/canopy.default.json</code> for demonstration
            purposes if a custom one is not set. The build process will read
            from a custom configuration file at <code>config/canopy.json</code>{" "}
            if it exists.
            <Heading as="h5">Create a Custom Configuration</Heading>
            <ol>
              <li>
                Find your <code>config/</code> directory
              </li>
              <li>
                Rename <code>canopy.sample.json</code> to{" "}
                <code>canopy.json</code>
              </li>
              <li>
                Updates should be made to both the <strong>prod</strong> and{" "}
                <strong>dev</strong> configurations. These configurations can
                match eachother; however in some cases, development speed can be
                aided by targeting a <em>smaller</em> IIIF Collection{" "}
                <code>id</code> as a fixture.
              </li>
            </ol>
            <Heading as="h5">Example Configuration</Heading>
            <Code language="json">{`{
  "prod": {
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
    ],
    "metadata": ["Title"]
  },
  "dev": {
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
    ],
    "metadata": ["Title"]
  }
}`}</Code>
            <Heading as="h5">Configuration Options</Heading>
            <Heading as="h6">Label as Site Title</Heading>
            <p>
              The Canopy IIIF site title is the Collection label of the set{" "}
              <code>collection</code> resource. You can override this by
              providing a valid <a href="">Presentation 3.0 label property</a>.
            </p>
            <Code language="json">{`{
  "prod": {
    "label": { 
      none: ["Hobhouse"]
    },
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
    ],
    "metadata": ["Title"]
  },
  ...
}`}</Code>
            <Heading as="h6">Curating Featured Manifests</Heading>
            <p>
              You can inform Canopy IIIF of featured Manifests by providing an
              array of ids. These must be within the referenced{" "}
              <code>collection</code> resource and the Manifest URIs must be an
              exact match. These Manifests will render throughout the interface
              in featured components.
            </p>
            <Code language="json">{`{
  "prod": {
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json",
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/b73ca01f-aac8-4916-a7c6-3c8e67939a66.json",
    ],
    "metadata": ["Title"]
  },
  ...
}`}</Code>{" "}
            <Heading as="h6">Curating Metadata</Heading>
            <p>
              Curating Metadata allows implementers of Canopy IIIF to select
              metadata labels that provide use to end users. An optimal case is
              a label common to all or most manifests with some in diversity of
              values across those resources. Metadata labels that curated will
              be automatically included as featured elements on the homepage,
              the metadata page, linking from works, and as facets on the search
              page.
            </p>
            <p>
              <strong>Note:</strong> Metadata labels are not yet BCP 47 language
              code aware; however, aggregation processes will make exact string
              comparisons regardless of language code.
            </p>
            <Code language="json">{`{
  "prod": {
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
    ],
    "metadata": ["Title", "Date Statement", "Language"]
  },
  ...
}`}</Code>
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
              Relating to this, the{" "}
              <a href="https://api.dc.library.northwestern.edu/api/v2/search?query=%22Nez%20Perc%C3%A9%22&as=iiif&size=200">
                source IIIF Collection
              </a>{" "}
              for this demonstration is a query for{" "}
              <a href="https://dc.library.northwestern.edu/search?q=%22Nez+Perc%C3%A9%22">
                <em>"Nez Percé"</em>
              </a>
              , with results coming from the{" "}
              <strong>Edward S. Curtis's The North American Indian</strong>{" "}
              collection provided by Northwestern University Libraries.
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
              includes metadata aggregation requests of 119 IIIF Manifests. This
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
