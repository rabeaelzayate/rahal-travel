import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahal-travel.com"),
  title: {
    default: "رحال للسفر والسياحة | Rahal Travel & Tourism",
    template: "%s | رحال للسفر والسياحة",
  },
  description:
    "شركة رحال للسفر والسياحة — بوابتك لخدمات الحج والعمرة، الرحلات السياحية، تأشيرات العمل لدول الخليج وليبيا، تأشيرات الزيارات، حجز تذاكر الطيران وأفضل الفنادق.",
  keywords: [
    "رحال للسفر والسياحة",
    "حج وعمرة",
    "تأشيرات عمل السعودية",
    "تأشيرات عمل الإمارات",
    "تأشيرات ليبيا",
    "حجز طيران",
    "حجز فنادق",
    "رحلات سياحية داخلية وخارجية",
    "Rahal Travel",
  ],
  authors: [{ name: "Rahal Travel & Tourism" }],
  creator: "Rahal Travel & Tourism",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://rahal-travel.com",
    title: "رحال للسفر والسياحة | Rahal Travel & Tourism",
    description:
      "خدمات متكاملة للسفر والسياحة، الحج والعمرة، تأشيرات العمل والزيارات، حجز الطيران والفنادق.",
    siteName: "رحال للسفر والسياحة",
  },
  twitter: {
    card: "summary_large_image",
    title: "رحال للسفر والسياحة",
    description: "بوابتك الموثوقة لخدمات السفر والسياحة والتأشيرات المعتمدة.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B192C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-gold-500 selection:text-navy-950"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
