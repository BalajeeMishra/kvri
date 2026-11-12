import { useState } from 'react'
import { Link } from 'react-router'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import { ORG, PROJECTS, CAMP_PHOTOS, type Project } from '../site'

function ProjectBlock({ p, index, children }: { p: Project; index: number; children?: React.ReactNode }) {
  const { ref, inView } = useInView(0.15)
  const flip = index % 2 === 1
  return (
    <section id={p.slug} ref={ref} className="py-20 lg:py-28" style={{ backgroundColor: flip ? '#FFF9F3' : 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className={`rounded-2xl overflow-hidden ${flip ? 'lg:order-2' : ''}`} style={{ height: 420, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
          </div>
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.15s' }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'rgba(244,124,32,0.1)' }}>{p.icon}</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: '#F47C20', fontWeight: 700 }}>Project {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h2 className="mb-3" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0D2B45' }}>{p.title}</h2>
            <p className="text-lg mb-6" style={{ color: '#2E8B57', fontWeight: 600 }}>{p.subtitle}</p>
            {p.body.map(t => (
              <p key={t} className="text-gray-600 text-base leading-relaxed mb-4">{t}</p>
            ))}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}

function CampGallery() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className="mt-14">
      <p className="text-sm mb-5 text-gray-500" style={{ fontWeight: 600 }}>
        {ORG.name} providing free check-ups and medicines in rural villages.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {CAMP_PHOTOS.map(src => (
          <button key={src} onClick={() => setActive(src)} className="rounded-xl overflow-hidden group" style={{ height: 160 }} aria-label="Enlarge photo">
            <img src={src} alt="Free medical camp in a rural village" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" style={{ background: 'rgba(0,0,0,0.85)' }} onClick={() => setActive(null)}>
          <img src={active} alt="Free medical camp in a rural village" className="max-w-full max-h-full rounded-xl" />
          <button className="absolute top-6 right-6 text-white text-3xl" aria-label="Close">×</button>
        </div>
      )}
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero image="/images/agriculture.jpeg" alt="A thriving farm in rural India" crumb="Projects" eyebrow="Our Work" title="Projects">
        Five focus areas — healthcare, education, sanitation, farmer empowerment, and sustainable agriculture — working together to build self-reliant rural communities.
      </PageHero>

      <section className="py-4 sticky top-[72px] z-40" style={{ background: 'white', borderBottom: '1px solid rgba(13,43,69,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex gap-3 overflow-x-auto">
          {PROJECTS.map(p => (
            <Link key={p.slug} to={`/programs#${p.slug}`} className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors hover:bg-orange-50" style={{ border: '1px solid rgba(13,43,69,0.12)', color: '#0D2B45', fontWeight: 600 }}>
              {p.icon} {p.title}
            </Link>
          ))}
        </div>
      </section>

      {PROJECTS.map((p, i) => (
        <ProjectBlock key={p.slug} p={p} index={i}>
          {p.slug === 'healthcare' && <CampGallery />}
        </ProjectBlock>
      ))}

      <section className="py-24" style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06010 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>{ORG.closing}</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Help us take these projects to more villages across rural India.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105" style={{ background: '#0D2B45', color: 'white', fontWeight: 700 }}>Donate Now</Link>
            <Link to="/volunteer" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700 }}>Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  )
}
