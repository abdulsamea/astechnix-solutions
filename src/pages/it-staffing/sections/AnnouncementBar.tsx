import { Star, ShieldCheck } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-deep-navy/95 text-white border-b border-pacific-cyan/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          ISO 27001 &amp; SOC 2 Certified
        </span>
        <span className="hidden text-white/30 sm:inline">|</span>
        <span className="hidden sm:inline">10+ Years Global IT Delivery</span>
        <span className="hidden text-white/30 sm:inline">|</span>
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          4.9/5 on Clutch
        </span>
      </div>
    </div>
  );
}
