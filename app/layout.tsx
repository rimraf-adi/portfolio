import './globals.css';
import { playfair, calligraphy } from './fonts';

export const metadata = {
  title: 'Video Editor Portfolio',
  description: 'Professional video editing services for brands and businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${playfair.variable} ${calligraphy.variable}`}>
        {children}
      </body>
    </html>
  );
}
