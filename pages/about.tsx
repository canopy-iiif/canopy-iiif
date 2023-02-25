import React from "react";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";
import Heading from "../components/Shared/Heading/Heading";
import { DefinitionListWrapper } from "../components/Shared/DefinitionList.styled";
import { ButtonWrapper } from "../components/Shared/Button/Button.styled";
import Button from "../components/Shared/Button/Button";
import Code from "../components/Shared/Code/Code";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Slider from "@/components/Viewer/Slider";

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
              View Code &nbsp;
              <GitHubLogoIcon />
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
            <Heading as="h2">Sample Sites</Heading>
            <div>
              <Slider collectionId="fixtures/iiif/collection/sample-sites.json"></Slider>
            </div>
          </header>
        </section>
        <section>
          <header>
            <Heading as="h2">Getting Started</Heading>
            <p>
              Canopy IIIF is a Next.js application where production and
              development builds will follow{" "}
              <a href="https://nextjs.org/docs/getting-started">
                Next documentation
              </a>{" "}
              accordingly.
            </p>
          </header>
          <div>
            <Heading as="h3">Setup</Heading>
            <Heading as="h4">Install Dependencies</Heading>
            <Code language="bash">npm i</Code>
            <Heading as="h4">Running in Development</Heading>
            <Code language="bash">npm run dev</Code>
            <Heading as="h4">Building in Production</Heading>
            <Code language="bash">npm run build</Code>
            <Heading as="h3">Configuration</Heading>
            Canopy IIIF uses a default configuration{" "}
            <code>config/.default/canopy.default.json</code> for demonstration
            purposes if a custom one is not set. The build process will read
            from a custom configuration file at <code>config/canopy.json</code>{" "}
            if it exists.
            <Heading as="h4">Create a Custom Canopy Configuration</Heading>
            <ol>
              <li>
                Find your <code>config/</code> directory
              </li>
              <li>
                Copy <code>canopy.sample.json</code> to <code>canopy.json</code>
              </li>
              <li>
                Make updates to both the <strong>prod</strong> and{" "}
                <strong>dev</strong> configurations.
              </li>
              <li>
                Copy <code>options.sample.json</code> to{" "}
                <code>option.json</code>
              </li>
              <li>
                Modify <code>option.json</code> as needed.
              </li>
            </ol>
            <Heading as="h4">Example Canopy Configuration</Heading>
            <p>
              Both the prod and dev environments have a configuration. These
              configurations can match each other; however in some cases,
              development speed can be aided by targeting a <em>smaller</em>{" "}
              IIIF Collection <code>id</code> as a fixture.
            </p>
            <p>
              <strong>Important:</strong> The <code>collection</code> property
              is required and must be the <code>id</code> of the referenced
              source IIIF Collection. Collections of Collections are not
              currently supported.
            </p>
            <Code language="json">{`{
  "prod": {
    "label": { "none": ["Hobhouse"] },
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"
    ],
    "metadata": ["Extent", "Title", "Date Statement", "Language"]
  },
  "dev": {
    "label": { "none": ["Hobhouse"] },
    "collection": "https://iiif.bodleian.ox.ac.uk/iiif/collection/hobhouse",
    "featured": [
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
      "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"
    ],
    "metadata": ["Extent", "Title", "Date Statement", "Language"]
  }
}`}</Code>
            <Heading as="h4">Setting Options in canopy.json</Heading>
            <Heading as="h5">Label as Site Title</Heading>
            <p>
              The Canopy IIIF site title is the Collection label of the set{" "}
              <code>collection</code> resource. You can optionally override this
              by providing a valid{" "}
              <a href="">Presentation 3.0 label property</a>.
            </p>
            <Code language="json">{`"label": { "none": ["Hobhouse"] }`}</Code>
            <Heading as="h5">Curating Featured Manifests</Heading>
            <p>
              You can inform Canopy IIIF of featured Manifests by providing an
              array of ids. These must be within the referenced{" "}
              <code>collection</code> resource and the Manifest URIs must be an
              exact match. These Manifests will render throughout the interface
              in featured components.
            </p>
            <p>
              <strong>Warning:</strong> In the current pre-release, featured
              Manifests must have an Image body on the first Canvas.
            </p>
            <Code language="json">{`"featured": [
  "https://iiif.bodleian.ox.ac.uk/iiif/manifest/8da97e8c-4e12-457d-aad8-3327b3aec183.json",
  "https://iiif.bodleian.ox.ac.uk/iiif/manifest/2968d5c7-3718-44ef-92ea-ee4cc58cc677.json"
]`}</Code>{" "}
            <Heading as="h5">Curating Metadata</Heading>
            <p>
              Curating Metadata allows implementers of Canopy IIIF to select
              metadata labels that provide use to end users. An optimal case is
              a label common to all or most manifests with some in diversity of
              values across those resources. Metadata labels that are curated
              will be automatically included as featured elements on the
              homepage, the metadata page, linking from works, and as facets on
              the search page.
            </p>
            <p>
              <strong>Note:</strong> Metadata labels are not yet BCP 47 language
              code aware; however, aggregation processes will make exact string
              comparisons regardless of language code.
            </p>
            <Code language="json">{`"metadata": ["Extent", "Title", "Date Statement", "Language"]`}</Code>
            <Heading as="h4">Setting Additional Options in options.js</Heading>
            <Heading as="h5">Adding Map Route for navPlace Navigation</Heading>
            <p>
              A map route can be enabled to provide geographic discovery of
              works via <code>options.json</code>. This feature builds markers
              off of geographic point features found in <code>navPlace</code>{" "}
              properties at the manifest level. To enable this option, set the
              option to
              <code>true</code>.
            </p>
            <p>
              <strong>Note:</strong> Currently, only <code>navPlace</code>{" "}
              properties found at the <code>Manifest</code> level are displayed.
              Also, only
              <code>Features</code> of <code>type: &quot;Point&quot;</code> are
              displayed.
            </p>
            <Code language="json">{`"map": {"enabled": true},`}</Code>
            <p>
              The map&apos;s tile layers are also configured here, giving users the
              ability to choose and customize layers for their project.
              Additional services, such as MapBox, can be easily integrated
              following this pattern. Each tile layer defined here will appear
              as an option in the layer control of the map. The name property
              defines the text next to the radio button. The url property is
              the link to the tile layer.  Finally, the attribution property
              defines the text that appears at the bottom of the map in case
              the tile layer requires any specific attribution on use. The
              first tile layer in the array will be used as the default map.
            </p>
            <Code language="json">{`"tileLayers": [
  {
    "name": "OpenStreetMap",
    "url": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "attribution": "&copy; OpenStreetMap contributors"
  },
  {
    "name": "OpenTopoMap",
    "url": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    "attribution": "&copy; OpenStreetMap contributors"
  },
]`}</Code>
            <Heading as="h5">Configuring Search</Heading>
            <p>
              Search options can be configured in <code>options.json</code>. By
              default, the search index is included but can be disabled by
              setting
              <code>enabled: false</code>. If the search index is enabled, the
              <code>label</code> property on the manifest is always indexed. The
              properties of the <code>metadata</code> property are also indexed
              by default, but this can be modified to have these values not be
              indexed at all by setting{" "}
              <code>search.index.metadata.enabled</code>
              to <code>false</code>. Furthermore, all <code>metatdata</code>{" "}
              values can be indexed or only the properties that are specified in
              <code>canopy.json</code> by modifying{" "}
              <code>search.index.metadata.all</code>.
            </p>
            <p>
              The only property that can be indexed outside of{" "}
              <code>metadata</code>
              and <code>label</code> currently is <code>summary</code>. This is
              configured with <code>search.index.summary.enabled.</code>.
            </p>
            <Code language="json">{`"search": {
  "enabled": true,
  "index": {
    "metadata": {
      "enabled": true,
      "all": false
     },
    "summary": {
      "enabled": false
     }
  }
}`}</Code>{" "}
            <Heading as="h5">Configuring Theme</Heading>
            <p>
              The default theme for users can be set via{" "}
              <code>options.json</code>. This feature sets the initial theme for
              users as <code>light</code>,<code>dark</code>, or{" "}
              <code>system</code>. The <code>Toggle Theme</code>
              button can also be enabled of disabled here.
            </p>
            <p>
              <strong>Note:</strong> Currently, setting the theme here will only
              affect brand new users to your site. It will not change the
              default theme for users who have already visited.
            </p>
            <Code language="json">{`"theme": { "defaultTheme": "light", "toggleEnabled": false }`}</Code>
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
                <em>&quot;Nez Percé&quot;</em>
              </a>
              , with results coming from the{" "}
              <strong>Edward S. Curtis&apos;s The North American Indian</strong>{" "}
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
