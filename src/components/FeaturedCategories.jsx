import React from 'react';
import { CATEGORIES } from '../data/decorData';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/decorData';

export default function FeaturedCategories({ onSelectCategory }) {
  return (
    <section id="collections" className="py-20 bg-warmIvory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-terracotta/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
              Curated Collections
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Crafted for Warmth & Elegance
            </h2>
          </div>
          <p className="text-softCharcoal/80 text-sm sm:text-base max-w-md mt-3 md:mt-0 font-sans">
            Every piece in our Mansarovar showroom is hand-picked to elevate your living spaces with authentic textures and timeless artisan details.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Feature Tile - Wall Decor */}
          <div
            onClick={() => onSelectCategory('wall-decor')}
            className="md:col-span-7 group cursor-pointer relative rounded-2xl overflow-hidden shadow-warm border border-terracotta/15 hover:border-terracotta/40 transition-all duration-500 bg-white"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative">
              <img
                src={CATEGORIES[0].image}
                alt={CATEGORIES[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"></div>
              
              {/* Top Tag */}
              <div className="absolute top-4 left-4 bg-warmIvory/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-terracotta border border-terracotta/20">
                {CATEGORIES[0].tag}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-warmIvory">
                <div className="text-xs font-medium text-warmIvory/70 tracking-wider mb-1">
                  {CATEGORIES[0].count}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-brandRed transition-colors">
                    {CATEGORIES[0].name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-warmIvory/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brandRed group-hover:border-brandRed transition-all">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
                <p className="text-sm text-warmIvory/80 mt-2 max-w-lg line-clamp-2">
                  {CATEGORIES[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Large Feature Tile - Curtains & Blinds */}
          <div
            onClick={() => onSelectCategory('curtains-blinds')}
            className="md:col-span-5 group cursor-pointer relative rounded-2xl overflow-hidden shadow-warm border border-terracotta/15 hover:border-terracotta/40 transition-all duration-500 bg-white"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] md:h-full overflow-hidden relative">
              <img
                src={CATEGORIES[1].image}
                alt={CATEGORIES[1].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"></div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4 bg-warmIvory/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-terracotta border border-terracotta/20">
                {CATEGORIES[1].tag}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-warmIvory">
                <div className="text-xs font-medium text-warmIvory/70 tracking-wider mb-1">
                  {CATEGORIES[1].count}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-brandRed transition-colors">
                    {CATEGORIES[1].name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-warmIvory/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brandRed group-hover:border-brandRed transition-all">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
                <p className="text-sm text-warmIvory/80 mt-2 line-clamp-2">
                  {CATEGORIES[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Three Smaller Tiles Row */}
          {CATEGORIES.slice(2).map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="md:col-span-4 group cursor-pointer relative rounded-2xl overflow-hidden shadow-warm border border-terracotta/15 hover:border-terracotta/40 transition-all duration-500 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"></div>

                <div className="absolute top-3 left-3 bg-warmIvory/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-terracotta">
                  {cat.tag}
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 text-warmIvory">
                  <div className="text-[11px] text-warmIvory/70 mb-0.5">{cat.count}</div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl font-bold text-white group-hover:text-brandRed transition-colors">
                      {cat.name}
                    </h4>
                    <ArrowUpRight size={18} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Callout */}
        <div className="mt-12 bg-logoMint border border-terracotta/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-ink">Need custom sizes or fabric fitting?</h4>
            <p className="text-sm text-softCharcoal/80 mt-1">Our decor experts visit your home in Jaipur for measurements and styling advice.</p>
          </div>
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Decor%20Guru!%20I%20would%20like%20to%20request%20a%20free%20home%20consultation%20for%20curtains%20and%20decor.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm shrink-0"
          >
            <MessageCircle size={18} className="fill-white" />
            <span>Book Home Visit on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
