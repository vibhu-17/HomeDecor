import React, { useState } from 'react';
import { STORE_INFO } from '../data/decorData';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function VisitStore() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: '',
    requirement: 'Wall Décor & Art',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const sendFormToWhatsApp = () => {
    const text = `Hi Decor Guru! Direct Inquiry from Website:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Area/Locality: ${formData.locality || 'Jaipur'}\n• Looking for: ${formData.requirement}`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="visit" className="py-20 bg-warmIvory-dark/40 border-t border-terracotta/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
            <MapPin size={14} className="text-brandRed" />
            Mansarovar Showroom
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Visit Our Store or Send an Enquiry
          </h2>
          <p className="text-softCharcoal/80 text-sm sm:text-base mt-2">
            Experience our fabric swatches, lighting ambiance, and wall art panels in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Contact Details & Interactive Map Mockup */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-terracotta/20 shadow-warm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address Box */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-terracotta uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin size={14} className="text-brandRed" /> Showroom Address
                </div>
                <div className="font-serif font-bold text-ink text-base">
                  {STORE_INFO.name} ({STORE_INFO.brandMark})
                </div>
                <p className="text-xs text-softCharcoal leading-relaxed">
                  {STORE_INFO.address}
                </p>
              </div>

              {/* Hours Box */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-terracotta uppercase tracking-wider flex items-center gap-1.5">
                  <Clock size={14} className="text-brandRed" /> Operating Hours
                </div>
                <div className="font-serif font-bold text-ink text-base">
                  Open 7 Days a Week
                </div>
                <p className="text-xs text-softCharcoal leading-relaxed">
                  {STORE_INFO.hours}
                </p>
              </div>
            </div>

            {/* Interactive Embedded Google Map Simulation */}
            <div className="relative rounded-2xl overflow-hidden border border-terracotta/20 aspect-[16/9] bg-warmIvory shadow-inner">
              <iframe
                title="Decor Guru Mansarovar Jaipur Store Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.887201948842!2d75.753300!3d26.843500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzM2LjYiTiA3NcKwNDUnMTEuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              {/* Floating Map Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-warmIvory/95 backdrop-blur-md p-3 rounded-xl border border-terracotta/20 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brandRed animate-pulse"></span>
                  <span className="text-xs font-bold text-ink">Patarkar Colony Road, Mansarovar</span>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-brandRed hover:underline"
                >
                  <span>Open in Maps</span>
                  <Navigation size={12} />
                </a>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center justify-center gap-2 border border-ink text-ink hover:bg-ink hover:text-white py-3 rounded-xl text-xs font-semibold transition-all shadow-sm"
              >
                <Phone size={16} />
                <span>Call {STORE_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Decor%20Guru!%20I%20want%20to%20visit%20your%20Mansarovar%20store.%20Please%20send%20directions.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl text-xs font-semibold transition-all shadow-sm"
              >
                <MessageCircle size={16} className="fill-white" />
                <span>Get Directions on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div className="lg:col-span-5 bg-warmIvory rounded-3xl p-6 sm:p-8 border border-terracotta/30 shadow-warm">
            <div className="mb-6">
              <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
                Personalized Consultation
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink">
                Send Quick Inquiry
              </h3>
              <p className="text-xs text-softCharcoal/80 mt-1">
                Tell us what you're looking for and our team will get back to you within 30 minutes.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-2xl p-6 text-center border border-[#25D366]/30 animate-fade-in space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] mx-auto flex items-center justify-center">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="font-serif text-lg font-bold text-ink">Thank you, {formData.name}!</h4>
                <p className="text-xs text-softCharcoal leading-relaxed">
                  Your enquiry for <strong>{formData.requirement}</strong> has been received. You can also send it directly via WhatsApp for an immediate response.
                </p>
                <button
                  onClick={sendFormToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold"
                >
                  <MessageCircle size={16} className="fill-white" />
                  <span>Send directly via WhatsApp</span>
                </button>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-terracotta hover:underline block mx-auto pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink placeholder-softCharcoal/40 focus:outline-none focus:border-brandRed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98290 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink placeholder-softCharcoal/40 focus:outline-none focus:border-brandRed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Locality in Jaipur</label>
                  <input
                    type="text"
                    placeholder="e.g. Mansarovar, Vaishali Nagar"
                    value={formData.locality}
                    onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink placeholder-softCharcoal/40 focus:outline-none focus:border-brandRed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">What are you looking for?</label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink focus:outline-none focus:border-brandRed"
                  >
                    <option value="Wall Décor & Art">Wall Décor & Art</option>
                    <option value="Curtains & Custom Drapes">Curtains & Custom Drapes</option>
                    <option value="Lighting & Chandeliers">Lighting & Chandeliers</option>
                    <option value="Rugs & Soft Furnishings">Rugs & Soft Furnishings</option>
                    <option value="Showpieces & Vases">Showpieces & Vases</option>
                    <option value="Full Home Consultation">Full Home Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brandRed hover:bg-brandRed-dark text-white py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
