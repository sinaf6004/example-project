import React from 'react';
import { TabType } from '../types';
import { Compass, Factory, PlusCircle, Bookmark } from 'lucide-react';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  savedCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, savedCount }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#f9f9fc]/90 backdrop-blur-xl border-t border-[#c3c6d1]/50 pb-safe shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <div className="flex justify-around items-center h-16 px-4 max-w-md mx-auto">
        {/* Explore */}
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors ${
            activeTab === 'explore' ? 'text-[#006a65] font-bold' : 'text-[#43474f] font-normal hover:text-[#1a1c1e]'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[11px] leading-none">Explore</span>
        </button>

        {/* Suppliers */}
        <button
          onClick={() => setActiveTab('suppliers')}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors ${
            activeTab === 'suppliers' ? 'text-[#006a65] font-bold' : 'text-[#43474f] font-normal hover:text-[#1a1c1e]'
          }`}
        >
          <Factory className="w-5 h-5" />
          <span className="text-[11px] leading-none">Suppliers</span>
        </button>

        {/* Join / Register */}
        <button
          onClick={() => setActiveTab('register')}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors ${
            activeTab === 'register' ? 'text-[#006a65] font-bold' : 'text-[#43474f] font-normal hover:text-[#1a1c1e]'
          }`}
        >
          <PlusCircle className="w-5 h-5 text-[#006a65]" />
          <span className="text-[11px] leading-none text-[#006a65] font-medium">Join</span>
        </button>

        {/* Saved */}
        <button
          onClick={() => setActiveTab('saved')}
          className={`flex flex-col items-center justify-center gap-1 w-16 h-12 transition-colors relative ${
            activeTab === 'saved' ? 'text-[#006a65] font-bold' : 'text-[#43474f] font-normal hover:text-[#1a1c1e]'
          }`}
        >
          <div className="relative">
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#006a65] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[16px] text-center">
                {savedCount}
              </span>
            )}
          </div>
          <span className="text-[11px] leading-none">Saved</span>
        </button>
      </div>
    </nav>
  );
};
