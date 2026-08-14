import React from 'react';
import { STORE_INFO } from '../data/decorData';
import { Phone, MapPin, MessageCircle, ArrowUp, Star } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-warmIvory pt-16 pb-8 border-t border-softCharcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-softCharcoal/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src={STORE_INFO.logoWhiteUrl}
                alt="iDecor GURU — Your Satisfaction is our Creation"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="font-serif text-lg italic text-warmIvory/90">
              "{STORE_INFO.tagline}"
            </p>

            <p className="text-xs text-warmIvory/70 max-w-sm leading-relaxed font-sans">
              Jaipur's trusted home décor destination on Patarkar Colony Road, Mansarovar since 2016. Custom curtains, carved wooden wall panels, ambient brass lamps & luxury showpieces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-softCharcoal flex items-center justify-center text-warmIvory hover:bg-brandRed transition-colors"
                title="Follow on Instagram"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-softCharcoal flex items-center justify-center text-warmIvory hover:bg-[#25D366] transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-softCharcoal flex items-center justify-center text-warmIvory hover:bg-terracotta transition-colors"
                title="Call Store"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-terracotta uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-warmIvory/80">
              <li>
                <a href="#home" className="hover:text-brandRed transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-brandRed transition-colors">Curated Collections</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-brandRed transition-colors">Showroom Catalogue</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-brandRed transition-colors">@decorguru_jaipur Feed</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brandRed transition-colors">Our Founding Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brandRed transition-colors">Verified Customer Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-brandRed transition-colors">Visit Mansarovar Store</a>
              </li>
            </ul>
          </div>

          {/* Store Location */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-terracotta uppercase tracking-wider">
              Mansarovar Store
            </div>
            <div className="text-xs text-warmIvory/80 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-brandRed shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-brandRed shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon size={16} className="text-brandRed shrink-0" />
                <span>{STORE_INFO.instagram}</span>
              </div>
              <div className="pt-2 text-[11px] text-warmIvory/60">
                Mon - Sun: 10:00 AM - 8:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warmIvory/60">
          <div>
            © 2016 - {new Date().getFullYear()} Decor Guru (iDecor GURU). All rights reserved. Mansarovar, Jaipur.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-warmIvory/80 hover:text-brandRed transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
