import { Playfair_Display, Dancing_Script } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const calligraphy = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-calligraphy',
}); 