import { buildCollection } from "@/services/iiif-builder";
import { gql } from "@apollo/client";
import { client } from "@/pages/api/graphql";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import orderBy from "lodash/orderBy";
import absoluteUrl from "next-absolute-url";
import slugify from "slugify";

const getMetadata = async (metdataQuery) => {
  const { loading, error, data } = await client.query({
    query: gql`
          query Metadata {
            ${metdataQuery}
          }
        `,
  });
  return data;
};

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);
  const { label } = req.query;

  const metdataQuery = `
    ${label}: metadata(label: "${label}") {
      manifestId
      value
      thumbnail
    }
  `;

  Promise.resolve(
    getMetadata(metdataQuery)
      .then((data) => {
        return [label]
          .map((string) => {
            const values = data[string];
            return {
              label: string,
              data: map(groupBy(values, "value"), (values, value) => ({
                value,
                values,
              })),
            };
          })
          .map((grouped) => {
            const items = orderBy(
              grouped.data.map((term) => {
                const representative =
                  term.values[Math.floor(Math.random() * term.values.length)]
                    .manifestId;
                const thumbnail =
                  term.values[Math.floor(Math.random() * term.values.length)]
                    .thumbnail;
                return {
                  label: term.value,
                  summary: `View objects with a label of "${grouped.label}" and value of "${term.value}".`,
                  id: `${origin}/api/iiif/metadata/${slugify(
                    grouped.label
                  )}/${slugify(term.value)}`,
                  thumbnail: thumbnail,
                  homepage: `${origin}/browse/${slugify(
                    grouped.label
                  )}/${slugify(term.value)}`,
                };
              }),
              "count",
              "desc"
            ).slice(0, 10);
            return {
              id: `${origin}/api/iiif/metadata/${grouped.label}`,
              label: grouped.label,
              summary: `Browse by ${grouped.label}`,
              homepage: `${origin}/browse/${slugify(grouped.label)}`,
              items,
            };
          })[0];
      })
      .then((data) => {
        res.status(200).json(buildCollection(data));
      })
  );
}
