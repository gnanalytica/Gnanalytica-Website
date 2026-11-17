/**
 * LegalHead — <Head> tags for a Field Companion legal page: title,
 * description, canonical URL and Open Graph tags. While the text still holds
 * drafting markers the page asks search engines not to index it.
 */
import Head from 'next/head';

const SITE = 'https://gnanalytica.com';

export default function LegalHead({ title, description, path, draft }) {
  const url = `${SITE}${path}`;
  return (
    <Head>
      <title>{`${title} | Gnanalytica`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {draft && <meta name="robots" content="noindex" />}
    </Head>
  );
}
