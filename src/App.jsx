import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FeaturedCategories from './components/FeaturedCategories';
import ProductCatalog from './components/ProductCatalog';
import InstagramGrid from './components/InstagramGrid';
import BrandStory from './components/BrandStory';
import Testimonials from './components/Testimonials';
import VisitStore from './components/VisitStore';
import InquiryDrawer from './components/InquiryDrawer';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from './data/decorData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warmIvory text-softCharcoal font-sans selection:bg-brandRed selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Trust & Location Strip */}
      <TrustStrip />

      {/* Featured Editorial Collections Grid */}
      <FeaturedCategories onSelectCategory={handleSelectCategory} />

      {/* Interactive Catalog & Quick Inquiry */}
      <ProductCatalog
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Instagram Feed Grid (@decorguru_jaipur) */}
      <InstagramGrid />

      {/* Brand Story & Philosophy */}
      <BrandStory />

      {/* Customer Reviews & Testimonials */}
      <Testimonials />

      {/* Store Location & Inquiry Form */}
      <VisitStore />

      {/* Footer */}
      <Footer />

      {/* Doorstep Consultation Inquiry Modal */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Decor%20Guru!%20I%20am%20browsing%20your%20website%20and%20need%20assistance.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-semibold whitespace-nowrap transition-all duration-300">
          Chat with Decor Guru
        </span>
      </a>
    </div>
  );
}
