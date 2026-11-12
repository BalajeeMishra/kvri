import { useState } from 'react';
import { Link } from 'react-router';

type Category = 'All' | 'Bank' | 'NBFC' | 'Insurance';

interface Institution {
  name: string;
  type: 'Bank' | 'NBFC' | 'Insurance';
  description: string;
}

const institutions: Institution[] = [
  {
    name: "State Bank of India (SBI)",
    type: "Bank",
    description: "India's largest public sector bank with extensive NRI services including NRE/NRO accounts, home loans for NRIs, and global money transfers.",
  },
  {
    name: "Bank of Baroda",
    type: "Bank",
    description: "One of India's largest banks offering comprehensive NRI banking, investment, and insurance products through its global network.",
  },
  {
    name: "HDFC Bank",
    type: "Bank",
    description: "Leading private sector bank offering NRI banking solutions including fixed deposits, remittances, and portfolio investment accounts.",
  },
  {
    name: "ICICI Bank",
    type: "Bank",
    description: "India's largest private bank with dedicated NRI services, iMobile app, and competitive exchange rates for international transfers.",
  },
  {
    name: "Punjab National Bank",
    type: "Bank",
    description: "Public sector bank with dedicated NRI branches offering savings, deposits, and loan products for the Indian diaspora.",
  },
  {
    name: "Axis Bank",
    type: "Bank",
    description: "Private sector bank with specialized NRI products including priority banking, wealth management, and forex services.",
  },
  {
    name: "Canara Bank",
    type: "Bank",
    description: "Government-owned bank providing NRI deposit schemes, home loans, and remittance services with branches worldwide.",
  },
  {
    name: "Union Bank of India",
    type: "Bank",
    description: "Nationalized bank offering NRI accounts, loans, and investment schemes tailored for the Indian diaspora.",
  },
  {
    name: "LIC (Life Insurance Corporation of India)",
    type: "Insurance",
    description: "India's largest life insurer offering NRI-specific policies for term, endowment, and retirement planning.",
  },
  {
    name: "HDFC Life Insurance",
    type: "Insurance",
    description: "Leading private life insurer with online NRI policy purchase and international claims settlement.",
  },
  {
    name: "NABARD",
    type: "NBFC",
    description: "National Bank for Agriculture and Rural Development — supports rural finance initiatives aligned with INDNET's mission.",
  },
  {
    name: "SIDBI",
    type: "NBFC",
    description: "Small Industries Development Bank of India — funds SMEs and supports entrepreneurship aligned with diaspora investment.",
  },
];

const typeBadgeColors: Record<string, string> = {
  Bank: "bg-blue-100 text-blue-700",
  Insurance: "bg-green-100 text-green-700",
  NBFC: "bg-orange-100 text-orange-700",
};

const categories: Category[] = ['All', 'Bank', 'NBFC', 'Insurance'];

export default function FinancialInstitutionsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = institutions.filter((inst) => {
    const matchesSearch = inst.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || inst.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF9F3" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#0D2B45" }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/directory" className="hover:text-white transition-colors">
              Directory
            </Link>
            <span>/</span>
            <span className="text-white">Indian Financial Institutions</span>
          </nav>
          <span
            className="inline-block rounded-full text-xs font-semibold px-4 py-1 mb-4"
            style={{ backgroundColor: "#F47C20", color: "#fff" }}
          >
            Directory
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Indian Financial Institutions
          </h1>
          <p className="text-blue-200 text-base max-w-xl">
            A curated list of Indian financial institutions serving the diaspora community.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search institutions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#F47C20", color: "#fff" }
                    : { backgroundColor: "#fff", color: "#0D2B45", border: "1px solid #e5e7eb" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-16">No institutions found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((inst) => (
              <div
                key={inst.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-base leading-tight" style={{ color: "#0D2B45" }}>
                    {inst.name}
                  </h3>
                  <span
                    className={`rounded-full text-xs font-semibold px-3 py-1 whitespace-nowrap ${typeBadgeColors[inst.type]}`}
                  >
                    {inst.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {inst.description}
                </p>
                <button
                  className="mt-auto rounded-full text-sm font-semibold px-4 py-2 transition-colors self-start"
                  style={{ backgroundColor: "#0D2B45", color: "#fff" }}
                >
                  Visit Website
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
