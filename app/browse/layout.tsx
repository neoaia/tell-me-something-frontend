import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse | Tell Me Something",
};

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
