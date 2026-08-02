import React from 'react';
import { Category } from '../types';
import { PenTool, FileText, Droplet, Gift, Layers, Cpu, Package } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: (categoryName: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  // Map icon strings to Lucide components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-[#001b3c]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#001b3c]" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-[#001b3c]" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-[#001b3c]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#001b3c]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#001b3c]" />;
      default:
        return <Package className="w-6 h-6 text-[#001b3c]" />;
    }
  };

  return (
    <button
      onClick={() => onClick(category.name)}
      className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:border-[#006a65] hover:shadow-md active:scale-[0.98] transition-all cursor-pointer group text-left w-full"
    >
      <div className="w-12 h-12 rounded-full bg-[#d5e3ff] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
        {renderIcon(category.iconName)}
      </div>
      <span className="font-medium text-sm text-[#1a1c1e] leading-snug group-hover:text-[#006a65] transition-colors">
        {category.name}
      </span>
      <span className="text-[11px] text-[#737780] font-normal">
        {category.supplierCount} Suppliers
      </span>
    </button>
  );
};
