import React from 'react';
import { REVIEWS, STORE_INFO } from '../data/decorData';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-warmIvory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
            <Star size={14} className="fill-brandRed text-brandRed" />
            Verified Customer Reviews
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Loved Across Jaipur Neighborhoods
          </h2>
          <p className="text-softCharcoal/80 text-sm sm:text-base mt-2">
            Real feedback from homeowners in Mansarovar, Vaishali Nagar, Malviya Nagar & C-Scheme.
          </p>

          <div className="inline-flex items-center gap-3 bg-logoMint border border-terracotta/20 px-4 py-2 rounded-full mt-4 text-xs">
            <span className="font-bold text-ink flex items-center gap-1">
              <Star size={14} className="fill-[#FFD700] text-[#FFD700]" /> {STORE_INFO.rating} / 5.0
            </span>
            <span className="text-softCharcoal/40">•</span>
            <span className="text-softCharcoal/80">Based on {STORE_INFO.reviewCount}+ Google & Justdial Reviews</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-terracotta/15 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FFD700]" />
                    ))}
                  </div>

                  {/* Highlight Tag */}
                  <span className="text-[11px] font-semibold text-terracotta bg-logoMint border border-terracotta/20 px-2.5 py-0.5 rounded-full">
                    {review.highlight}
                  </span>
                </div>

                <Quote size={28} className="text-terracotta/20 mb-2" />

                <p className="text-softCharcoal text-sm leading-relaxed font-sans italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-terracotta/10 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-ink text-base flex items-center gap-1.5">
                    <span>{review.name}</span>
                    {review.verified && (
                      <CheckCircle2 size={15} className="text-[#25D366]" title="Verified Customer" />
                    )}
                  </div>
                  <div className="text-xs text-softCharcoal/60 flex items-center gap-1 mt-0.5">
                    <MapPin size={12} />
                    <span>{review.location}</span>
                  </div>
                </div>

                <div className="text-[11px] text-softCharcoal/50">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
