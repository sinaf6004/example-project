import React, { useState } from 'react';
import { Supplier } from '../types';
import { X, CheckCircle2, Bookmark, BookmarkCheck, MapPin, Phone, Mail, Globe, Star, Package, Send, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SupplierDetailModalProps {
  supplier: Supplier | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (supplierId: string) => void;
  onRequestQuote: (supplier: Supplier, productInterest?: string) => void;
}

export const SupplierDetailModal: React.FC<SupplierDetailModalProps> = ({
  supplier,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products'>('overview');

  if (!isOpen || !supplier) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#001e40]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c3c6d1]/60 my-auto max-h-[90vh] flex flex-col z-10"
        >
          {/* Top Banner Header */}
          <div className="bg-[#001e40] text-white p-5 md:p-6 relative border-b border-white/10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pr-8">
              {/* Logo */}
              <div className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-md shrink-0 border border-white/20">
                {supplier.logoUrl ? (
                  <img src={supplier.logoUrl} alt={supplier.name} className="w-full h-full object-contain" />
                ) : (
                  <Package className="w-10 h-10 text-[#001e40]" />
                )}
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                    {supplier.name}
                  </h2>
                  {supplier.verified && (
                    <span className="inline-flex items-center gap-1 bg-[#76f3ea]/20 text-[#79f6ed] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#76f3ea]/30">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-[#79f6ed] text-[#001e40]" />
                      Verified Wholesale
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#799dd6] mb-2">
                  <div className="flex items-center gap-1 text-white font-medium">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{supplier.rating}</span>
                    <span className="text-[#799dd6] font-normal">({supplier.reviewCount} trade reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#79f6ed]" />
                    <span>{supplier.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {supplier.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/10 text-white text-xs px-2.5 py-0.5 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="bg-[#f3f3f6] px-6 py-3 border-b border-[#c3c6d1]/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#1a1c1e]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#006a65]" />
              <div>
                <span className="text-[#737780] block text-[10px] uppercase font-semibold">Min Order</span>
                <span className="font-semibold">{supplier.minOrder}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#006a65]" />
              <div>
                <span className="text-[#737780] block text-[10px] uppercase font-semibold">Lead Time</span>
                <span className="font-semibold">{supplier.leadTime}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#006a65]" />
              <div>
                <span className="text-[#737780] block text-[10px] uppercase font-semibold">Direct Phone</span>
                <a href={`tel:${supplier.phone}`} className="font-semibold text-[#006a65] hover:underline">
                  {supplier.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#c3c6d1]/60 px-6 bg-white">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-[#006a65] text-[#006a65]'
                  : 'border-transparent text-[#737780] hover:text-[#1a1c1e]'
              }`}
            >
              Company Overview
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 cursor-pointer ${
                activeTab === 'products'
                  ? 'border-[#006a65] text-[#006a65]'
                  : 'border-transparent text-[#737780] hover:text-[#1a1c1e]'
              }`}
            >
              Products & Catalog
              <span className="bg-[#eeeef0] text-[#1a1c1e] text-xs font-bold px-2 py-0.5 rounded-full">
                {supplier.products.length}
              </span>
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {activeTab === 'overview' ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#1a1c1e] uppercase tracking-wider mb-2">
                    About {supplier.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#43474f] leading-relaxed">
                    {supplier.description}
                  </p>
                </div>

                {/* Contact Information Box */}
                <div className="bg-[#f9f9fc] border border-[#c3c6d1]/60 rounded-xl p-4 space-y-3">
                  <h4 className="text-xs font-bold text-[#1a1c1e] uppercase tracking-wider">
                    Verified Trade Contact Info
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#1a1c1e]">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#006a65]" />
                      <a href={`mailto:${supplier.email}`} className="text-[#006a65] font-medium hover:underline">
                        {supplier.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-[#006a65]" />
                      <a href={supplier.website} target="_blank" rel="noopener noreferrer" className="text-[#006a65] font-medium hover:underline">
                        {supplier.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Categories Handled */}
                <div>
                  <h4 className="text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-2">
                    Main Product Categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {supplier.categories.map((cat, idx) => (
                      <span key={idx} className="bg-[#eeeef0] text-[#1a1c1e] text-xs font-semibold px-3 py-1.5 rounded-lg">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Products List Tab */
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[#1a1c1e] uppercase tracking-wider mb-2">
                  Featured Wholesale Catalog Items
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {supplier.products.map((prod) => (
                    <div
                      key={prod.id}
                      className="border border-[#c3c6d1]/60 rounded-xl p-3.5 bg-[#f9f9fc] flex flex-col justify-between hover:border-[#006a65] transition-colors"
                    >
                      <div>
                        {prod.image && (
                          <div className="w-full h-32 rounded-lg bg-gray-100 overflow-hidden mb-3">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <h4 className="font-semibold text-sm text-[#1a1c1e] mb-1">{prod.name}</h4>
                        {prod.spec && (
                          <p className="text-xs text-[#737780] mb-2">{prod.spec}</p>
                        )}
                        {prod.priceRange && (
                          <p className="text-xs font-semibold text-[#006a65] bg-[#76f3ea]/20 inline-block px-2 py-1 rounded-md mb-3">
                            {prod.priceRange}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onRequestQuote(supplier, prod.name);
                        }}
                        className="w-full bg-[#001e40] hover:bg-[#003366] text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5 text-[#79f6ed]" />
                        Inquire This Item
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 md:p-6 bg-[#f3f3f6] border-t border-[#c3c6d1]/60 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <button
              onClick={() => onToggleSave(supplier.id)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-sm transition-all border flex items-center justify-center gap-2 cursor-pointer ${
                isSaved
                  ? 'bg-[#76f3ea]/20 text-[#00504c] border-[#006a65]/30'
                  : 'bg-white hover:bg-gray-50 text-[#1a1c1e] border-[#c3c6d1]'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-[#006a65]" /> : <Bookmark className="w-4 h-4 text-[#737780]" />}
              {isSaved ? 'Saved in List' : 'Save Supplier'}
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(supplier);
              }}
              className="w-full sm:w-1/2 bg-[#006a65] hover:bg-[#006a65]/90 active:scale-[0.98] text-white font-semibold text-sm rounded-xl py-2.5 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Request Official Quote
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
