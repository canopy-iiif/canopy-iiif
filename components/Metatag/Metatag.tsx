import { NextSeo } from 'next-seo';
import { getValues } from '@/hooks/getValues';
import { InternationalString } from "@iiif/presentation-3";
import { getResourceImage } from "@/hooks/getResourceImage";

interface MetatagProps {
  label: InternationalString;
  summary: InternationalString;
  thumbnail: { id: string }[];
}

const Metatag: React.FunctionComponent<MetatagProps> = ({ label, summary, thumbnail }) => {
  const labelValue = getValues(label);
  const summaryValue = getValues(summary);
  const thumbnailValue = getResourceImage(thumbnail);

  return (
    <NextSeo
      title={labelValue ? labelValue[0] : undefined}
      description={summaryValue ? summaryValue[0] : undefined}
      openGraph={
        {
          title: labelValue,
          description: summaryValue,
          url: canonicalUrl,
          images: [
            {
              url: thumbnailValue,
              alt: labelValue
            }
          ]
        }
      }
    />
  );
};
export default Metatag;