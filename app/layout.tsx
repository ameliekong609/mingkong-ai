import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Ming Kong | Enterprise Applied AI and Controlled Digital Workers",
  description:
    "Dr Ming Kong builds enterprise AI systems that move beyond simple workflows into controlled digital workers with evidence grounding, review, human approval and release controls.",
  metadataBase: new URL("https://mingkong.ai"),
  openGraph: {
    title: "Dr Ming Kong | Enterprise Applied AI and Controlled Digital Workers",
    description:
      "A personal brand site for Dr Ming Kong, focused on enterprise Applied AI, agentic systems and controlled digital workers.",
    url: "https://mingkong.ai",
    siteName: "mingkong.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr Ming Kong - Controlled digital workers for enterprise AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Ming Kong | Enterprise Applied AI and Controlled Digital Workers",
    description:
      "Enterprise Applied AI, agentic systems and controlled digital workers.",
    images: ["/og-image.png"],
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
