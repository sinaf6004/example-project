import React, { useState, useEffect } from 'react';
import { Supplier, QuoteRequest } from '../types';
import { X, Send, Building2, User, Mail, Phone, Package, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuoteModalProps {
  supplier: Supplier | null;
  initialProduct?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmitQuote: (quote: Omit<QuoteRequest, 'id' | 'createdAt'>) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  supplier,
  initialProduct = '',
  isOpen,
  onClose,
  onSubmitQuote,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productInterest, setProductInterest] = useState(initialProduct);
  const [quantity, setQuantity] = useState('500 units');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setProductInterest(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen || !supplier) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitQuote({
      supplierId: supplier.id,
      supplierName: supplier.name,
      companyName,
      contactName,
      contactEmail,
      phone,
      productInterest,
      quantity,
      message,
    });
    onClose();
  };

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
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c3c6d1]/60 my-auto z-10"
        >
          {/* Header */}
          <div className="bg-[#001e40] text-white p-5 flex items-center justify-between border-b border-white/10">
            <div>
              <span className="text-[10px] text-[#79f6ed] font-bold uppercase tracking-wider block">
                Wholesale Quote Request
              </span>
              <h2 className="text-lg font-bold text-white">
                Request Quote from {supplier.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                  Your Print Shop / Company Name *
                </label>
                <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-10 border border-[#c3c6d1]">
                  <Building2 className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Print & Stamp Co."
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                  Contact Person Name *
                </label>
                <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-10 border border-[#c3c6d1]">
                  <User className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. John Miller"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                  Work Email Address *
                </label>
                <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-10 border border-[#c3c6d1]">
                  <Mail className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="john@apexprint.com"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                  Phone Number
                </label>
                <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-10 border border-[#c3c6d1]">
                  <Phone className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                  Product / Supply Interest *
                </label>
                <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-10 border border-[#c3c6d1]">
                  <Package className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
                  <input
                    type="text"
                    required
                    value={productInterest}
                    onChange={(e) => setProductInterest(e.target.value)}
                    placeholder="e.g. Gelatin sheets or 100lb Cardstock"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                  Estimated Quantity / Volume
                </label>
                <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-10 border border-[#c3c6d1]">
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 5,000 sheets or 10 pails"
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
                Additional Specifications & Delivery Notes
              </label>
              <div className="bg-[#f3f3f6] rounded-xl p-3 border border-[#c3c6d1]">
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please provide pricing breakdown, lead time for custom delivery, and sample availability..."
                  className="w-full bg-transparent text-sm focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#006a65] hover:bg-[#006a65]/90 active:scale-[0.98] text-white font-semibold text-sm rounded-xl h-11 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Send Quote Request Directly to {supplier.name}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
