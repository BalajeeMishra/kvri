import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useInView } from '../hooks/useInView'
import { ORG, PROJECTS, POSTS, CAMP_PHOTOS, VALUES } from '../site'

const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h8M9 4l4 4-4 4" /></svg>
)

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])
  const fade = (delay: number, y = 16): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : `translateY(${y}px)`,
    transition: `all 0.7s ease ${delay}s`,
  })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/healthcare.jpeg" alt="Healthcare worker assisting people in a rural community" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,43,69,0.9) 0%, rgba(13,43,69,0.6) 60%, rgba(0,0,0,0.35) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.9) 0%, transparent 50%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm"
              style={{ background: 'rgba(244,124,32,0.2)', border: '1px solid rgba(244,124,32,0.4)', color: '#F47C20', fontWeight: 600, ...fade(0.1, 12) }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#F47C20' }} />
              {ORG.name}
            </div>

            <h1 className="text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, ...fade(0.2, 20) }}>
              Let us make a <span style={{ color: '#F47C20' }}>difference.</span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl" style={fade(0.35)}>
              {ORG.mission}
            </p>

            <div className="flex flex-wrap gap-4" style={fade(0.45)}>
              <Link to="/programs" className="px-8 py-4 rounded-full text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl" style={{ background: '#F47C20', fontWeight: 700 }}>
                Explore Our Projects
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-full text-white text-base transition-all duration-200 hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', fontWeight: 600 }}>
                Who is KVRI
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" style={fade(0.5, 24)}>
            {PROJECTS.map((p, i) => (
              <Link
                key={p.slug}
                to={`/programs#${p.slug}`}
                className={`rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${i === PROJECTS.length - 1 ? 'col-span-2' : ''}`}
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <div className="text-white text-sm" style={{ fontWeight: 700 }}>{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Mission + Quote ───────────────────────────────────────────────────────────
function MissionSection() {
  const { ref, inView } = useInView(0.2)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#0D2B45' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.15)', color: '#F47C20', fontWeight: 700 }}>Our Mission</span>
          <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Sustainable Futures for Rural India</h2>
          <p className="text-white/65 text-lg leading-relaxed mb-6">
            KV Rao International Foundation is dedicated to building sustainable futures in rural India. We focus on education, sanitation, healthcare, agriculture, and farmer empowerment.
          </p>
          <p className="text-white/65 text-lg leading-relaxed">
            Our goal is to break the cycle of poverty and create lasting change — so communities can become self-reliant and thrive.
          </p>
        </div>
        <figure
          className="rounded-2xl p-10 relative"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.15s' }}
        >
          <div className="absolute -top-6 left-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-3xl" style={{ background: '#F47C20', fontWeight: 800 }}>“</div>
          <blockquote className="text-white text-2xl leading-snug mb-6" style={{ fontWeight: 700 }}>
            {ORG.quote.text}
          </blockquote>
          <figcaption className="text-white/50 text-sm" style={{ fontWeight: 600 }}>— {ORG.quote.author}</figcaption>
        </figure>
      </div>
    </section>
  )
}

// ── Projects ──────────────────────────────────────────────────────────────────
function ProjectsSection() {
  const { ref, inView } = useInView(0.1)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.1)', color: '#F47C20', fontWeight: 700 }}>Projects</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>What We Do</h2>
            <p className="text-gray-500 text-lg mt-2 max-w-md leading-relaxed">Five focus areas working together to empower rural communities.</p>
          </div>
          <Link to="/programs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 self-start lg:self-end" style={{ background: '#0D2B45', color: 'white', fontWeight: 600 }}>
            View All Projects <Arrow />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              to={`/programs#${p.slug}`}
              className="group rounded-2xl overflow-hidden block"
              style={{ background: 'white', boxShadow: '0 2px 20px rgba(13,43,69,0.06)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.7) 0%, transparent 60%)' }} />
                <span className="absolute bottom-4 left-4 text-3xl">{p.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3" style={{ color: '#0D2B45', fontWeight: 700 }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.subtitle}</p>
                <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all duration-200" style={{ color: '#F47C20', fontWeight: 600 }}>
                  Learn More <Arrow />
                </div>
              </div>
            </Link>
          ))}
          <div
            className="rounded-2xl p-8 flex flex-col justify-center"
            style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06010 100%)', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}
          >
            <h3 className="text-white text-2xl mb-3" style={{ fontWeight: 800 }}>{ORG.closing}</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">Your support helps us reach more villages, families, and farmers.</p>
            <Link to="/donate" className="self-start px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105" style={{ background: '#0D2B45', color: 'white', fontWeight: 700 }}>Support Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Featured: Mega Medical Camp ───────────────────────────────────────────────
function FeaturedCamp() {
  const { ref, inView } = useInView(0.15)
  const camp = POSTS[0]
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
        <div className="grid grid-cols-2 gap-3" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.8s ease' }}>
          {CAMP_PHOTOS.slice(0, 4).map((src, i) => (
            <div key={src} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2' : ''}`} style={{ height: i === 0 ? 260 : 140 }}>
              <img src={src} alt="Mega Medical Camp in Tanuku" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.8s ease 0.15s' }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(46,139,87,0.1)', color: '#2E8B57', fontWeight: 700 }}>🏥 In the Field</span>
          <h2 className="mb-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0D2B45' }}>{camp.title}</h2>
          <p className="text-lg mb-6" style={{ color: '#F47C20', fontWeight: 700 }}>{camp.subtitle}</p>
          {camp.sections[0].paragraphs?.map(p => (
            <p key={p} className="text-gray-500 text-base leading-relaxed mb-4">{p}</p>
          ))}
          <div className="flex items-center gap-4 rounded-2xl p-5 my-8" style={{ background: '#FFF9F3', border: '1px solid rgba(13,43,69,0.06)' }}>
            <div className="text-4xl leading-none" style={{ color: '#F47C20', fontWeight: 800 }}>50+</div>
            <div className="text-sm text-gray-500 leading-snug">beneficiaries received free consultations, check-ups, and medicines</div>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-sm" style={{ color: '#F47C20', fontWeight: 600 }}>
            Read on our Blog <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Values preview ────────────────────────────────────────────────────────────
function ValuesSection() {
  const { ref, inView } = useInView(0.15)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(13,43,69,0.06)', color: '#0D2B45', fontWeight: 700 }}>Our Values</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>We Are Driven by Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <div key={v.title} className="rounded-2xl p-6 bg-white" style={{ boxShadow: '0 2px 20px rgba(13,43,69,0.05)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transition: `all 0.6s ease ${i * 0.08}s` }}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="text-lg mb-2" style={{ color: '#0D2B45', fontWeight: 700 }}>{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Join Our Movement ─────────────────────────────────────────────────────────
function JoinSection() {
  const { ref, inView } = useInView(0.15)
  const cards = [
    { title: 'Projects', desc: 'See how we work across healthcare, education, sanitation, and agriculture.', to: '/programs', image: '/images/card-projects.webp' },
    { title: 'Blog', desc: 'Stories and insights from our work in rural communities.', to: '/news', image: '/images/card-blog.webp' },
    { title: 'Contact Us', desc: 'Partner, volunteer, or simply reach out — we would love to hear from you.', to: '/contact', image: '/images/card-contact.png' },
  ]
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.1)', color: '#F47C20', fontWeight: 700 }}>Get Involved</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>Join Our Movement</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Link key={c.title} to={c.to} className="group rounded-2xl overflow-hidden block" style={{ background: '#FFF9F3', border: '1px solid rgba(13,43,69,0.06)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.1}s` }}>
              <div className="overflow-hidden flex items-center justify-center bg-white" style={{ height: 200 }}>
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: '#0D2B45', fontWeight: 700 }}>{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm" style={{ color: '#F47C20', fontWeight: 600 }}>Explore <Arrow size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Strip ─────────────────────────────────────────────────────────────────
function CtaStrip() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06010 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Join Us on Our Movement</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Whether you donate, volunteer, or partner with us — together we can build a more equitable and sustainable rural India.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl" style={{ background: '#0D2B45', color: 'white', fontWeight: 700 }}>Get Started</Link>
          <Link to="/donate" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700 }}>Donate Now</Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ProjectsSection />
      <FeaturedCamp />
      <ValuesSection />
      <JoinSection />
      <CtaStrip />
    </>
  )
}
