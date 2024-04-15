import { Link } from "@radix-ui/themes";

const ManifestId = ({ manifestId }: { manifestId: string }) => {
  return (
    <dl>
      <dt>IIIF Manifest</dt>
      <dd style={{ wordBreak: "break-word" }}>
        <Link href={manifestId}>{manifestId}</Link>
      </dd>
    </dl>
  );
};

export default ManifestId;
