import React from "react";
import { Supplier } from "../types";
import {
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  MapPin,
  Star,
  Building2,
} from "lucide-react";

interface SupplierCardProps {
  supplier: Supplier;
  isSaved: boolean;
  onToggleSave: (supplierId: string) => void;
  onViewProfile: (supplier: Supplier) => void;
  onRequestQuote: (supplier: Supplier) => void;
}

export const SupplierCard: React.FC<SupplierCardProps> = ({
  supplier,
  isSaved,
  onToggleSave,
  onViewProfile,
  onRequestQuote,
}) => {
  return (
    <div className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
      <div>
        {/* Logo and Main Details */}
        <div className="flex gap-4 items-start mb-3">
          {/* Logo Container */}
          <div className="w-16 h-16 rounded-xl bg-[#eeeef0] border border-[#c3c6d1]/60 flex-shrink-0 overflow-hidden relative flex items-center justify-center p-1">
            {supplier.logoUrl ? (
              <img
                src={supplier.logoUrl}
                alt={`${supplier.name} Logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image fails
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <Building2 className="w-8 h-8 text-[#737780]" />
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
              <h3
                onClick={() => onViewProfile(supplier)}
                className="font-semibold text-base md:text-lg text-[#1a1c1e] truncate hover:text-[#006a65] transition-colors cursor-pointer"
              >
                {supplier.name}
              </h3>
              {supplier.verified && (
                <span
                  className="inline-flex items-center text-[#006a65]"
                  title="Verified Wholesale Supplier"
                >
                  <CheckCircle2 className="w-4 h-4 fill-[#006a65] text-white" />
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {supplier.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-[#79f6ed]/20 text-[#00504c] text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Rating & Location */}
            <div className="flex items-center gap-3 text-xs text-[#737780] flex-wrap">
              <div className="flex items-center gap-1 font-medium text-[#1a1c1e]">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{supplier.rating}</span>
                <span className="text-[#737780] font-normal">
                  ({supplier.reviewCount})
                </span>
              </div>
              <div className="flex items-center gap-1 truncate max-w-[180px]">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{supplier.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs md:text-sm text-[#43474f] line-clamp-2 leading-relaxed mb-1">
          {supplier.description}
        </p>

        {/* Min Order & Lead Time Badge */}
        <div className="mt-3 pt-3 border-t border-[#eeeef0] flex items-center justify-between text-xs text-[#43474f]">
          <span className="font-medium text-[#001e40] bg-[#f3f3f6] px-2.5 py-1 rounded-lg whitespace-pre">
            <span className="whitespace-pre">{`حداقل خرید: `}</span>
            <strong className="text-[#1a1c1e]">{supplier.minOrder}</strong>
          </span>
          <div className="flex text-xs text-[#737780]">
            <div> زمان تحویل: </div>
            <span className="font-medium text-[#1a1c1e] whitespace-pre">
              {` ${supplier.leadTime}`}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2.5 pt-2 border-t border-[#eeeef0]">
        <button
          onClick={() => onToggleSave(supplier.id)}
          className={`flex-1 h-10 rounded-xl font-medium text-xs md:text-sm transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
            isSaved
              ? "bg-[#76f3ea]/20 text-[#00504c] border-[#006a65]/30 hover:bg-[#76f3ea]/30"
              : "bg-[#f3f3f6] hover:bg-[#e8e8ea] text-[#1a1c1e] border-[#c3c6d1]/60"
          }`}
        >
          {isSaved ? (
            <>
              <BookmarkCheck className="w-4 h-4 text-[#006a65]" />
              Saved
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4 text-[#737780]" />
              Save
            </>
          )}
        </button>

        <button
          onClick={() => onViewProfile(supplier)}
          className="flex-[2] bg-[#006a65] hover:bg-[#006a65]/90 active:scale-[0.98] text-white font-medium text-xs md:text-sm rounded-xl h-10 transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};
