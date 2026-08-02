import React, { useState } from 'react';
import { TabType } from '../types';
import { Menu, User, Bookmark, Search, PlusCircle, Factory, Compass, X } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, savedCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-40 bg-[#001e40]/95 backdrop-blur-md shadow-sm transition-all border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => {
            setActiveTab('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3ywsK_7weZ9zSMOIBp4SXnFNXIPoeFkE7JQUgF4yKOw8HWwq4uGuLwqjGmZGK4xsDKyxYcqJpU1Eke_kWBDO_bSc3NLqMe0clV90bYps5GCXpJHSpnHJMNMt6hOB6IXzBWHqph9hrIOpSm0hb0FSofC8wbeqzqBrhJfb2RQyMeTBPvSMD1RPZGWkeKRaifiVJLU0RcONqPxzeTuw5E7aVqaswGmXFLVYovL-ajgQ0Hi0uzUBmmW7"
              alt="Print & Stamp Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-base leading-tight tracking-tight">
              Print & Stamp
            </span>
            <span className="text-[10px] text-[#799dd6] font-medium tracking-wide uppercase">
              B2B Directory
            </span>
          </div>
        </button>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'explore'
                ? 'bg-[#006a65] text-white shadow-sm'
                : 'text-gray-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Compass className="w-4 h-4" />
            Explore
          </button>
          <button
            onClick={() => setActiveTab('suppliers')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'suppliers'
                ? 'bg-[#006a65] text-white shadow-sm'
                : 'text-gray-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Factory className="w-4 h-4" />
            Suppliers Directory
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 relative ${
              activeTab === 'saved'
                ? 'bg-[#006a65] text-white shadow-sm'
                : 'text-gray-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            Saved
            {savedCount > 0 && (
              <span className="ml-1 bg-[#76f3ea] text-[#00201e] text-xs font-bold px-1.5 py-0.5 rounded-full">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'register'
                ? 'bg-[#006a65] text-white shadow-sm'
                : 'text-[#79f6ed] hover:text-white hover:bg-white/10'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            Join Directory
          </button>
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* User Profile avatar */}
          <div className="w-9 h-9 rounded-full bg-[#006a65] text-white flex items-center justify-center border border-white/20 shadow-sm cursor-pointer hover:bg-[#006a65]/80 transition-colors">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001e40] border-b border-white/10 px-4 py-4 space-y-2 text-white animate-in slide-in-from-top duration-200">
          <button
            onClick={() => {
              setActiveTab('explore');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 ${
              activeTab === 'explore' ? 'bg-[#006a65] text-white' : 'hover:bg-white/5'
            }`}
          >
            <Compass className="w-5 h-5 text-[#79f6ed]" />
            Explore
          </button>
          <button
            onClick={() => {
              setActiveTab('suppliers');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 ${
              activeTab === 'suppliers' ? 'bg-[#006a65] text-white' : 'hover:bg-white/5'
            }`}
          >
            <Factory className="w-5 h-5 text-[#79f6ed]" />
            Suppliers Directory
          </button>
          <button
            onClick={() => {
              setActiveTab('saved');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
              activeTab === 'saved' ? 'bg-[#006a65] text-white' : 'hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5 text-[#79f6ed]" />
              Saved Suppliers
            </div>
            {savedCount > 0 && (
              <span className="bg-[#76f3ea] text-[#00201e] text-xs font-bold px-2 py-0.5 rounded-full">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab('register');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 ${
              activeTab === 'register' ? 'bg-[#006a65] text-white' : 'hover:bg-white/5'
            }`}
          >
            <PlusCircle className="w-5 h-5 text-[#79f6ed]" />
            Join Directory (List Business)
          </button>
        </div>
      )}
    </header>
  );
};
