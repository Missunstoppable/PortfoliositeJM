import type { Metadata } from "next";
import { Quicksand, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorRestorer from "@/components/CursorRestorer";
import "./globals.css";

const themeInitScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const title = "Jianan Meng — Product Designer";
const description =
  "Product Designer turning complex journeys into clear, simple, measurable and ultimately HUMAN product experiences.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiananmeng.design"),
  title: {
    default: title,
    template: "%s — Jianan Meng",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#faf6f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${lato.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <CursorRestorer />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
