import type { Metadata } from "next";
import { Geist, Geist_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { DemoModalProvider } from "@/components/ScheduleDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const chakra_petch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tracer | Observability Platform for AI-driven Science",
  description: "Tracer combines deep scientific knowledge and cutting-edge tech to accelerate AI adoption in industry.",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://tracer.com' : 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClasses = [
    geistSans.variable,
    geistMono.variable,
    chakra_petch.variable,
    'antialiased',
    'min-h-screen'
  ].join(' ');

  return (
    <html lang="en">
      <body className={bodyClasses}>
        <DemoModalProvider>
          <Header />
          {children}
          <Footer />
        </DemoModalProvider>
      </body>
    </html>
  );
}
