import { Link } from 'react-router'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

function PageHero() {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ minHeight: 480 }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1708593343442-7595427ddf7b?w=1800&h=800&fit=crop&auto=format" alt="Community impact" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,43,69,0.92) 0%, rgba(13,43,69,0.55) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.85) 0%, transparent 55%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-36 w-full">
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Impact</span>
        </div>
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest mb-4" style={{ background: 'rgba(244,124,32,0.2)', color: '#F47C20', fontWeight: 700 }}>Transparency</span>
        <h1 className="text-white font-800 mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800 }}>Our Impact</h1>
        <p className="text-white/70 text-lg max-w-xl leading-relaxed">
          We believe in radical transparency. Here is every number, every milestone, and every story of change that your support has made possible.
        </p>
      </div>
    </section>
  )
}

// ── Overview Counters ─────────────────────────────────────────────────────────
function ImpactOverview() {
  const { ref, inView } = useInView(0.3)
  const years = useCountUp(38, 1800, inView)
  const people = useCountUp(500000, 2400, inView)
  const projects = useCountUp(100, 1600, inView)
  const volunteers = useCountUp(5000, 2000, inView)
  const countries = useCountUp(20, 1400, inView)

  const stats = [
    { value: years, suffix: '+', label: 'Years of Service', sub: 'since 1988' },
    { value: people, suffix: '+', label: 'People Supported', sub: 'direct beneficiaries', fmt: (n: number) => `${(n / 1000).toFixed(0)}K` },
    { value: projects, suffix: '+', label: 'Projects Completed', sub: 'across all programs' },
    { value: volunteers, suffix: '+', label: 'Active Volunteers', sub: 'worldwide' },
    { value: countries, suffix: '+', label: 'Countries Reached', sub: 'global network' },
  ]

  return (
    <section ref={ref} style={{ backgroundColor: '#0D2B45' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.15)', color: '#F47C20', fontWeight: 700 }}>By the Numbers</span>
          <h2 className="text-white font-800" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Impact at a Glance</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((s, i) => (
            <div key={s.label} className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.7s ease ${i * 0.1}s` }}>
              <div className="text-4xl lg:text-5xl font-800 mb-2 leading-none" style={{ color: '#F47C20', fontWeight: 800 }}>
                {s.fmt ? s.fmt(s.value) : s.value}{s.suffix}
              </div>
              <div className="text-white font-700 text-sm mb-1" style={{ fontWeight: 700 }}>{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Areas of Impact ───────────────────────────────────────────────────────────
const areas = [
  { icon: '📚', title: 'Education', stat: '15,000+', statLabel: 'students supported', color: '#F47C20', desc: 'Scholarships, digital classrooms, and teacher training across 20 Indian states.' },
  { icon: '🏥', title: 'Healthcare', stat: '43,000+', statLabel: 'patients treated', color: '#2E8B57', desc: 'Mobile clinics, telemedicine, and maternal health programs in remote areas.' },
  { icon: '⛑️', title: 'Emergency Relief', stat: '8,000+', statLabel: 'families aided', color: '#F47C20', desc: 'Rapid response to floods, earthquakes, and public health crises across India.' },
  { icon: '🏘️', title: 'Community Development', stat: '250+', statLabel: 'villages reached', color: '#2E8B57', desc: 'Clean water, infrastructure, and livelihood programs for rural communities.' },
  { icon: '👩', title: "Women's Empowerment", stat: '2,500+', statLabel: 'women in programs', color: '#F47C20', desc: 'Vocational training, microfinance, and cooperative market access for women entrepreneurs.' },
  { icon: '🎭', title: 'Cultural Initiatives', stat: '200+', statLabel: 'artforms preserved', color: '#2E8B57', desc: 'Documentation and celebration of India\'s endangered folk arts and heritage.' },
]

function AreasOfImpact() {
  const { ref, inView } = useInView(0.1)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.1)', color: '#F47C20', fontWeight: 700 }}>Focus Areas</span>
          <h2 className="font-800" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>Where We Create Change</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <div key={a.title} className="rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300" style={{ background: 'white', boxShadow: '0 2px 30px rgba(13,43,69,0.07)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.09}s` }}>
              <div className="text-4xl mb-5">{a.icon}</div>
              <div className="text-3xl font-800 mb-1" style={{ color: a.color, fontWeight: 800 }}>{a.stat}</div>
              <div className="text-xs font-600 uppercase tracking-wide mb-4" style={{ color: '#9ca3af', fontWeight: 600 }}>{a.statLabel}</div>
              <h3 className="font-700 text-lg mb-2" style={{ color: '#0D2B45', fontWeight: 700 }}>{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Timeline ──────────────────────────────────────────────────────────────────
const milestones = [
  { year: '1988', title: 'Foundation Established', desc: 'INDNET founded in Gainesville, FL. First community network launches with 200 members.' },
  { year: '1995', title: 'Network Expansion', desc: 'Chapters established in 10 US cities. Diaspora network reaches 10,000 members.' },
  { year: '2001', title: 'First India Projects', desc: 'Direct aid programs launched in Rajasthan and Bihar. 500 students receive scholarships.' },
  { year: '2005', title: 'Healthcare Programs', desc: 'First mobile medical camp. 3,000 patients treated across 5 Indian states.' },
  { year: '2012', title: 'Education Scale-Up', desc: 'Scholarship fund reaches $1M. 1,000 students funded per year.' },
  { year: '2018', title: 'Kerala Flood Relief', desc: '$3M mobilized in 72 hours. 5,000 families receive emergency aid.' },
  { year: '2020', title: 'COVID Response', desc: '$5M raised. PPE, oxygen concentrators, and food aid to 100+ hospitals.' },
  { year: '2025', title: 'Global Network', desc: '150,000 community members. 20+ countries. 100+ projects. Growing every year.' },
]

function Timeline() {
  const { ref, inView } = useInView(0.1)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest mb-5" style={{ background: 'rgba(13,43,69,0.06)', color: '#0D2B45', fontWeight: 700 }}>History</span>
          <h2 className="font-800" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>Milestones & Achievements</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'rgba(13,43,69,0.1)' }} />
          <div className="flex flex-col gap-8 lg:gap-5">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex flex-col lg:flex-row items-start lg:items-center gap-5 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.08}s` }}>
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="inline-block rounded-2xl p-6 w-full" style={{ background: '#FFF9F3', border: '1px solid rgba(13,43,69,0.06)' }}>
                    <div className="text-sm font-700 mb-1.5" style={{ color: '#F47C20', fontWeight: 700 }}>{m.year}</div>
                    <h4 className="font-700 text-base mb-1.5" style={{ color: '#0D2B45', fontWeight: 700 }}>{m.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full border-4 flex-shrink-0 z-10" style={{ background: '#F47C20', borderColor: 'white' }}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Annual Highlights ─────────────────────────────────────────────────────────
const annualHighlights = [
  { year: '2024', image: 'https://images.unsplash.com/photo-1708593330411-24d85eff0728?w=500&h=350&fit=crop&auto=format', headline: 'Record fundraising year: $8.2M raised', stats: '25 new projects · 30,000 beneficiaries' },
  { year: '2023', image: 'https://images.unsplash.com/photo-1764967411778-01b04900447d?w=500&h=350&fit=crop&auto=format', headline: 'Digital Classrooms launched in 45 schools', stats: '12,000 students · 5 states' },
  { year: '2022', image: 'https://images.unsplash.com/photo-1596450514537-fae68a81346b?w=500&h=350&fit=crop&auto=format', headline: 'Mobile health network reaches 200 villages', stats: '18,000 patients · 6 mobile clinics' },
]

function AnnualHighlights() {
  const { ref, inView } = useInView(0.15)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.1)', color: '#F47C20', fontWeight: 700 }}>Year in Review</span>
          <h2 className="font-800" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>Annual Highlights</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {annualHighlights.map((h, i) => (
            <div key={h.year} className="group rounded-2xl overflow-hidden" style={{ background: 'white', boxShadow: '0 2px 20px rgba(13,43,69,0.06)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.12}s` }}>
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <img src={h.image} alt={h.headline} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.7) 0%, transparent 55%)' }} />
                <span className="absolute top-4 left-4 text-2xl font-800 text-white" style={{ fontWeight: 800 }}>{h.year}</span>
              </div>
              <div className="p-6">
                <h4 className="font-700 text-base mb-2" style={{ color: '#0D2B45', fontWeight: 700 }}>{h.headline}</h4>
                <p className="text-sm" style={{ color: '#F47C20', fontWeight: 600 }}>{h.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  { quote: 'INDNET\'s transparency report was what convinced us to make our largest-ever charitable gift. The level of detail and accountability is extraordinary.', name: 'Ramesh & Meena Iyer', role: 'Major Donors, New Jersey', image: 'https://images.unsplash.com/photo-1567122087721-47b09b61e1d1?w=200&h=200&fit=crop&auto=format' },
  { quote: 'As a beneficiary turned volunteer, I can say that the programs I lived through were as real and impactful as any organization I have worked with in 20 years of development.', name: 'Dr. Priya Nair', role: 'Volunteer & Alumna', image: 'https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?w=200&h=200&fit=crop&auto=format' },
  { quote: 'The communities we visited in Bihar were genuinely transformed. Schools, clinics, water access — the impact is visible, sustained, and growing.', name: 'Sarah Chen', role: 'Field Evaluator, USAID', image: 'https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?w=200&h=200&fit=crop&auto=format' },
]

