import React, { useState, useMemo } from 'react';
import { Supplier, Category } from '../types';
import { SupplierCard } from '../components/SupplierCard';
import { Search, Filter, CheckCircle2, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface SuppliersViewProps {
  suppliers: Supplier[];
  categories: Category[];
  savedSupplierIds: Set<string>;
  onToggleSave: (supplierId: string) => void;
  onViewProfile: (supplier: Supplier) => void;
  onRequestQuote: (supplier: Supplier) => void;
  initialCategory?: string;
  initialSearchQuery?: string;
}

export const SuppliersView: React.FC<SuppliersViewProps> = ({
  suppliers,
  categories,
  savedSupplierIds,
  onToggleSave,
  onViewProfile,
  onRequestQuote,
  initialCategory = '',
  initialSearchQuery = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'rating' | 'name' | 'reviews'>('rating');

  // Filter suppliers based on state
  const filteredSuppliers = useMemo(() => {
    return suppliers
      .filter((sup) => {
        // Search query check
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const nameMatch = sup.name.toLowerCase().includes(q);
          const descMatch = sup.description.toLowerCase().includes(q);
          const tagMatch = sup.tags.some((t) => t.toLowerCase().includes(q));
          const prodMatch = sup.products.some((p) => p.name.toLowerCase().includes(q));
          if (!nameMatch && !descMatch && !tagMatch && !prodMatch) return false;
        }

        // Category check
        if (selectedCategory) {
          const categoryMatch = sup.categories.includes(selectedCategory);
          const tagMatch = sup.tags.some(
            (t) => t.toLowerCase() === selectedCategory.toLowerCase()
          );
          if (!categoryMatch && !tagMatch) return false;
        }

        // Verified check
        if (verifiedOnly && !sup.verified) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [suppliers, searchQuery, selectedCategory, verifiedOnly, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setVerifiedOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-6 md:py-10 min-h-screen">
      {/* Page Heading */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1c1e] tracking-tight">
          Suppliers Directory
        </h1>
        <p className="text-xs md:text-sm text-[#737780] mt-1">
          Browse verified manufacturers, distributors, and supply partners for print & stamp production.
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-4 md:p-5 shadow-sm mb-6 space-y-4">
        {/* Top Search Row */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Keyword Input */}
          <div className="flex-1 flex items-center bg-[#f3f3f6] rounded-xl px-3.5 h-11 border border-[#c3c6d1]/60 focus-within:border-[#006a65] focus-within:bg-white transition-all">
            <Search className="w-5 h-5 text-[#737780] mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword, product name, or material..."
              className="w-full bg-transparent text-sm text-[#1a1c1e] focus:outline-none placeholder:text-[#737780]"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 text-[#737780] hover:text-[#1a1c1e]">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-11 bg-[#f3f3f6] border border-[#c3c6d1]/60 rounded-xl px-3.5 text-sm text-[#1a1c1e] focus:outline-none focus:border-[#006a65] cursor-pointer"
            >
              <option value="">All Supply Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="w-full md:w-52 flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-[#737780] hidden md:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full h-11 bg-[#f3f3f6] border border-[#c3c6d1]/60 rounded-xl px-3 text-sm text-[#1a1c1e] focus:outline-none focus:border-[#006a65] cursor-pointer"
            >
              <option value="rating">Sort: Highest Rating</option>
              <option value="reviews">Sort: Most Reviews</option>
              <option value="name">Sort: Company Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#eeeef0]">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Verified Only Toggle */}
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                verifiedOnly
                  ? 'bg-[#76f3ea]/30 text-[#00504c] border-[#006a65]'
                  : 'bg-[#f3f3f6] text-[#43474f] border-[#c3c6d1]/60 hover:bg-[#e8e8ea]'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${verifiedOnly ? 'fill-[#006a65] text-white' : ''}`} />
              Verified Wholesalers Only
            </button>

            {/* Selected Category Tag */}
            {selectedCategory && (
              <span className="bg-[#006a65] text-white text-xs font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('')} className="hover:text-[#79f6ed]">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {(searchQuery || selectedCategory || verifiedOnly) && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#006a65] hover:underline font-semibold ml-1 cursor-pointer"
              >
                Clear all filters
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-[#737780]">
            Showing <span className="text-[#1a1c1e]">{filteredSuppliers.length}</span> suppliers
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      {filteredSuppliers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredSuppliers.map((sup) => (
            <SupplierCard
              key={sup.id}
              supplier={sup}
              isSaved={savedSupplierIds.has(sup.id)}
              onToggleSave={onToggleSave}
              onViewProfile={onViewProfile}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-12 text-center max-w-md mx-auto my-8">
          <div className="w-16 h-16 rounded-full bg-[#f3f3f6] flex items-center justify-center mx-auto mb-4 text-[#737780]">
            <SlidersHorizontal className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[#1a1c1e] mb-1">No Suppliers Found</h3>
          <p className="text-xs text-[#737780] mb-6">
            We couldn't find any supplier matching your search criteria. Try broadening your keywords or removing filters.
          </p>
          <button
            onClick={resetFilters}
            className="bg-[#006a65] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-sm hover:bg-[#006a65]/90 transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
