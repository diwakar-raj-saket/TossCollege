import { Jura, Roboto } from 'next/font/google';
import './globals.css';

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
  title: 'College Website',
  description: 'College Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${juraSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
