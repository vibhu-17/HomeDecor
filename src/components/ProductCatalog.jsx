import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, STORE_INFO } from '../data/decorData';
import { MessageCircle, Eye, Search, Filter, Check, X, Shield, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function ProductCatalog({ selectedCategory, onSelectCategory }) {
  const [activeRoom, setActiveRoom] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const rooms = ['All', 'Living Room', 'Bedroom', 'Dining', 'Balcony'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory =
        !selectedCategory || selectedCategory === 'all' || item.category === selectedCategory;
      const matchRoom = activeRoom === 'All' || item.room === activeRoom;
      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchRoom && matchSearch;
    });
  }, [selectedCategory, activeRoom, searchQuery]);

  const getWhatsAppLink = (product) => {
    const text = `Hi Decor Guru! I am interested in "${product.name}" (${product.price}) from your website. Please share availability, customization options, and store location details.`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalog" className="py-20 bg-warmIvory-dark/30 border-t border-terracotta/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
            Showroom Catalogue
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Explore Hand-crafted Pieces
          </h2>
          <p className="text-softCharcoal/80 text-sm sm:text-base mt-2 font-sans">
            Click "Enquire on WhatsApp" on any piece to instantly check stock, request custom colorways, or reserve for in-store pickup.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-warmIvory border border-terracotta/20 rounded-2xl p-4 sm:p-6 mb-10 shadow-sm space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                !selectedCategory || selectedCategory === 'all'
                  ? 'bg-ink text-warmIvory shadow-sm'
                  : 'bg-warmIvory text-softCharcoal hover:bg-terracotta/10 border border-terracotta/20'
              }`}
            >
              All Collection ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-ink text-warmIvory shadow-sm'
                    : 'bg-warmIvory text-softCharcoal hover:bg-terracotta/10 border border-terracotta/20'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          {/* Room Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-terracotta/15">
            {/* Room Filters */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-medium text-terracotta flex items-center gap-1 shrink-0 mr-1">
                <SlidersHorizontal size={14} /> Filter Room:
              </span>
              {rooms.map((room) => (
                <button
                  key={room}
                  onClick={() => setActiveRoom(room)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    activeRoom === room
                      ? 'bg-terracotta text-white font-semibold'
                      : 'text-softCharcoal/80 hover:bg-terracotta/10'
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-softCharcoal/40" />
              <input
                type="text"
                placeholder="Search wall art, lamps, drapes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-warmIvory border border-terracotta/20 rounded-xl text-xs text-softCharcoal placeholder-softCharcoal/40 focus:outline-none focus:border-brandRed"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-softCharcoal/40 hover:text-ink"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-warmIvory border border-terracotta/20 rounded-2xl p-12 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-logoMint mx-auto flex items-center justify-center text-terracotta mb-4">
              <Search size={24} />
            </div>
            <h3 className="font-serif text-lg font-bold text-ink">No decor items found</h3>
            <p className="text-xs text-softCharcoal/70 mt-1 mb-4">
              Try adjusting your filter or search query to explore other pieces.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setActiveRoom('All');
                setSearchQuery('');
              }}
              className="bg-ink text-white px-4 py-2 rounded-full text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-terracotta/15 hover:border-terracotta/40 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-warmIvory">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-warmIvory/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-terracotta border border-terracotta/20">
                      {product.tag}
                    </div>

                    {/* Overlay Quick View Button */}
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]"
                    >
                      <Eye size={16} />
                      <span>Quick View Details</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] text-terracotta font-medium mb-1">
                      <span>{product.room}</span>
                      <span className="text-softCharcoal/60">{product.material.split('&')[0]}</span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-ink group-hover:text-brandRed transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-softCharcoal/75 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-terracotta/10 flex items-center justify-between">
                      <div className="font-serif font-bold text-ink text-base">
                        {product.price}
                      </div>
                      <span className="text-[10px] text-[#25D366] font-semibold bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                        In Store & Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 pt-0">
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all"
                  >
                    <MessageCircle size={15} className="fill-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-warmIvory rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-terracotta/30 relative">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ink flex items-center justify-center transition-colors shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-square bg-white relative">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-brandRed text-white text-xs font-bold px-3 py-1 rounded-full">
                  {quickViewProduct.tag}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
                    {quickViewProduct.room} Collection
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ink leading-tight mb-2">
                    {quickViewProduct.name}
                  </h3>
                  <div className="font-serif text-xl font-bold text-brandRed mb-4">
                    {quickViewProduct.price}
                  </div>

                  <p className="text-xs text-softCharcoal leading-relaxed mb-6">
                    {quickViewProduct.description}
                  </p>

                  <div className="space-y-2 text-xs border-t border-b border-terracotta/15 py-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-softCharcoal/70">Dimensions:</span>
                      <span className="font-medium text-ink">{quickViewProduct.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-softCharcoal/70">Material:</span>
                      <span className="font-medium text-ink">{quickViewProduct.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-softCharcoal/70">Store Location:</span>
                      <span className="font-medium text-ink">Mansarovar, Jaipur</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={getWhatsAppLink(quickViewProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl text-sm font-semibold shadow-sm"
                  >
                    <MessageCircle size={18} className="fill-white" />
                    <span>Chat & Enquire on WhatsApp</span>
                  </a>

                  <p className="text-[11px] text-center text-softCharcoal/60">
                    Visit Patarkar Colony Road store for custom color ordering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
