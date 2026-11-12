import { useState } from 'react';
import { Link } from 'react-router';

interface FacultyMember {
  name: string;
  title: string;
  university: string;
  department: string;
  research: string;
}

const faculty: FacultyMember[] = [
  {
    name: "Dr. Vijay Kumar",
    title: "Professor of Robotics",
    university: "University of Pennsylvania",
    department: "Mechanical Engineering",
    research: "Robotics, Swarm Drones, Aerial Systems",
  },
  {
    name: "Dr. Subra Suresh",
    title: "President Emeritus",
    university: "Carnegie Mellon University",
    department: "Materials Science",
    research: "Nanomechanics, Biomaterials, Global Health",
  },
  {
    name: "Dr. Priya Natarajan",
    title: "Professor",
    university: "Yale University",
    department: "Astronomy & Astrophysics",
    research: "Dark Matter, Black Holes, Cosmology",
  },
  {
    name: "Dr. Raj Chetty",
    title: "Professor",
    university: "Harvard University",
    department: "Economics",
    research: "Social Mobility, Income Inequality, Education Policy",
  },
  {
    name: "Dr. Mona Nair",
    title: "Professor",
    university: "MIT",
    department: "Computer Science",
    research: "Machine Learning, AI Ethics, NLP",
  },
  {
    name: "Dr. Anjali Singh",
    title: "Associate Professor",
    university: "Stanford University",
    department: "Bioengineering",
    research: "Cancer Research, Drug Delivery, Nanomedicine",
  },
  {
    name: "Dr. Sanjay Gupta",
    title: "Professor",
    university: "Emory University",
    department: "Neurosurgery",
    research: "Brain Tumors, Neuroscience, Public Health",
  },
  {
    name: "Dr. Indira Raman",
    title: "Professor",
    university: "Northwestern University",
    department: "Neuroscience",
    research: "Ion Channels, Motor Control, Cerebellum",
  },
  {
    name: "Dr. Anant Agarwal",
    title: "Professor",
    university: "MIT",
    department: "Electrical Engineering",
    research: "VLSI, Online Education, edX",
  },
  {
    name: "Dr. Kavita Bala",
    title: "Dean",
    university: "Cornell University",
    department: "Computing & Information Science",
    research: "Computer Graphics, AI, Visual Intelligence",
  },
  {
    name: "Dr. Ravi Shankar",
    title: "Professor",
    university: "University of Michigan",
    department: "Mechanical Engineering",
    research: "MEMS, Nanotechnology, Smart Materials",
  },
  {
    name: "Dr. Uma Karmarkar",
    title: "Associate Professor",
    university: "UC San Diego",
    department: "Management",
    research: "Neuroeconomics, Consumer Behavior, Marketing",
  },
  {
    name: "Dr. Padma Venkatraman",
    title: "Professor",
    university: "University of Houston",
    department: "Chemistry",
    research: "Medicinal Chemistry, Drug Discovery, Enzymology",
  },
  {
    name: "Dr. Anil Jain",
    title: "Distinguished Professor",
    university: "Michigan State University",
    department: "Computer Science",
    research: "Biometrics, Pattern Recognition, AI",
  },
  {
    name: "Dr. Nalini Venkatasubramanian",
    title: "Professor",
    university: "UC Irvine",
    department: "Computer Science",
    research: "Distributed Systems, IoT, Smart Cities",
  },
];

function getInitials(name: string): string {
  return name
    .replace('Dr. ', '')
    .replace('Ms. ', '')
    .replace('Mr. ', '')
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

export default function FacultyPage() {
  const [search, setSearch] = useState('');

  const filtered = faculty.filter((f) => {
    const q = search.toLowerCase();
    return (
      f.name.toLowerCase().includes(q) ||
      f.university.toLowerCase().includes(q) ||
      f.department.toLowerCase().includes(q)
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
            <span className="text-white">Indian Faculty in the United States</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Indian Faculty in the United States
          </h1>
          <p className="text-blue-200 text-base max-w-2xl">
            Distinguished Indian-origin faculty members at leading US universities — mentors,
            collaborators, and community leaders.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name or university..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-2xl border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Showing {filtered.length} of {faculty.length} faculty members
        </p>

        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-16">No faculty found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ backgroundColor: "#F47C20" }}
                  >
                    {getInitials(member.name)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight" style={{ color: "#0D2B45" }}>
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{member.title}</p>
                  </div>
                </div>

                {/* University */}
                <p className="text-sm font-semibold" style={{ color: "#2E8B57" }}>
                  {member.university}
                </p>

                {/* Department */}
                <p className="text-xs text-gray-500">{member.department}</p>

                {/* Research */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Research Areas
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.research}</p>
                </div>

                <button
                  className="mt-auto rounded-full text-xs font-semibold px-4 py-2 self-start transition-colors"
                  style={{ backgroundColor: "#0D2B45", color: "#fff" }}
                >
                  Connect
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
