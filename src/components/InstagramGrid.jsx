import React from 'react';
import { INSTAGRAM_POSTS, STORE_INFO } from '../data/decorData';
import { Heart, MessageCircle, ExternalLink, Play } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function InstagramGrid() {
  return (
    <section id="instagram" className="py-20 bg-warmIvory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-terracotta/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
              <InstagramIcon size={14} className="text-brandRed" />
              Live Studio Feed
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              From Our Instagram
            </h2>
            <p className="text-xs sm:text-sm text-terracotta font-medium mt-1">
              {STORE_INFO.instagram} · Mansarovar Store Updates & Daily Decor Inspo
            </p>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink hover:bg-brandRed text-warmIvory px-6 py-3 rounded-full text-xs font-semibold transition-all mt-4 md:mt-0 shadow-sm"
          >
            <InstagramIcon size={16} />
            <span>Follow {STORE_INFO.instagram}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden border border-terracotta/20 bg-warmIvory shadow-sm hover:shadow-warm transition-all duration-300 block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Type Badge (Reel/Post) */}
              <div className="absolute top-2 right-2 bg-ink/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-white flex items-center gap-1">
                {post.type === 'Reel' && <Play size={10} className="fill-white" />}
                <span>{post.type}</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-end gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart size={13} className="fill-brandRed text-brandRed" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={13} />
                    {post.comments}
                  </span>
                </div>

                <p className="text-[11px] text-warmIvory/90 line-clamp-3 leading-snug font-sans">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
