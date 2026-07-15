import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Ming Kong | Controlled Digital Workers for Enterprise AI",
  description:
    "Dr Ming Kong designs enterprise AI systems that move beyond simple workflows into controlled digital workers with evidence grounding, review, human approval and release controls.",
  metadataBase: new URL("https://mingkong.ai"),
  openGraph: {
    title: "Dr Ming Kong | Controlled Digital Workers for Enterprise AI",
    description:
      "Enterprise AI shouldn't stop at workflows. It should deploy controlled digital workers.",
    url: "https://mingkong.ai",
    siteName: "mingkong.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Ming Kong | Controlled Digital Workers for Enterprise AI",
    description:
      "Enterprise AI systems with evidence grounding, review, human approval and release controls.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-950">{children}</body>
    </html>
  );
}
