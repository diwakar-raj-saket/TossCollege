import { Jura, Roboto } from 'next/font/google';
import './globals.css';
import Head from "next/head";
const juraSans = Jura({
  variable: '--font-jura-sans',
  subsets: ['latin'],
});

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "TOSS College of Pharmacy",
  description: "College Website",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${juraSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
