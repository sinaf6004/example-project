import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onSelectCategory?: (categoryName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onSelectCategory }) => {
  return (
    <footer className="bg-[#e2e2e5] mt-16 p-6 pb-28 md:pb-12 border-t border-[#c3c6d1]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <img
            alt="Print & Stamp Logo"
            className="h-7 w-auto grayscale opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3ywsK_7weZ9zSMOIBp4SXnFNXIPoeFkE7JQUgF4yKOw8HWwq4uGuLwqjGmZGK4xsDKyxYcqJpU1Eke_kWBDO_bSc3NLqMe0clV90bYps5GCXpJHSpnHJMNMt6hOB6IXzBWHqph9hrIOpSm0hb0FSofC8wbeqzqBrhJfb2RQyMeTBPvSMD1RPZGWkeKRaifiVJLU0RcONqPxzeTuw5E7aVqaswGmXFLVYovL-ajgQ0Hi0uzUBmmW7"
          />
          <span className="font-semibold text-[#1a1c1e] text-lg">Print & Stamp Directory</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#43474f] uppercase tracking-wider">Navigation</p>
            <button
              onClick={() => {
                setActiveTab('explore');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors"
            >
              Explore Hub
            </button>
            <button
              onClick={() => {
                setActiveTab('suppliers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors"
            >
              Suppliers Directory
            </button>
            <button
              onClick={() => {
                setActiveTab('register');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors"
            >
              Join Directory
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#43474f] uppercase tracking-wider">Top Supplies</p>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('Stamp Making Materials');
                setActiveTab('suppliers');
              }}
              className="text-left text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors"
            >
              Stamp Making Materials
            </button>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('Flyers & Brochures');
                setActiveTab('suppliers');
              }}
              className="text-left text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors"
            >
              Flyers & Paper Stocks
            </button>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('Inks & Chemicals');
                setActiveTab('suppliers');
              }}
              className="text-left text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors"
            >
              Inks & Solvents
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#43474f] uppercase tracking-wider">Marketplace</p>
            <span className="text-sm text-[#43474f] py-1">Wholesale Direct</span>
            <span className="text-sm text-[#43474f] py-1">Verified Trade Badges</span>
            <span className="text-sm text-[#43474f] py-1">Request Quote Network</span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#43474f] uppercase tracking-wider">Contact & Support</p>
            <a href="mailto:support@printandstampdirectory.com" className="text-sm text-[#1a1c1e] hover:text-[#006a65] py-1 transition-colors">
              support@printandstampdirectory.com
            </a>
            <span className="text-sm text-[#43474f] py-1">Legal & Terms</span>
            <span className="text-sm text-[#43474f] py-1">Privacy Policy</span>
          </div>
        </div>

        <div className="pt-6 border-t border-[#c3c6d1] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#43474f]">
          <p>© 2026 Print & Stamp Directory. Precision in Printing & Stamp Manufacturing.</p>
          <p className="text-[11px] bg-white/60 px-3 py-1 rounded-full border border-[#c3c6d1]">
            Verified B2B Marketplace for Print Shops & Stamp Makers
          </p>
        </div>
      </div>
    </footer>
  );
};
