import { useState } from 'react'
import { Link } from 'react-router'
import { useInView } from '../../hooks/useInView'

function PageHero() {
  return (
    <section className="relative h-[420px] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&h=700&fit=crop&auto=format"
        alt="Past Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.92) 0%, rgba(13,43,69,0.4) 60%, transparent 100%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/projects/inf-projects" className="hover:text-white">Projects</Link>
          <span>/</span>
          <span className="text-white">Past Projects</span>
        </div>
        <h1 className="text-5xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Past Projects</h1>
        <p className="text-white/80 text-lg max-w-xl">A record of completed initiatives and the communities they transformed.</p>
      </div>
    </section>
  )
}

type Category = 'All' | 'Education' | 'Healthcare' | 'Community' | 'Disaster Relief'

const CATEGORIES: Category[] = ['All', 'Education', 'Healthcare', 'Community', 'Disaster Relief']

const PAST_PROJECTS = [
  {
    title: 'Digital Literacy Drive — Bihar 2023',
    category: 'Education' as Category,
    location: 'Bihar, India',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop&auto=format',
    impact: '10,000 students trained',
    desc: 'Equipping students in rural Bihar with foundational digital skills through community learning centers and volunteer instructors.',
    slug: 'digital-literacy',
  },
  {
    title: 'Mobile Eye Camps — Tamil Nadu 2022',
    category: 'Healthcare' as Category,
    location: 'Tamil Nadu',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format',
    impact: '850 surgeries performed',
    desc: 'Bringing free cataract surgeries and eye care to underserved rural communities across Tamil Nadu through mobile medical units.',
    slug: 'mobile-eye-camps',
  },
  {
    title: 'Kerala Flood Relief 2021',
    category: 'Disaster Relief' as Category,
    location: 'Kerala',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop&auto=format',
    impact: '12,000 families helped',
    desc: 'Emergency relief including food, water, shelter, and medical aid for families displaced by severe flooding in Kerala.',
    slug: 'kerala-flood-relief',
  },
  {
    title: 'Women SHG Program — Gujarat 2022',
    category: 'Community' as Category,
    location: 'Gujarat',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922559?w=600&h=400&fit=crop&auto=format',
    impact: '900 women empowered',
    desc: 'Building self-help groups to foster financial independence, entrepreneurship, and community leadership among rural women in Gujarat.',
    slug: 'women-shg',
  },
  {
    title: 'Rural School Renovation — Rajasthan 2020',
    category: 'Education' as Category,
    location: 'Rajasthan',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop&auto=format',
    impact: '15 schools renovated',
    desc: 'Comprehensive renovation of government primary schools — new classrooms, sanitation facilities, libraries, and solar power.',
    slug: 'rural-school-renovation',
  },
  {
    title: 'COVID Relief — Pan India 2020',
    category: 'Disaster Relief' as Category,
    location: 'Pan India',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&auto=format',
    impact: '50,000 kits distributed',
    desc: 'Distributing hygiene kits, masks, and food supplies to migrant workers and low-income communities across India during the pandemic.',
    slug: 'covid-relief',
  },
]

const CATEGORY_COLORS: Record<Category, { bg: string; text: string }> = {
  All: { bg: 'rgba(13,43,69,0.08)', text: '#0D2B45' },
  Education: { bg: 'rgba(244,124,32,0.1)', text: '#F47C20' },
  Healthcare: { bg: 'rgba(46,139,87,0.1)', text: '#2E8B57' },
  Community: { bg: 'rgba(13,43,69,0.1)', text: '#0D2B45' },
  'Disaster Relief': { bg: 'rgba(200,50,50,0.08)', text: '#c83232' },
}

function FilterBar({ active, onChange }: { active: Category; onChange: (c: Category) => void }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="rounded-full px-5 py-2 text-sm font-700 transition-colors"
          style={{
            background: active === cat ? '#0D2B45' : 'rgba(13,43,69,0.07)',
            color: active === cat ? 'white' : '#0D2B45',
            fontFamily: 'Manrope, sans-serif',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ proj }: { proj: typeof PAST_PROJECTS[0] }) {
  const colors = CATEGORY_COLORS[proj.category]
  return (
    <Link to={"/projects/past/" + proj.slug} className="group block rounded-2xl overflow-hidden shadow-md flex flex-col hover:-translate-y-1 transition-transform duration-300" style={{ border: '1px solid rgba(13,43,69,0.08)', background: 'white' }}>
      <div className="h-48 overflow-hidden relative">
        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 rounded-full text-xs font-700 px-3 py-1" style={{ background: 'rgba(13,43,69,0.75)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>{proj.year}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="rounded-full text-xs font-700 px-3 py-1" style={{ background: colors.bg, color: colors.text, fontFamily: 'Manrope, sans-serif' }}>{proj.category}</span>
          <span className="text-xs text-gray-400 flex items-center gap-1" style={{ fontFamily: 'Manrope, sans-serif' }}>📍 {proj.location}</span>
        </div>
        <h3 className="font-800 text-lg mb-2" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{proj.title}</h3>
        <p className="text-sm text-gray-600 flex-1 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{proj.desc}</p>
        <div className="rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2" style={{ background: 'rgba(46,139,87,0.08)' }}>
          <span className="text-sm font-700" style={{ color: '#2E8B57', fontFamily: 'Manrope, sans-serif' }}>Impact:</span>
          <span className="text-sm font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{proj.impact}</span>
        </div>
        <div
          className="w-full py-2.5 rounded-full text-sm font-700 text-center"
          style={{ border: '2px solid #0D2B45', color: '#0D2B45', fontFamily: 'Manrope, sans-serif', background: 'transparent' }}
        >
          View Details
        </div>
      </div>
    </Link>
  )
}

function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const { ref, inView } = useInView()

  const filtered = activeFilter === 'All' ? PAST_PROJECTS : PAST_PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-800 mb-2" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Completed Projects</h2>
            <p className="text-gray-500" style={{ fontFamily: 'Manrope, sans-serif' }}>Filter by category to explore our work</p>
          </div>
          <FilterBar active={activeFilter} onChange={setActiveFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(proj => (
              <ProjectCard key={proj.title} proj={proj} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400" style={{ fontFamily: 'Manrope, sans-serif' }}>No projects found in this category.</div>
          )}
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="py-20" style={{ background: '#F47C20' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Be Part of the Next Chapter</h2>
        <p className="text-white/80 mb-8 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>Join INF to support active projects or propose your own.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects/inf-projects" className="rounded-full px-8 py-3.5 font-700 text-base" style={{ background: '#0D2B45', color: 'white', fontFamily: 'Manrope, sans-serif' }}>View Active Projects</Link>
          <Link to="/contact" className="rounded-full px-8 py-3.5 font-700 text-base" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Get Involved</Link>
        </div>
      </div>
    </section>
  )
}

export default function PastProjectsPage() {
  return (
    <div>
      <PageHero />
      <ProjectsGrid />
      <Cta />
    </div>
  )
}
