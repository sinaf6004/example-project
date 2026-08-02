import React, { useState } from 'react';
import { TabType, Supplier, Category, QuoteRequest } from './types';
import { INITIAL_CATEGORIES } from './data/categories';
import { INITIAL_SUPPLIERS } from './data/suppliers';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { Toast, ToastMessage } from './components/Toast';
import { SupplierDetailModal } from './components/SupplierDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { ExploreView } from './views/ExploreView';
import { SuppliersView } from './views/SuppliersView';
import { SavedView } from './views/SavedView';
import { JoinView } from './views/JoinView';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('explore');
  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [suppliers, setSuppliers] = useState<Supplier[]>(INITIAL_SUPPLIERS);
  const [savedSupplierIds, setSavedSupplierIds] = useState<Set<string>>(
    new Set(['sup-1', 'sup-2'])
  );

  // Filter state passed from Hero to Suppliers View
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [selectedSupplierForDetail, setSelectedSupplierForDetail] = useState<Supplier | null>(null);
  const [selectedSupplierForQuote, setSelectedSupplierForQuote] = useState<Supplier | null>(null);
  const [initialProductForQuote, setInitialProductForQuote] = useState<string>('');

  // Toast state
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToast({ id, text, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Toggle Save supplier bookmark
  const handleToggleSave = (supplierId: string) => {
    setSavedSupplierIds((prev) => {
      const next = new Set(prev);
      const targetSupplier = suppliers.find((s) => s.id === supplierId);
      const name = targetSupplier ? targetSupplier.name : 'Supplier';

      if (next.has(supplierId)) {
        next.delete(supplierId);
        showToast(`Removed ${name} from saved suppliers list`, 'info');
      } else {
        next.add(supplierId);
        showToast(`Saved ${name} to your shortlist!`, 'success');
      }
      return next;
    });
  };

  // Handle Quote Request Submit
  const handleSubmitQuote = (quote: Omit<QuoteRequest, 'id' | 'createdAt'>) => {
    showToast(
      `Quote request sent to ${quote.supplierName}! They will contact ${quote.contactEmail} shortly.`,
      'success'
    );
  };

  // Handle Add New Supplier Listing
  const handleAddSupplier = (newSupplier: Supplier) => {
    setSuppliers((prev) => [newSupplier, ...prev]);
    setSavedSupplierIds((prev) => new Set([...prev, newSupplier.id]));
    showToast(`Added ${newSupplier.name} to directory!`, 'success');
  };

  // Search handler from Hero
  const handleHeroSearch = (query: string, category: string) => {
    setSearchQuery(query);
    setSearchCategory(category);
    setActiveTab('suppliers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fc] text-[#1a1c1e] font-sans">
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedSupplierIds.size}
      />

      {/* Main Views */}
      <main className="flex-1">
        {activeTab === 'explore' && (
          <ExploreView
            categories={categories}
            suppliers={suppliers}
            savedSupplierIds={savedSupplierIds}
            onToggleSave={handleToggleSave}
            onViewProfile={(sup) => setSelectedSupplierForDetail(sup)}
            onRequestQuote={(sup) => {
              setSelectedSupplierForQuote(sup);
              setInitialProductForQuote('');
            }}
            setActiveTab={setActiveTab}
            onSelectCategoryFilter={(cat) => {
              setSearchCategory(cat);
              setSearchQuery('');
            }}
            onSearchSubmit={handleHeroSearch}
          />
        )}

        {activeTab === 'suppliers' && (
          <SuppliersView
            suppliers={suppliers}
            categories={categories}
            savedSupplierIds={savedSupplierIds}
            onToggleSave={handleToggleSave}
            onViewProfile={(sup) => setSelectedSupplierForDetail(sup)}
            onRequestQuote={(sup) => {
              setSelectedSupplierForQuote(sup);
              setInitialProductForQuote('');
            }}
            initialCategory={searchCategory}
            initialSearchQuery={searchQuery}
          />
        )}

        {activeTab === 'saved' && (
          <SavedView
            suppliers={suppliers}
            savedSupplierIds={savedSupplierIds}
            onToggleSave={handleToggleSave}
            onViewProfile={(sup) => setSelectedSupplierForDetail(sup)}
            onRequestQuote={(sup) => {
              setSelectedSupplierForQuote(sup);
              setInitialProductForQuote('');
            }}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'register' && (
          <JoinView categories={categories} onAddSupplier={handleAddSupplier} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectCategory={(cat) => setSearchCategory(cat)}
      />

      {/* Bottom Nav bar for mobile */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedSupplierIds.size}
      />

      {/* Modals & Overlay Drawers */}
      <SupplierDetailModal
        supplier={selectedSupplierForDetail}
        isOpen={Boolean(selectedSupplierForDetail)}
        onClose={() => setSelectedSupplierForDetail(null)}
        isSaved={selectedSupplierForDetail ? savedSupplierIds.has(selectedSupplierForDetail.id) : false}
        onToggleSave={handleToggleSave}
        onRequestQuote={(sup, prodInterest) => {
          setSelectedSupplierForQuote(sup);
          setInitialProductForQuote(prodInterest || '');
        }}
      />

      <QuoteModal
        supplier={selectedSupplierForQuote}
        initialProduct={initialProductForQuote}
        isOpen={Boolean(selectedSupplierForQuote)}
        onClose={() => {
          setSelectedSupplierForQuote(null);
          setInitialProductForQuote('');
        }}
        onSubmitQuote={handleSubmitQuote}
      />

      {/* Toast Banner Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
