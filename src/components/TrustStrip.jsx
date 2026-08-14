import React from 'react';
import { ShieldCheck, MapPin, Award, Heart, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/decorData';

export default function TrustStrip() {
  return (
    <section className="bg-logoMint border-y border-terracotta/15 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-warmIvory border border-terracotta/20 flex items-center justify-center text-brandRed shrink-0 shadow-sm">
              <Award size={20} />
            </div>
            <div>
              <div className="font-serif text-sm font-bold text-ink">Est. 2016</div>
              <div className="text-xs text-softCharcoal/70">10 Years of Excellence</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-warmIvory border border-terracotta/20 flex items-center justify-center text-brandRed shrink-0 shadow-sm">
              <MapPin size={20} />
            </div>
            <div>
              <div className="font-serif text-sm font-bold text-ink">Patarkar Colony</div>
              <div className="text-xs text-softCharcoal/70">Mansarovar, Jaipur</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-warmIvory border border-terracotta/20 flex items-center justify-center text-brandRed shrink-0 shadow-sm">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div className="font-serif text-sm font-bold text-ink">Free Consultation</div>
              <div className="text-xs text-softCharcoal/70">Doorstep Measurement</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-warmIvory border border-terracotta/20 flex items-center justify-center text-brandRed shrink-0 shadow-sm">
              <Heart size={20} />
            </div>
            <div>
              <div className="font-serif text-sm font-bold text-ink">Locally Loved</div>
              <div className="text-xs text-softCharcoal/70">4.9★ Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
