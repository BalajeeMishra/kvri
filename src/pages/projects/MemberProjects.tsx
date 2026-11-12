import { useState } from 'react'
import { Link } from 'react-router'
import { useInView } from '../../hooks/useInView'

function PageHero() {
  return (
    <section className="relative h-[420px] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1800&h=700&fit=crop&auto=format"
        alt="Member Projects"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.92) 0%, rgba(13,43,69,0.4) 60%, transparent 100%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/projects/inf-projects" className="hover:text-white">Projects</Link>
          <span>/</span>
          <span className="text-white">Member Projects</span>
        </div>
        <h1 className="text-5xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Member Initiated Projects</h1>
        <p className="text-white/80 text-lg max-w-xl">Have an idea that can make a difference? INDNET members can propose and lead meaningful projects.</p>
      </div>
    </section>
  )
}

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: '💡',
    title: 'Submit Your Idea',
    desc: 'Share your project concept through the submission form. Include your goals, target beneficiaries, location, and estimated budget.',
  },
  {
    step: '02',
    icon: '🔍',
    title: 'Project Review',
    desc: "INF's project committee evaluates your proposal for feasibility, impact, and alignment with our mission. Review takes 3–5 business days.",
  },
  {
    step: '03',
    icon: '🤝',
    title: 'Approval & Planning',
    desc: "Approved projects move into joint planning with the INF team. We'll help you refine the scope, timeline, and resource plan.",
  },
  {
    step: '04',
    icon: '🚀',
    title: 'Project Execution',
    desc: 'INF provides resources, networks, and on-the-ground support while you lead the initiative from start to finish.',
  },
]

