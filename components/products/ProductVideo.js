/**
 * ProductVideo — a demo video section for a product landing page.
 *
 * Rendered by ProductPage only when the product defines `video`
 * ({ title, src, poster }); currently used by Field Companion. A native
 * <video> in a 16:9 frame that spans the page's content column, with the
 * same rounded corners, hairline border and soft shadow as the page's cards.
 */
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProductVideo({ video }) {
  return (
    <section id="demo" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-10 text-center font-display text-4xl tracking-tightish text-ink sm:mb-14 sm:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          {video.title}
        </motion.h2>
        <motion.div
          className="aspect-video w-full overflow-hidden rounded-2xl border border-ink-line bg-black shadow-soft"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <video className="h-full w-full" controls preload="metadata" playsInline poster={video.poster}>
            <source src={video.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
