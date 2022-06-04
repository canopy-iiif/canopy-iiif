import Layout from "../../components/layout";
import BloomIIIF from "@samvera/bloom-iiif";

export default function Index() {
  return (
    <Layout>
      <section
        style={{
          maxWidth: "1280px",
          margin: "1rem auto 0",
          position: "relative",
        }}
      >
        <h1>
          Meet the Artists
        </h1>
        <h2>Paige Braddock</h2>
        <div style={{padding: "0px 1.618rem 2rem"}}>
          <strong>Paige Braddock</strong> is an Eisner-nominated artist and writer and the Chief Creative Officer at Charles M. Schulz Creative Associates. She is best known for her Eisner-nominated comic strip, Jane’s World, the first gay-themed comic work to receive online distribution by a national media syndicate in the US. Braddock concluded the comic strip after completing its 20-year run in 2018. She has illustrated several Peanuts children’s books. Her other graphic novels for children include the Stinky Cecil series. Braddock is publishing a new line of graphic novels for children with Penguin Kids, titled Peanut, Butter, & Crackers. The second book in the series, Fetch!, is out now. She lives with her wife, Evelyn, and their two dogs and a cat in Sebastopol, California.
        </div>
        <BloomIIIF
          collectionId={`https://digital.lib.utk.edu/static/iiif/collections/paige_rftaart.json`}
        />
        <h2>Marshall Ramsey</h2>
        <div style={{padding: "0px 1.618rem 2rem"}}>
          <strong>Marshall Ramsey</strong> is a two-time Pulitzer Prize finalist whose cartoons are syndicated nationally and whose artwork, stories, and posts are frequently shared on social media. (By the way, he got his cartooning start at UT, working at the Daily Beacon.) Marshall is editor-at-large for Mississippi Today, a nonpartisan, nonprofit news and media company. He also hosts a weekly radio program and the television program Conversations on Mississippi Public Broadcasting.
        </div>
        <BloomIIIF
          collectionId={`https://digital.lib.utk.edu/static/iiif/collections/marshall_rftaart.json`}
        />
        <h2>Danny Wilson</h2>
        <div style={{padding: "0px 1.618rem 2rem"}}>
          <strong>Danny Wilson</strong> is a freelance illustrator based in Knoxville Tennessee. For almost 40 years he has built a reputation for versatility, illustrating in many different styles and genres. Primarily working as a digital concept artist for event and experiential marketing, Wilson has created work for Disney, Warner Bros., Netflix, Amazon, Coca Cola, HGTV, Taylor Swift and many more. As a poster artist he was selected to create posters for the 2017 and 2018 Chick-fil-A Kickoff Games, The Battle at Bristol (Tennesee vs Virginia Tech; worlds largest college football game) and the Official University of Tennessee 1998 National Championship poster, among others. Through the years he has also worked as a magazine and newspaper illustrator and recently has done athletics branding work for the University of Tennessee Volunteers and the University of Tennessee-Southern Firehawks. Wilson graduated from the University of Tennessee in 1984 with a BFA degree.
        </div>
        <BloomIIIF
          collectionId={`https://digital.lib.utk.edu/static/iiif/collections/danny_rftaart.json`}
        />
        <h2>Charlie Daniel</h2>
        <div style={{padding: "0px 1.618rem 2rem"}}>
          <strong>Charlie Daniel</strong> is an editorial cartoonist whose career is a digest of more than fifty years of local and national politics. Editorial cartoonist at the Knoxville Journal from 1958 until its closure in 1992, Daniel has been adding his wry brand of wit and insight to the Knoxville News Sentinel ever since. In 2011, the beloved editorial cartoonist donated his entire collection of hand-drawn, original cartoons to the UT Libraries, inspiring the 1,500-piece Charlie Daniel Editorial Cartoon Collection now held by the Betsey B. Creekmore Special Collections and University Archives.
        </div>
        <BloomIIIF
          collectionId={`https://digital.lib.utk.edu/static/iiif/collections/charlie_rftaart.json`}
        />
      </section>
    </Layout>
  );
}