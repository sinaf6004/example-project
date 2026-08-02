import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onSearchSubmit: (query: string, category: string) => void;
  categories: { id: string; name: string }[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearchSubmit, categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery, selectedCategory);
  };

  return (
    <section className="relative bg-[#001e40] pt-10 pb-16 px-4 md:px-8 overflow-hidden rounded-b-3xl shadow-md border-b border-white/10">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
          <pattern height="10" id="hero-grid" patternUnits="userSpaceOnUse" width="10">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
          </pattern>
          <rect fill="url(#hero-grid)" height="100%" width="100%" />
        </svg>
      </div>

      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#006a65]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#799dd6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Round Logo Badge */}
        <div className="w-20 h-20 bg-white rounded-full p-2.5 shadow-md mb-4 flex items-center justify-center ring-4 ring-white/10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3ywsK_7weZ9zSMOIBp4SXnFNXIPoeFkE7JQUgF4yKOw8HWwq4uGuLwqjGmZGK4xsDKyxYcqJpU1Eke_kWBDO_bSc3NLqMe0clV90bYps5GCXpJHSpnHJMNMt6hOB6IXzBWHqph9hrIOpSm0hb0FSofC8wbeqzqBrhJfb2RQyMeTBPvSMD1RPZGWkeKRaifiVJLU0RcONqPxzeTuw5E7aVqaswGmXFLVYovL-ajgQ0Hi0uzUBmmW7"
            alt="Print & Stamp Directory Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight leading-tight">
          Find the Best Suppliers for Your Print & Stamp Shop
        </h1>

        <p className="text-sm md:text-base text-[#799dd6] mb-6 max-w-md font-normal leading-relaxed">
          Connect directly with top wholesale manufacturers and distributors.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl p-2 shadow-xl flex flex-col md:flex-row gap-2 border border-gray-100">
          <div className="flex-1 flex items-center bg-[#f3f3f6] rounded-xl px-3.5 h-12 border border-[#c3c6d1]/60 focus-within:border-[#001e40] focus-within:bg-white transition-all">
            <Search className="w-5 h-5 text-[#737780] mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search suppliers or products..."
              className="bg-transparent w-full text-sm md:text-base text-[#1a1c1e] focus:outline-none placeholder:text-[#737780]"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-12 appearance-none bg-[#f3f3f6] border border-[#c3c6d1]/60 rounded-xl pl-3.5 pr-9 text-sm text-[#1a1c1e] focus:outline-none focus:border-[#001e40] focus:bg-white transition-all cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#737780] pointer-events-none" />
            </div>

            <button
              type="submit"
              className="bg-[#006a65] hover:bg-[#006a65]/90 active:scale-[0.98] text-white font-medium text-sm md:text-base rounded-xl px-6 h-12 shadow-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4 hidden md:inline" />
              <span>Search</span>
            </button>
          </div>
        </form>

        {/* Quick Search Tags */}
        <div className="flex items-center gap-2 mt-4 text-xs text-[#799dd6] flex-wrap justify-center">
          <span className="font-medium text-white/80">Popular:</span>
          {['Gelatin', 'Inks', 'Paper Stock', 'Laser Rubber', 'Solvents'].map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => {
                setSearchQuery(term);
                onSearchSubmit(term, selectedCategory);
              }}
              className="bg-white/10 hover:bg-white/20 text-white/90 px-2.5 py-1 rounded-full text-xs transition-colors border border-white/10"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
