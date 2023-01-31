import React from "react";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";

export default function About() {
  return (
    <Layout>
      <Container>
        <section>
          <header>
            <h2>Basic Features</h2>
          </header>
          <div>
            <p>[content]</p>
          </div>
        </section>
        <section>
          <header>
            <h2>Getting Started</h2>
          </header>
          <div>
            <p>[content]</p>
          </div>
        </section>
        <section>
          <header>
            <h2>History</h2>
          </header>
          <div>
            <p>
              Canopy was initially conceived at the University of Tennessee
              Libraries in the Summer ’21 as a statically generated digital
              humanities website for the Rising from the Ashes: The Chimney Tops
              2 Wildfires Oral History Project. The key goal of the initial
              project was to reference IIIF resources hosted externally without
              any duplication of the source material. Gatsby.js was chosen as a
              platform to deliver materials sourced from IIIF Collection and
              present IIIF Manifests of diverse content resource types
              including: Sound, Video, and Image. Various front end user
              interface components were also created to help in this
              presentation, along with search and faceting functionality built
              around lunr.js.
            </p>
            <p>
              The original Canopy was generated from a single IIIF Collection;
              however, the components delivering the user interface became
              heavily tailored to the source material of the Rising from the
              Ashes project, thus limiting the use of the codebase for other
              collections. A heavily integrated IIIF A/V Viewer was designed to
              deliver Sound and Video resources. This A/V viewer would
              eventually evolve into a partial inspiration for Clover IIIF.
            </p>
            <p>
              Canopy was reimagined as Canopy IIIF in early Winter ’22 with the
              primary focus of the project maintaining the interoperable ability
              to build from any Collection following IIIF Presentation API 2.0
              or 3.0 specifications. In this version the decision was also made
              to switch from Gatsby.js platform to Next.js.
            </p>
          </div>
        </section>
        <section>
          <header>
            <h2>Contributors and Acknowledgements</h2>
          </header>
          <div>
            <dl>
              <dt>Mat Jordan</dt>
              <dd>Developer, Northwestern University Libraries</dd>
              <dd>
                Former Director of Technology Solutions, University of Tennessee
                Libraries
              </dd>
              <dt>Mark Baggett</dt>
              <dd>
                Head, Digital Initiatives, University of Tennessee Libraries
              </dd>
              <dt>Emily Gore</dt>
              <dd>
                Associate University Librarian, University of Georgia Libraries
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
            <p>
              The project name Canopy is a jocular title inspired by the
              presentation, A Tree’s Strength Is Its Trunk: IIIF as Central
              Operational Infrastructure, delivered by Maria Matienzo (Stanford
              University) and Esme Cowles (Princeton University) at the CNI Fall
              2020 Virtual Membership Meeting.
            </p>
          </div>
        </section>
        <section>
          <header>
            <h2>Colophon</h2>
          </header>
          <div>
            <p>
              Mat Jordan, the primary author of Canopy IIIF, was born within the
              original homelands of the Nimíipuu (Nez Percé) and hails from Nez
              Perce County, Idaho, in the United States. Relating to this fact,
              the source collection for the Canopy IIIF demonstration is
              delivered via IIIF from the Edward S. Curtis's The North American
              Indian collection, Volume 8. The Nez Perces. Wallawalla. Umatilla.
              Cayuse. The Chinookan tribes series, at Northwestern University
              Libraries.
            </p>
            <p>
              This project is created using Next.js as a platform, with a
              FlexSearch index for search, IIIF Presentation API 3.0 delivering
              content, Radix UI and Stitches used throughout for the user
              interface, and various community modules from IIIF and Samvera
              supporting the work presentation and resource delivery.
            </p>
            <p>
              This demonstration instance of Canopy IIIF is hosted on Vercel
              with a consistent build time under 40 seconds. The build process
              includes metadata aggregation requests of 81 IIIF Manifests.
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
