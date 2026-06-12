/** @format */

export default async function BLogsDetails({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;
  return (
    <div>
      <h1>BlogsDetails - {slugs}</h1>
    </div>
  );
}
