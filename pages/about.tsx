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
              While the original Canopy was originally generated from a IIIF
              Collection, the components delivering the user interface became
              heavily tailored to the source material of the Rising from the
              Ashes, thus limiting the use of the codebase for other IIIF
              Collections. A heavily integrated IIIF A/V Viewer was designed to
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
      </Container>
    </Layout>
  );
}
