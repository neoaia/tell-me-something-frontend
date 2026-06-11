import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "View Post | Tell Me Something",
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
