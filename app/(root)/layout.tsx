/** @format */

export default function NavLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Nav Layout </h1>
      {children}
    </div>
  );
}
