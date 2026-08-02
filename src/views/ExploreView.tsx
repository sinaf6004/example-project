import React, { useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { CategoryCard } from "../components/CategoryCard";
import { SupplierCard } from "../components/SupplierCard";
import { Category, Supplier, TabType } from "../types";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Award,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

interface ExploreViewProps {
  categories: Category[];
  suppliers: Supplier[];
  savedSupplierIds: Set<string>;
  onToggleSave: (supplierId: string) => void;
  onViewProfile: (supplier: Supplier) => void;
  onRequestQuote: (supplier: Supplier) => void;
  setActiveTab: (tab: TabType) => void;
  onSelectCategoryFilter: (categoryName: string) => void;
  onSearchSubmit: (query: string, category: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  categories,
  suppliers,
  savedSupplierIds,
  onToggleSave,
  onViewProfile,
  onRequestQuote,
  setActiveTab,
  onSelectCategoryFilter,
  onSearchSubmit,
}) => {
  const [displayLimit, setDisplayLimit] = useState(4);

  const featuredSuppliers = suppliers.slice(0, displayLimit);

  const handleCategoryClick = (categoryName: string) => {
    onSelectCategoryFilter(categoryName);
    setActiveTab("suppliers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full bg-[#f9f9fc] min-h-screen">
      {/* Hero Section */}
      <HeroSection
        onSearchSubmit={(query, category) => {
          onSearchSubmit(query, category);
          setActiveTab("suppliers");
        }}
        categories={categories}
      />

      {/* Top Categories Section */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8 md:py-12">
        <div className="flex  items-center justify-between mb-6">
          <button
            onClick={() => {
              onSelectCategoryFilter("");
              setActiveTab("suppliers");
            }}
            className="text-[#006a65] hover:text-[#00504c] text-xs md:text-sm font-semibold flex items-center gap-1 cursor-pointer transition-colors"
          >
            مشاهده همه
          </button>
          <div className="text-right">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a1c1e] tracking-tight">
              دسته‌بندی‌های برتر
            </h2>
            <p className="text-xs md:text-sm text-[#737780] font-normal">
              مرور مواد اولیه ضروری و ملزومات چاپ عمده
            </p>
          </div>
        </div>

        <div className="[direction:rtl] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </section>

      {/* Featured Suppliers Section */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => {
              setActiveTab("suppliers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#006a65] hover:text-[#00504c] text-xs md:text-sm font-semibold flex items-center gap-1 cursor-pointer transition-colors"
          >
            مشاهده دایرکتوری
          </button>

          <div className="text-right">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#006a65] uppercase tracking-wider mb-1">
              تولیدکنندگان و توزیع‌کنندگان مستقیم
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1a1c1e] tracking-tight">
              تامین‌کنندگان ویژه
            </h2>
          </div>
        </div>

        <div className="[direction:rtl] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredSuppliers.map((sup) => (
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

        {/* Load More Suppliers Button */}
        {displayLimit < suppliers.length ? (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setDisplayLimit((prev) => prev + 3)}
              className="bg-[#f3f3f6] hover:bg-[#e8e8ea] border border-[#c3c6d1] text-[#1a1c1e] font-semibold text-sm rounded-xl px-8 py-3 shadow-sm transition-all cursor-pointer"
            >
              بارگذاری تامین‌کنندگان بیشتر
            </button>
          </div>
        ) : (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setActiveTab("suppliers");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#001e40] text-white hover:bg-[#003366] font-semibold text-sm rounded-xl px-6 py-3 transition-colors shadow-sm cursor-pointer"
            >
              مرور دایرکتوری کامل تامین‌کنندگان
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* Value Proposition B2B Trust Banner */}
      <section className="bg-[#001e40] text-white py-12 px-4 md:px-8 my-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#006a65] flex items-center justify-center text-[#79f6ed] mb-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-white">
              تامین‌کنندگان B2B تایید شده
            </h3>
            <p className="text-xs md:text-sm text-[#799dd6] leading-relaxed">
              هر تولیدکننده و توزیع‌کننده از نظر اعتبار تجاری، کیفیت محصول و
              قابلیت اطمینان تامین بررسی شده است.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#006a65] flex items-center justify-center text-[#79f6ed] mb-1">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-white">
              استعلام قیمت عمده مستقیم
            </h3>
            <p className="text-xs md:text-sm text-[#799dd6] leading-relaxed">
              حذف واسطه‌ها. استعلام قیمت مستقیم از کارخانه و زمان‌بندی سفارشات
              عمده مستقیماً از طریق پورتال ما.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="w-12 h-12 rounded-2xl bg-[#006a65] flex items-center justify-center text-[#79f6ed] mb-1">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-white">
              تمرکز تخصصی روی چاپ و مهر
            </h3>
            <p className="text-xs md:text-sm text-[#799dd6] leading-relaxed">
              به‌طور خاص برای حکاکان مهر لاستیکی، چاپخانه‌های تجاری و مدیران
              تامین تابلو‌سازی ساخته شده است.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
