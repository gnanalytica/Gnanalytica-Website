/**
 * Products showcase for the Gnanalytica homepage.
 *
 * Presents the three products (Valytica, Standup, Learn) as themed, animated
 * cards that route to their dedicated pages at /valytica, /standup, /learn.
 */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';
import { getIcon } from './products/icons';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ProductsShowcase() {
  return (
    <section id="products" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="text-sm font-semibold uppercase tracking-luxury text-editorial-primary mb-4">Our Products</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-editorial-ink leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Software we build, run and stand behind
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-editorial-charcoal font-light leading-relaxed tracking-wide">
            Three focused products, each born from the same belief: AI should quietly do the heavy lifting while people keep the judgement.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid lg:grid-cols-3 gap-7">
          {products.map((product, i) => {
            const Icon = getIcon(product.features[0].icon);
            return (
              <motion.div
                key={product.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i}
              >
                <motion.div
                  className="group relative h-full bg-white rounded-2xl border border-gray-200/70 shadow-premium hover:shadow-premium-xl transition-all duration-500 overflow-hidden flex flex-col"
                  whileHover={{ y: -6 }}
                >
                  {/* Stretched link makes the whole card navigate to the product page */}
                  <Link href={`/${product.slug}`} className="absolute inset-0 z-10" aria-label={`Explore ${product.name}`} />

                  {/* Themed top band */}
                  <div className="relative h-32 overflow-hidden" style={{ backgroundImage: product.theme.gradient }}>
                    <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 80% 0%, rgba(255,255,255,0.7) 0%, transparent 50%)' }} />
                    <motion.div
                      className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                    />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {product.name}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-7">
                    <span className="text-xs font-semibold uppercase tracking-luxury mb-3" style={{ color: product.theme.primary }}>
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-editorial-ink mb-3 leading-snug tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {product.tagline}
                    </h3>
                    <p className="text-editorial-charcoal font-light leading-relaxed text-sm flex-1">{product.summary}</p>

                    <div className="mt-6 flex items-center justify-between pt-5 border-t border-gray-100">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: product.theme.primary }}>
                        Explore {product.name}
                        <ArrowRightIcon className="w-4 h-4" />
                      </span>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-20 inline-flex items-center gap-1 text-xs font-medium text-editorial-muted hover:text-editorial-ink transition-colors"
                      >
                        Live <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
