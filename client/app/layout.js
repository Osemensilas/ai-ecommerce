import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "E commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="fa/fontawesome-free-6.6.0-web/css/all.css" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
