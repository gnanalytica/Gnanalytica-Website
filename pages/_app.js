import { Bricolage_Grotesque, Instrument_Sans, Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

/*
 * Website fonts, self-hosted with next/font: the font files are downloaded at
 * build time and served from our own domain, so visitors' browsers make no
 * request to Google. Each family is exposed as a CSS variable on :root, which
 * styles/globals.css and tailwind.config.js use.
 */
const instrumentSerif = Instrument_Serif({ subsets: ['latin', 'latin-ext'], weight: '400', style: ['normal', 'italic'], display: 'swap' });
const inter = Inter({ subsets: ['latin', 'latin-ext'], weight: ['300', '400', '500', '600', '700', '800'], display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin', 'latin-ext'], axes: ['opsz'], display: 'swap' });
const instrumentSans = Instrument_Sans({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], style: ['normal', 'italic'], display: 'swap' });

/**
 * The custom App component initializes pages. We import global styles here so
 * Tailwind's base and utility classes are available throughout the app.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-instrument-serif: ${instrumentSerif.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
          --font-jetbrains-mono: ${jetbrainsMono.style.fontFamily};
          --font-bricolage: ${bricolage.style.fontFamily};
          --font-instrument-sans: ${instrumentSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
