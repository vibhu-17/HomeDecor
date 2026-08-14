import React from 'react';
import { MessageCircle, ArrowRight, Star, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/decorData';

export default function Hero({ onOpenInquiry }) {
  const whatsappHeroUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Decor Guru! I am exploring your website hero section and would like to consult about home decor for my Jaipur home."
  )}`;

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-warmIvory overflow-hidden pt-4 pb-12">
      {/* Background Image Container with Editorial Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Decor Guru Luxury Living Room Jaipur"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-warmIvory via-warmIvory/90 to-transparent lg:w-2/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-warmIvory via-warmIvory/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-12">
        <div className="max-w-2xl">
          {/* Trust Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-warmIvory/90 backdrop-blur-md border border-terracotta/30 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brandRed"></span>
            <span className="text-xs font-semibold tracking-wider text-softCharcoal uppercase">
              Est. 2016 · Mansarovar, Jaipur
            </span>
            <span className="text-terracotta">•</span>
            <span className="text-xs font-medium text-terracotta flex items-center gap-1">
              <Star size={12} className="fill-terracotta" /> 4.9★ Rating
            </span>
          </div>

          {/* Main Headline Tagline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15] mb-6">
            "Your Satisfaction <br />
            <span className="italic font-normal text-brandRed">is our Creation."</span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg text-softCharcoal/90 font-sans leading-relaxed mb-8 max-w-xl">
            Bringing warmth, elegance, and handcrafted soul to Jaipur homes for a decade. Discover bespoke curtains, carved wooden wall panels, warm brass lighting, soft rugs, and hand-picked showpieces.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-brandRed text-warmIvory px-7 py-4 rounded-full font-medium transition-all shadow-warm hover:shadow-warm-hover group"
            >
              <span>Explore Collections</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow"
            >
              <MessageCircle size={20} className="fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Key Facts Pill List */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-terracotta/20 max-w-lg">
            <div>
              <div className="font-serif text-2xl font-bold text-ink">10+</div>
              <div className="text-xs text-softCharcoal/70">Years in Business</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-ink">5,000+</div>
              <div className="text-xs text-softCharcoal/70">Jaipur Homes Styled</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-ink">4.9★</div>
              <div className="text-xs text-softCharcoal/70">Google Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