function Testimonials() {
  const { ref, inView } = useInView(0.2)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-700 uppercase tracking-widest mb-5" style={{ background: 'rgba(46,139,87,0.1)', color: '#2E8B57', fontWeight: 700 }}>Voices</span>
          <h2 className="font-800" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>What Our Partners Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="rounded-2xl p-8 flex flex-col" style={{ background: '#FFF9F3', boxShadow: '0 2px 20px rgba(13,43,69,0.06)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.7s ease ${i * 0.12}s` }}>
              <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <span key={j} style={{ color: '#F47C20' }}>★</span>)}</div>
              <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-700 text-sm" style={{ color: '#0D2B45', fontWeight: 700 }}>{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06010 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white font-800 mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Be Part of the Impact</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Every statistic on this page began with a person who chose to act. Your turn.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/donate" className="px-8 py-4 rounded-full text-base font-700 hover:scale-105 transition-all duration-200" style={{ background: '#0D2B45', color: 'white', fontWeight: 700 }}>Donate Now</Link>
          <Link to="/volunteer" className="px-8 py-4 rounded-full text-base font-700 hover:bg-white/20 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700 }}>Volunteer</Link>
          <Link to="/contact" className="px-8 py-4 rounded-full text-base font-700 hover:bg-white/20 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700 }}>Partner</Link>
        </div>
      </div>
    </section>
  )
}

export default function ImpactPage() {
  return (
    <>
      <PageHero />
      <ImpactOverview />
      <AreasOfImpact />
      <Timeline />
      <AnnualHighlights />
      <Testimonials />
      <Cta />
    </>
  )
}
