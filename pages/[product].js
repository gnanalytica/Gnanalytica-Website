import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ProductPage from '../components/products/ProductPage';
import { products, getProduct, productSlugs } from '../lib/products';

/**
 * Dynamic product landing pages served at /valytica, /standup, /learn and
 * /field-companion.
 * Statically generated from the catalogue in lib/products.js; unknown slugs 404.
 */
export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>{`${product.name} — ${product.tagline} | Gnanalytica`}</title>
        <meta name="description" content={product.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta property="og:title" content={`${product.name} by Gnanalytica`} />
        <meta property="og:description" content={product.summary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductPage product={product} />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: productSlugs.map((slug) => ({ params: { product: slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const product = getProduct(params.product);
  if (!product) return { notFound: true };
  // Show a product's demo video only once both files are in public/.
  if (product.video) {
    const inPublic = (src) => fs.existsSync(path.join(process.cwd(), 'public', src));
    if (!inPublic(product.video.src) || !inPublic(product.video.poster)) {
      const { video, ...rest } = product;
      return { props: { product: rest } };
    }
  }
  return { props: { product } };
}
