import { Header } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="My Custom Canopy" />
      {children}
    </>
  );
}
