import React, { useState } from 'react';
import { Supplier, Category } from '../types';
import { PlusCircle, Building2, Globe, Mail, Phone, MapPin, Tag, FileText, CheckCircle2 } from 'lucide-react';

interface JoinViewProps {
  categories: Category[];
  onAddSupplier: (supplier: Supplier) => void;
}

export const JoinView: React.FC<JoinViewProps> = ({ categories, onAddSupplier }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[0]?.name || 'Stamp Making Materials');
  const [tagsInput, setTagsInput] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [minOrder, setMinOrder] = useState('$150 Minimum');
  const [leadTime, setLeadTime] = useState('2 - 3 Days');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newSupplier: Supplier = {
      id: `sup-${Date.now()}`,
      name,
      verified: true, // Mark verified for demo submissions
      categories: [category],
      tags: tags.length > 0 ? tags : [category.split(' ')[0]],
      description,
      location: location || 'Chicago, IL, USA',
      phone: phone || '+1 (800) 555-0199',
      email,
      website: website || 'https://example-supplier.com',
      minOrder,
      leadTime,
      rating: 5.0,
      reviewCount: 1,
      products: [
        {
          id: `p-${Date.now()}`,
          name: `${name} Standard Wholesale Supply Package`,
          category,
          priceRange: 'Contact for Wholesale Price Tier',
        },
      ],
    };

    onAddSupplier(newSupplier);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto w-full px-4 py-12 text-center my-8">
        <div className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-8 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#76f3ea]/20 text-[#006a65] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#1a1c1e] mb-2">Business Listing Submitted!</h2>
          <p className="text-sm text-[#43474f] mb-6 leading-relaxed">
            Your company profile <strong className="text-[#1a1c1e]">{name}</strong> has been successfully added to the Print & Stamp Directory. Shop owners can now discover your products and request direct quotes.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#006a65] text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#006a65]/90 transition-colors cursor-pointer"
          >
            Submit Another Listing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full px-4 md:px-8 py-6 md:py-10 min-h-screen">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <PlusCircle className="w-6 h-6 text-[#006a65]" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1c1e] tracking-tight">
            Join the Print & Stamp Directory
          </h1>
        </div>
        <p className="text-xs md:text-sm text-[#737780]">
          Are you a wholesale manufacturer, paper distributor, or equipment importer? List your business to reach print & stamp shop procurement buyers nationwide.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-[#c3c6d1]/80 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
        <h2 className="text-base font-bold text-[#1a1c1e] uppercase tracking-wider border-b border-[#eeeef0] pb-2">
          Company Profile Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Company / Business Name *
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <Building2 className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Apex Rubber Stamp Materials Inc."
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Primary Supply Category *
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Product Keywords / Tags (Comma separated)
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <Tag className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g. Gelatin, Rubber, Ink Pads"
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              City, State / Country *
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <MapPin className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Chicago, IL, USA"
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Work Contact Email *
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <Mail className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sales@apexrubber.com"
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Phone Number
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <Phone className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (800) 555-0199"
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Website URL
            </label>
            <div className="flex items-center bg-[#f3f3f6] rounded-xl px-3 h-11 border border-[#c3c6d1]">
              <Globe className="w-4 h-4 text-[#737780] mr-2 shrink-0" />
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://apexrubber.com"
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Minimum Order Quantity (MOQ)
            </label>
            <input
              type="text"
              value={minOrder}
              onChange={(e) => setMinOrder(e.target.value)}
              placeholder="e.g. $150 Minimum"
              className="w-full bg-[#f3f3f6] border border-[#c3c6d1] rounded-xl px-3.5 h-11 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
              Standard Dispatch Lead Time
            </label>
            <input
              type="text"
              value={leadTime}
              onChange={(e) => setLeadTime(e.target.value)}
              placeholder="e.g. 1 - 3 Business Days"
              className="w-full bg-[#f3f3f6] border border-[#c3c6d1] rounded-xl px-3.5 h-11 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1a1c1e] mb-1">
            Company & Product Overview *
          </label>
          <div className="bg-[#f3f3f6] border border-[#c3c6d1] rounded-xl p-3">
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your manufacturing process, raw material quality, wholesale pricing terms, and target trade clients..."
              className="w-full bg-transparent text-sm focus:outline-none resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#006a65] hover:bg-[#006a65]/90 active:scale-[0.98] text-white font-semibold text-sm rounded-xl h-12 shadow-md transition-all cursor-pointer"
        >
          Publish Business Listing to Directory
        </button>
      </form>
    </div>
  );
};
