import React from 'react';
import { STORE_INFO, WHY_CHOOSE_US } from '../data/decorData';
import { ShieldCheck, Ruler, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="py-20 bg-logoMint border-y border-terracotta/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Store Photography & Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-terracotta/20 shadow-warm bg-white">
              <img
                src="/images/store.png"
                alt="Decor Guru Store Interior Patarkar Colony Mansarovar Jaipur"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-warmIvory p-4 rounded-2xl bg-ink/70 backdrop-blur-md border border-white/10">
                <div className="font-serif text-lg font-bold">Decor Guru Showroom</div>
                <div className="text-xs text-warmIvory/80">Patarkar Colony Road, Mansarovar, Jaipur - 302020</div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-6 bg-warmIvory border border-terracotta/30 p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
              <div className="font-serif text-3xl font-bold text-brandRed">10 Years</div>
              <div className="text-xs font-semibold text-ink uppercase tracking-wider mt-1">
                Of Home Décor Excellence
              </div>
              <p className="text-[11px] text-softCharcoal/70 mt-1">
                Serving Mansarovar, Vaishali Nagar & all of Jaipur since 2016.
              </p>
            </div>
          </div>

          {/* Right Column - Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
                Our Founding Story
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
                Crafting Personal Warmth in Every Jaipur Home
              </h2>
            </div>

            <p className="text-softCharcoal/90 text-sm sm:text-base leading-relaxed font-sans">
              Founded in 2016 on Patarkar Colony Road in Mansarovar, <strong>Decor Guru</strong> was built on a simple promise: home décor should never feel commercial or mass-produced. It should reflect the unique warmth, heritage, and personality of the family living inside.
            </p>

            <p className="text-softCharcoal/90 text-sm sm:text-base leading-relaxed font-sans">
              Over the last decade, we have curated an exclusive array of handcrafted wooden wall art, custom-tailored drapes, ambient brass lighting, and artisan collectibles. We don't just sell items; we partner with homeowners from measurement to final installation.
            </p>

            {/* Tagline Box with Brand Logo */}
            <div className="bg-warmIvory p-5 sm:p-6 rounded-2xl border-l-4 border-brandRed border border-terracotta/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-serif text-lg font-bold text-ink italic">
                  "{STORE_INFO.tagline}"
                </div>
                <div className="text-xs text-softCharcoal/70 mt-1">
                  — Decor Guru Brand Philosophy
                </div>
              </div>
              <img
                src={STORE_INFO.logoUrl}
                alt="iDecor GURU Logo"
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
              />
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brandRed shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-ink">In-House Tailoring</div>
                  <div className="text-[11px] text-softCharcoal/70">Custom stitching for all window sizes.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brandRed shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-ink">Artisan Partnerships</div>
                  <div className="text-[11px] text-softCharcoal/70">Direct from wood & brass sculptors.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brandRed shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-ink">Doorstep Measurements</div>
                  <div className="text-[11px] text-softCharcoal/70">Free home visits anywhere in Jaipur.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brandRed shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-ink">180+ 5-Star Reviews</div>
                  <div className="text-[11px] text-softCharcoal/70">Trusted by 5,000+ local families.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
