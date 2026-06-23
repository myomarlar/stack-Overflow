/** @format */

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;
  return <div>BlogDetails - {slugs}</div>;
}
