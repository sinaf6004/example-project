import React from 'react';
import { Supplier, TabType } from '../types';
import { SupplierCard } from '../components/SupplierCard';
import { Bookmark, ArrowRight, Building2, Send } from 'lucide-react';

interface SavedViewProps {
  suppliers: Supplier[];
  savedSupplierIds: Set<string>;
  onToggleSave: (supplierId: string) => void;
  onViewProfile: (supplier: Supplier) => void;
  onRequestQuote: (supplier: Supplier) => void;
  setActiveTab: (tab: TabType) => void;
}

export const SavedView: React.FC<SavedViewProps> = ({
  suppliers,
  savedSupplierIds,
  onToggleSave,
  onViewProfile,
  onRequestQuote,
  setActiveTab,
}) => {
  const savedSuppliers = suppliers.filter((sup) => savedSupplierIds.has(sup.id));

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-6 md:py-10 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Bookmark className="w-5 h-5 text-[#006a65]" />
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1c1e] tracking-tight">
              Saved Suppliers
            </h1>
          </div>
          <p className="text-xs md:text-sm text-[#737780]">
            Your shortlisted wholesale manufacturers and distributors for quick procurement.
          </p>
        </div>

        {savedSuppliers.length > 0 && (
          <div className="bg-[#eeeef0] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#1a1c1e]">
            {savedSuppliers.length} Shortlisted Supplier{savedSuppliers.length > 1 ? 's' : ''}
          </div>
        )}
      </div>

      {/* List */}
      {savedSuppliers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {savedSuppliers.map((sup) => (
            <SupplierCard
              key={sup.id}
              supplier={sup}
              isSaved={true}
              onToggleSave={onToggleSave}
              onViewProfile={onViewProfile}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-12 text-center max-w-md mx-auto my-12">
          <div className="w-16 h-16 rounded-full bg-[#76f3ea]/20 flex items-center justify-center mx-auto mb-4 text-[#006a65]">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[#1a1c1e] mb-1">No Saved Suppliers Yet</h3>
          <p className="text-xs text-[#737780] mb-6 leading-relaxed">
            Shortlist your favorite raw material manufacturers, paper vendors, and stamp suppliers so you can quickly compare and request quotes later.
          </p>
          <button
            onClick={() => setActiveTab('suppliers')}
            className="bg-[#006a65] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-sm hover:bg-[#006a65]/90 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            Browse Suppliers Directory
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
