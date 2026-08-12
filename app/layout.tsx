import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI SEO Analyzer",
  description: "AI SEO Analyzer is a powerful tool that uses artificial intelligence to analyze and optimize your website's SEO performance. With its advanced algorithms, it provides insights and recommendations to help you improve your search engine rankings and drive more organic traffic to your site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
