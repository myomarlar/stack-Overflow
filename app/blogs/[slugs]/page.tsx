/** @format */

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;
  return (
    <div>
      <h1>BlogDetails - {slugs}</h1>
    </div>
  );
}
