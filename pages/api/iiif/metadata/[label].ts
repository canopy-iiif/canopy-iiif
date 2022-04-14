import { buildCollection } from "../../../../services/iiif-builder";
import { gql } from "@apollo/client";
import { client } from "./../../graphql";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import orderBy from "lodash/orderBy";
import { withRouter } from "next/router";

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
  const { label } = req.query;

  const metdataQuery = `
    ${label}: metadata(label: "${label}") {
      manifestId
      value
    }
  `;

  Promise.resolve(getMetadata(metdataQuery)).then((data) => {
    const collectionData = [label]
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
            return {
              label: term.value,
              summary: `${term.values.length} Items`,
              id: term.values[Math.floor(Math.random() * term.values.length)]
                .manifestId,
            };
          }),
          "count",
          "desc"
        ).slice(0, 10);
        return {
          id: `http://localhost:5001/api/iiif/metadata/${grouped.label}`,
          label: grouped.label,
          summary: `Browse by ${grouped.label}`,
          homepage: `http://localhost:5001/search`,
          items,
        };
      })[0];

    res.status(200).json(buildCollection(collectionData));
  });
}
