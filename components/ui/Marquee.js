/**
 * Marquee — Magic-UI-style infinite ticker, neobrutalist edition.
 *
 * Content is rendered twice and slid -50% on a linear loop; `reverse` flips the
 * direction and `slow` relaxes the pace. Wrap in a bordered strip for the
 * classic print-ticker look.
 */
export default function Marquee({ children, reverse = false, slow = false, className = '' }) {
  const anim = reverse ? 'animate-marquee-reverse' : slow ? 'animate-marquee-slow' : 'animate-marquee';
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className={`flex w-max shrink-0 items-center ${anim} no-scrollbar`}>
        {children}
        {children}
      </div>
    </div>
  );
}
