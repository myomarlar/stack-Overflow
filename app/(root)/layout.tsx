/** @format */

export default function NavLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Nav Layout bar</h1>
      {children}
    </div>
  );
}