function HowItWorks() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="py-20" style={{ background: '#FFF9F3' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-800" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>How It Works</h2>
            <p className="text-gray-500 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>From idea to impact in four steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map(item => (
              <div key={item.step} className="rounded-2xl p-7 bg-white shadow-sm relative">
                <div className="absolute top-5 right-5 text-3xl font-800" style={{ color: 'rgba(244,124,32,0.13)', fontFamily: 'Manrope, sans-serif' }}>{item.step}</div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-800 text-lg mb-2" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProjectForm {
  name: string
  detail: string
  amount: string
}

function StartAProjectForm() {
  const [form, setForm] = useState<ProjectForm>({ name: '', detail: '', amount: '' })
  const [submitted, setSubmitted] = useState(false)

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-colors"
  const inputStyle = { border: '1px solid rgba(13,43,69,0.15)', background: 'white' }
  const labelClass = "block text-sm font-700 mb-1.5"
  const labelStyle = { color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.detail.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl shadow-xl p-8 md:p-12" style={{ background: 'white', border: '1px solid rgba(13,43,69,0.08)' }}>
          {!submitted ? (
            <>
              <h2 className="text-3xl font-800 mb-2" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Start a Project</h2>
              <p className="text-gray-500 mb-8 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>Have an idea that can make a difference? Tell us about your project.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass} style={labelStyle}>Your Name <span style={{ color: '#F47C20' }}>*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className={inputClass}
                    style={inputStyle}
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Project Detail <span style={{ color: '#F47C20' }}>*</span></label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Describe your project idea, purpose, target beneficiaries, location, and expected impact..."
                    className={inputClass}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    value={form.detail}
                    onChange={e => setForm(p => ({ ...p, detail: e.target.value }))}
                  />
                </div>
                <div>
                  <label className={labelClass} style={labelStyle}>Estimated Budget (USD)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>$</span>
                    <input
                      type="number"
                      min={0}
                      placeholder="Estimated budget required"
                      className={inputClass}
                      style={{ ...inputStyle, paddingLeft: '2rem' }}
                      value={form.amount}
                      onChange={e => setForm(p => ({ ...p, amount: e.target.value }))}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-white font-700 text-base mt-2"
                  style={{ background: '#F47C20', fontFamily: 'Manrope, sans-serif' }}
                >
                  Submit Project
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl" style={{ background: 'rgba(46,139,87,0.1)' }}>✓</div>
              <h3 className="text-2xl font-800 mb-3" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Proposal Submitted!</h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Thank you, <span className="font-700" style={{ color: '#F47C20' }}>{form.name}</span>! Your project proposal has been submitted. Our team will review it and contact you within 5 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', detail: '', amount: '' }) }}
                className="rounded-full px-8 py-3 text-sm font-700"
                style={{ background: '#0D2B45', color: 'white', fontFamily: 'Manrope, sans-serif' }}
              >
                Submit Another Proposal
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const MEMBER_PROJECTS = [
  {
    title: 'Solar Lamps for Odisha Villages',
    member: 'Anand Krishnan',
    memberLocation: 'Houston, TX',
    location: 'Koraput, Odisha',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format',
    description: 'Installed 200 solar lamps across 8 remote villages with no grid electricity, enabling children to study after dark.',
    impact: '200 lamps, 8 villages, 1,500 beneficiaries',
  },
  {
    title: 'Book Bank for Government Schools',
    member: 'Deepa Iyer',
    memberLocation: 'Chicago, IL',
    location: 'Mysuru, Karnataka',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format',
    description: 'Collecting and distributing second-hand textbooks to government school students to reduce the financial burden on families.',
    impact: '3,200 books donated to date',
  },
  {
    title: 'Clean Water Initiative — Vidarbha',
    member: 'Sanjay Nair',
    memberLocation: 'New Jersey',
    location: 'Vidarbha, Maharashtra',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format',
    description: 'Installing water purification units in drought-prone villages to provide clean drinking water year-round.',
    impact: '12 purifiers, 4 villages covered',
  },
]

function FeaturedMemberProjects() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-800" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Member Projects in Action</h2>
            <p className="text-gray-500 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Real projects proposed and executed by INDNET members.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEMBER_PROJECTS.map(project => (
              <div key={project.title} className="rounded-2xl overflow-hidden shadow-sm bg-white" style={{ border: '1px solid rgba(13,43,69,0.08)' }}>
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span
                    className="inline-block rounded-full text-xs font-700 px-3 py-1 mb-3"
                    style={{ background: '#F47C20', color: 'white', fontFamily: 'Manrope, sans-serif' }}
                  >
                    Proposed by {project.member}
                  </span>
                  <h3 className="font-800 text-base mb-1" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{project.title}</h3>
                  <p className="text-xs text-gray-400 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{project.location} &middot; {project.memberLocation}</p>
                  <span
                    className="inline-block rounded-full text-xs font-700 px-3 py-0.5 mb-3"
                    style={{
                      background: project.status === 'Active' ? 'rgba(46,139,87,0.1)' : 'rgba(13,43,69,0.08)',
                      color: project.status === 'Active' ? '#2E8B57' : '#0D2B45',
                      fontFamily: 'Manrope, sans-serif',
                    }}
                  >
                    {project.status}
                  </span>
                  <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{project.description}</p>
                  <span
                    className="inline-block rounded-full text-xs font-700 px-3 py-1.5"
                    style={{ background: 'rgba(46,139,87,0.1)', color: '#2E8B57', fontFamily: 'Manrope, sans-serif' }}
                  >
                    {project.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="py-20" style={{ background: '#F47C20' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Explore More</h2>
        <p className="text-white/80 mb-8 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>See INF-initiated projects or get in touch to learn more about membership.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects/inf-projects" className="rounded-full px-8 py-3.5 font-700 text-base" style={{ background: '#0D2B45', color: 'white', fontFamily: 'Manrope, sans-serif' }}>View INF Projects</Link>
          <Link to="/contact" className="rounded-full px-8 py-3.5 font-700 text-base" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default function MemberProjectsPage() {
  return (
    <div>
      <PageHero />
      <HowItWorks />
      <FeaturedMemberProjects />
      <StartAProjectForm />
      <Cta />
    </div>
  )
}
