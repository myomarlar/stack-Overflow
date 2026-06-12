/** @format */

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {children}
      <h1>This is dashboard Layout</h1>
    </div>
  );
}
