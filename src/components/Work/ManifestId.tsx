import Link from "next/link";

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
