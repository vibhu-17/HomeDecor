import React, { useState } from 'react';
import { X, MessageCircle, Phone, Send, CheckCircle2, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/decorData';

export default function InquiryDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Custom Curtains & Drapes',
    notes: '',
  });

  if (!isOpen) return null;

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hi Decor Guru! Consultation Request:\n• Name: ${formData.name}\n• Contact: ${formData.phone}\n• Service Needed: ${formData.service}\n• Message: ${formData.notes || 'Interested in decor setup.'}`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-warmIvory rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-terracotta/30 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-warmIvory border border-terracotta/20 flex items-center justify-center text-ink hover:bg-terracotta/10 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="mb-6">
          <img
            src={STORE_INFO.logoUrl}
            alt="iDecor GURU Logo"
            className="h-10 w-auto object-contain mb-2"
          />
          <h3 className="font-serif text-2xl font-bold text-ink mt-1">
            Book Doorstep Consultation
          </h3>
          <p className="text-xs text-softCharcoal/80 mt-1">
            Get exact window measurements & fabric samples brought directly to your home in Jaipur.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSend} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-ink mb-1">Your Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Sonal Verma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink placeholder-softCharcoal/40 focus:outline-none focus:border-brandRed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">WhatsApp Number *</label>
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
            <label className="block text-xs font-semibold text-ink mb-1">Service Required</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink focus:outline-none focus:border-brandRed"
            >
              <option value="Custom Curtains & Drapes">Custom Curtains & Drapes</option>
              <option value="Carved Wooden Wall Panels">Carved Wooden Wall Panels</option>
              <option value="Ambient Brass Lighting">Ambient Brass Lighting</option>
              <option value="Handwoven Rugs & Carpets">Handwoven Rugs & Carpets</option>
              <option value="Full Home Interior Decor">Full Home Interior Decor</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink mb-1">Notes / Requirement Details</label>
            <textarea
              rows="3"
              placeholder="Mention window sizes, room colors, or specific items..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-terracotta/25 rounded-xl text-xs text-ink placeholder-softCharcoal/40 focus:outline-none focus:border-brandRed"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} className="fill-white" />
            <span>Send Enquiry via WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-softCharcoal/60">
            Or call our showroom directly at <a href={`tel:${STORE_INFO.phone}`} className="font-semibold text-ink underline">{STORE_INFO.phone}</a>
          </p>
        </form>
      </div>
    </div>
  );
}
