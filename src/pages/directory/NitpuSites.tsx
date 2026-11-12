import { Link } from 'react-router';

interface Centre {
  name: string;
  location: string;
  focus: string;
  director: string;
}

const centres: Centre[] = [
  {
    name: "NITPU Innovation Hub",
    location: "Silicon Valley, CA",
    focus: "Technology Entrepreneurship",
    director: "Dr. Arun Mehta",
  },
  {
    name: "NITPU Research Centre",
    location: "Boston, MA",
    focus: "Life Sciences & Biotech",
    director: "Dr. Priya Sharma",
  },
  {
    name: "NITPU Cultural Exchange Hub",
    location: "New York, NY",
    focus: "Arts, Culture & Diaspora",
    director: "Ms. Ananya Krishnan",
  },
  {
    name: "NITPU Healthcare Initiative",
    location: "Houston, TX",
    focus: "Rural Health Technology",
    director: "Dr. Sunil Patel",
  },
  {
    name: "NITPU Education Centre",
    location: "Chicago, IL",
    focus: "STEM Education & Scholarships",
    director: "Dr. Ritu Gupta",
  },
  {
    name: "NITPU Sustainability Centre",
    location: "Seattle, WA",
    focus: "Clean Energy & Environment",
    director: "Dr. Vikram Rao",
  },
  {
    name: "NITPU Finance Hub",
    location: "New Jersey, NJ",
    focus: "Financial Services & FinTech",
    director: "Mr. Ashok Joshi",
  },
  {
    name: "NITPU Agricultural Research",
    location: "Fresno, CA",
    focus: "Agri-Technology for India",
    director: "Dr. Sunita Reddy",
  },
  {
    name: "NITPU Digital Literacy Centre",
    location: "Atlanta, GA",
    focus: "Digital Skills & Workforce Dev",
    director: "Ms. Deepa Nair",
  },
  {
    name: "NITPU Community Development Centre",
    location: "Florida",
    focus: "Social Enterprise & NGO Support",
    director: "Dr. Raj Kumar",
  },
];

const focusIcons: Record<string, string> = {
  "Technology Entrepreneurship": "💡",
  "Life Sciences & Biotech": "🧬",
  "Arts, Culture & Diaspora": "🎨",
  "Rural Health Technology": "🏥",
  "STEM Education & Scholarships": "🎓",
  "Clean Energy & Environment": "🌱",
  "Financial Services & FinTech": "💳",
  "Agri-Technology for India": "🌾",
  "Digital Skills & Workforce Dev": "💻",
  "Social Enterprise & NGO Support": "🤝",
};

export default function NitpuSitesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF9F3" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#0D2B45" }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/directory" className="hover:text-white transition-colors">
              Directory
            </Link>
            <span>/</span>
            <span className="text-white">NITPU Centre Sites</span>
          </nav>
          <span
            className="inline-block rounded-full text-xs font-semibold px-4 py-1 mb-4"
            style={{ backgroundColor: "#2E8B57", color: "#fff" }}
          >
            Network
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            NITPU Centre Sites
          </h1>
          <p className="text-blue-200 text-base max-w-2xl">
            Network of India-Technology-Professional-United (NITPU) centres supporting academic and
            professional exchange.
          </p>
        </div>
      </div>

      {/* Centres */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-500 mb-8">{centres.length} active centres across the United States</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {centres.map((centre, index) => (
            <div
              key={centre.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              {/* Icon + number */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">{focusIcons[centre.focus] ?? "🏢"}</span>
                <span
                  className="text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center"
                  style={{ backgroundColor: "#FFF9F3", color: "#F47C20", border: "1px solid #F47C20" }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-bold text-base leading-tight" style={{ color: "#0D2B45" }}>
                {centre.name}
              </h3>

              {/* Location */}
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <span>📍</span>
                <span>{centre.location}</span>
              </p>

              {/* Focus */}
              <div>
                <span
                  className="inline-block rounded-full text-xs font-semibold px-3 py-1"
                  style={{ backgroundColor: "#FFF9F3", color: "#F47C20", border: "1px solid #F47C20" }}
                >
                  {centre.focus}
                </span>
              </div>

              {/* Director */}
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: "#0D2B45" }}
                >
                  {centre.director.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <p className="text-xs text-gray-400">Director</p>
                  <p className="text-xs font-semibold" style={{ color: "#0D2B45" }}>
                    {centre.director}
                  </p>
                </div>
              </div>

              <button
                className="mt-auto rounded-full text-xs font-semibold px-4 py-2 self-start transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#2E8B57", color: "#fff" }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
