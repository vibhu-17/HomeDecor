import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Star } from 'lucide-react';
import { STORE_INFO } from '../data/decorData';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-ink text-warmIvory text-xs py-2 px-4 border-b border-softCharcoal/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-brandRed animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Decor Guru Store · Patarkar Colony Road, Mansarovar, Jaipur
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-[#FFD700]">
              <Star size={12} className="fill-[#FFD700]" />
              <span className="font-semibold text-warmIvory">{STORE_INFO.rating}★</span>
              <span className="text-warmIvory/70">({STORE_INFO.reviewCount} Reviews)</span>
            </span>
            <span className="hidden md:inline text-warmIvory/40">|</span>
            <span className="hidden md:inline text-warmIvory/80">Est. 2016 (10 Years of Trust)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-warmIvory/95 backdrop-blur-md shadow-warm py-3 border-b border-terracotta/15'
            : 'bg-warmIvory py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group py-0.5">
            <img
              src={STORE_INFO.logoUrl}
              alt="iDecor GURU — Your Satisfaction is our Creation"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-softCharcoal hover:text-brandRed transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandRed transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="p-2.5 rounded-full border border-terracotta/20 text-softCharcoal hover:bg-terracotta/10 hover:text-brandRed transition-colors"
              title="Call Store"
            >
              <Phone size={18} />
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Decor%20Guru!%20I%20visited%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20home%20decor%20collections.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <MessageCircle size={17} className="fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="bg-ink hover:bg-brandRed text-warmIvory px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-ink hover:bg-terracotta/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-warmIvory animate-fade-in">
          <div className="flex items-center justify-between p-4 border-b border-terracotta/15">
            <img
              src={STORE_INFO.logoUrl}
              alt="iDecor GURU Logo"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-ink hover:bg-terracotta/10"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl text-softCharcoal hover:text-brandRed transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-terracotta/15 space-y-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Decor%20Guru!%20I%20am%20interested%20in%20your%20home%20decor%20collection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium"
              >
                <MessageCircle size={20} className="fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 border border-softCharcoal/30 text-ink py-3 rounded-xl font-medium"
              >
                <Phone size={18} />
                <span>Call Store</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full bg-brandRed text-white py-3 rounded-xl font-medium"
              >
                Book Doorstep Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
