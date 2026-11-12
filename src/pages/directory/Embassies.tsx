import { useState } from 'react';
import { Link } from 'react-router';

interface Embassy {
  flag: string;
  name: string;
  city: string;
  type: 'Embassy' | 'High Commission' | 'Consulate General';
  address: string;
  phone: string;
  email: string;
}

const embassies: Embassy[] = [
  {
    flag: "🇺🇸",
    name: "Embassy of India, Washington D.C.",
    city: "Washington D.C.",
    type: "Embassy",
    address: "2107 Massachusetts Avenue NW, Washington D.C. 20008",
    phone: "+1-202-939-7000",
    email: "cons.washington@mea.gov.in",
  },
  {
    flag: "🇺🇸",
    name: "Consulate General of India, New York",
    city: "New York",
    type: "Consulate General",
    address: "3 East 64th Street, New York NY 10065",
    phone: "+1-212-774-0600",
    email: "cg.newyork@mea.gov.in",
  },
  {
    flag: "🇺🇸",
    name: "Consulate General of India, San Francisco",
    city: "San Francisco",
    type: "Consulate General",
    address: "540 Arguello Blvd, San Francisco CA 94118",
    phone: "+1-415-668-0662",
    email: "cg.sanfrancisco@mea.gov.in",
  },
  {
    flag: "🇺🇸",
    name: "Consulate General of India, Houston",
    city: "Houston",
    type: "Consulate General",
    address: "4300 Scotland Street, Houston TX 77007",
    phone: "+1-713-626-2148",
    email: "cg.houston@mea.gov.in",
  },
  {
    flag: "🇬🇧",
    name: "High Commission of India, London",
    city: "London",
    type: "High Commission",
    address: "India House, Aldwych, London WC2B 4NA",
    phone: "+44-20-7836-8484",
    email: "hoc.london@mea.gov.in",
  },
  {
    flag: "🇨🇦",
    name: "High Commission of India, Ottawa",
    city: "Ottawa",
    type: "High Commission",
    address: "10 Springfield Road, Ottawa, Ontario K1M 1C9",
    phone: "+1-613-744-3751",
    email: "hoc.ottawa@mea.gov.in",
  },
  {
    flag: "🇨🇦",
    name: "Consulate General of India, Toronto",
    city: "Toronto",
    type: "Consulate General",
    address: "365 Bloor Street East, Suite 1003, Toronto",
    phone: "+1-416-960-0751",
    email: "cg.toronto@mea.gov.in",
  },
  {
    flag: "🇦🇺",
    name: "High Commission of India, Canberra",
    city: "Canberra",
    type: "High Commission",
    address: "3-5 Moonah Place, Yarralumla, Canberra ACT 2600",
    phone: "+61-2-6273-3999",
    email: "hoc.canberra@mea.gov.in",
  },
  {
    flag: "🇩🇪",
    name: "Embassy of India, Berlin",
    city: "Berlin",
    type: "Embassy",
    address: "Tiergartenstraße 17, 10785 Berlin",
    phone: "+49-30-2579-590",
    email: "cons.berlin@mea.gov.in",
  },
  {
    flag: "🇫🇷",
    name: "Embassy of India, Paris",
    city: "Paris",
    type: "Embassy",
    address: "15, rue Alfred Dehodencq, Paris 75016",
    phone: "+33-1-4050-7070",
    email: "cons.paris@mea.gov.in",
  },
  {
    flag: "🇯🇵",
    name: "Embassy of India, Tokyo",
    city: "Tokyo",
    type: "Embassy",
    address: "2-2-11 Kudan Minami, Chiyoda-ku, Tokyo 102-0074",
    phone: "+81-3-3262-2391",
    email: "cons.tokyo@mea.gov.in",
  },
  {
    flag: "🇸🇬",
    name: "High Commission of India, Singapore",
    city: "Singapore",
    type: "High Commission",
    address: "31 Grange Road, Singapore 239702",
    phone: "+65-6737-6777",
    email: "hoc.singapore@mea.gov.in",
  },
  {
    flag: "🇦🇪",
    name: "Embassy of India, Abu Dhabi",
    city: "Abu Dhabi",
    type: "Embassy",
    address: "Plot 10, Sector W-59/02, Street 34, Abu Dhabi",
    phone: "+971-2-449-2700",
    email: "cons.abudhabi@mea.gov.in",
  },
  {
    flag: "🇿🇦",
    name: "High Commission of India, Pretoria",
    city: "Pretoria",
    type: "High Commission",
    address: "852 Schoeman Street, Arcadia, Pretoria 0083",
    phone: "+27-12-342-5392",
    email: "hoc.pretoria@mea.gov.in",
  },
  {
    flag: "🇳🇿",
    name: "High Commission of India, Wellington",
    city: "Wellington",
    type: "High Commission",
    address: "180 Molesworth Street, Wellington 6011",
    phone: "+64-4-473-6390",
    email: "hoc.wellington@mea.gov.in",
  },
  {
    flag: "🇲🇾",
    name: "High Commission of India, Kuala Lumpur",
    city: "Kuala Lumpur",
    type: "High Commission",
    address: "No. 2, Jalan Taman Duta, Kuala Lumpur 50480",
    phone: "+60-3-2093-3506",
    email: "hoc.kualalumpur@mea.gov.in",
  },
];

const typeBadgeColors: Record<string, string> = {
  Embassy: "bg-red-100 text-red-700",
  "High Commission": "bg-purple-100 text-purple-700",
  "Consulate General": "bg-blue-100 text-blue-700",
};

export default function EmbassiesPage() {
  const [search, setSearch] = useState('');

  const filtered = embassies.filter((e) => {
    const q = search.toLowerCase();
    return (
      e.name.toLowerCase().includes(q) ||
      e.city.toLowerCase().includes(q) ||
      e.address.toLowerCase().includes(q)
    );
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
            <span className="text-white">List of Indian Foreign Offices</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            List of Indian Foreign Offices
          </h1>
          <p className="text-blue-200 text-base max-w-xl">
            Indian embassies, high commissions, and consulates around the world.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by country or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-2xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filtered.length} of {embassies.length} offices
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-16">No offices found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((embassy) => (
              <div
                key={embassy.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                {/* Flag + type */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{embassy.flag}</span>
                  <span
                    className={`rounded-full text-xs font-semibold px-3 py-1 ${typeBadgeColors[embassy.type]}`}
                  >
                    {embassy.type}
                  </span>
                </div>

                <h3 className="font-bold text-sm leading-snug" style={{ color: "#0D2B45" }}>
                  {embassy.name}
                </h3>

                <div className="space-y-1 text-xs text-gray-500">
                  <p className="flex items-start gap-1">
                    <span className="mt-0.5">📍</span>
                    <span>{embassy.address}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <span>📞</span>
                    <span>{embassy.phone}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <span>✉️</span>
                    <a
                      href={`mailto:${embassy.email}`}
                      className="hover:underline"
                      style={{ color: "#2E8B57" }}
                    >
                      {embassy.email}
                    </a>
                  </p>
                </div>

                <button
                  className="mt-2 rounded-full text-xs font-semibold px-4 py-2 transition-colors self-start"
                  style={{ backgroundColor: "#F47C20", color: "#fff" }}
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
