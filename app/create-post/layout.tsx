import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a Post | Tell Me Something",
};

export default function CreatePostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
