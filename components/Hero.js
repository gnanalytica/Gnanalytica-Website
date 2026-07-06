/**
 * Hero — neobrutalist homepage hero on cream paper.
 *
 * A WebGL dither field (Paper Shaders) textures the backdrop, an Archivo Black
 * headline slides in word by word (GSAP), "AI" sits in a slapped-on acid
 * sticker, and a Three.js wireframe icosahedron tumbles beside the product
 * chips. A bordered tagline marquee closes the band.
 */
import dynamic from 'next/dynamic';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import SplitText from './ui/SplitText';
import Reveal from './ui/Reveal';
import PopIn from './ui/PopIn';
import Starburst from './ui/Starburst';
import Marquee from './ui/Marquee';
import Magnetic from './Magnetic';
import { products } from '../lib/products';

const DitherBackdrop = dynamic(() => import('./effects/DitherBackdrop'), { ssr: false });
const WireFrame = dynamic(() => import('./effects/WireFrame'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-3 border-ink bg-paper pt-28 sm:pt-36">
      {/* WebGL dithered texture, faded so type stays king */}
      <DitherBackdrop colorBack="#F7F1E5" colorFront="#DDD1B6" shape="warp" speed={0.25} size={2.5} className="opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="neo-tag rotate-[-1deg] bg-bubble">
                <Starburst size={16} fill="#121212" stroke="#121212" />
                Four products · One AI studio
              </p>
            </Reveal>

            <h1 className="mt-7 font-display text-[2.6rem] uppercase leading-[0.98] tracking-tight text-ink xs:text-5xl sm:text-6xl lg:text-7xl">
              <SplitText text="Wisdom-driven" delay={0.15} as="span" className="block" />
              <span className="mt-1 block">
                <PopIn as="span" className="mr-3 inline-block align-baseline" rotate={-2} delay={550}>
                  <span className="inline-block border-3 border-ink bg-acid px-3 pb-1 pt-2 shadow-neo sm:px-4">
                    AI
                  </span>
                </PopIn>
                <SplitText text="products" delay={0.35} as="span" className="inline" />
              </span>
              <SplitText text="& consulting" delay={0.5} as="span" className="block text-stroke" />
            </h1>

            <Reveal delay={0.55} className="mt-7 max-w-2xl">
              <p className="text-lg font-medium leading-relaxed text-ink-muted sm:text-xl">
                We build focused AI products — for <span className="marker font-bold text-ink">valuation</span>,{' '}
                <span className="marker font-bold text-ink">meetings</span>,{' '}
                <span className="marker font-bold text-ink">learning</span> and{' '}
                <span className="marker font-bold text-ink">health</span> — and help businesses become genuinely
                AI-ready. Real tools in production, not slideware.
              </p>
            </Reveal>

            <Reveal delay={0.7} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Magnetic strength={0.3}>
                <a href="#products" className="btn-neo bg-ink px-7 py-4 text-sm text-paper">
                  Explore products
                  <ArrowDownIcon className="h-4 w-4 stroke-[3]" />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#contact" className="btn-neo bg-paper-card px-7 py-4 text-sm text-ink">
                  Book a call
                  <ArrowRightIcon className="h-4 w-4 stroke-[3]" />
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Three.js wireframe + product chips */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto hidden aspect-square max-w-xs lg:block">
              <WireFrame className="absolute inset-0" accent="#FFC700" />
              <PopIn className="absolute -right-2 top-2" rotate={8} delay={800}>
                <Starburst size={72} fill="#FF90E8" spin>
                  <span className="font-display text-[10px] uppercase">Live</span>
                </Starburst>
              </PopIn>
              <PopIn className="absolute -left-4 bottom-6" rotate={-6} delay={950}>
                <span className="neo-tag bg-limey">est. gnana = wisdom</span>
              </PopIn>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-6">
              {products.map((p, i) => (
                <Reveal key={p.slug} delay={0.8 + i * 0.08}>
                  <a
                    href={`/${p.slug}`}
                    className="neo-hover flex items-center gap-2.5 border-2 border-ink bg-paper-card px-3.5 py-3 shadow-neo-sm"
                  >
                    <span
                      className="h-3.5 w-3.5 flex-shrink-0 border-2 border-ink"
                      style={{ background: p.theme.primary }}
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold uppercase tracking-wide text-ink">
                        {p.name}
                      </span>
                      <span className="block truncate font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                        {p.category}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* tagline ticker */}
      <div className="relative z-10 border-t-3 border-ink bg-acid py-3.5">
        <Marquee>
          {products.map((p) => (
            <span key={p.slug} className="mx-6 flex items-center gap-6 whitespace-nowrap">
              <Starburst size={14} fill="#121212" stroke="#121212" />
              <span className="font-display text-sm uppercase tracking-wide text-ink">{p.name}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-ink">{p.tagline}</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
