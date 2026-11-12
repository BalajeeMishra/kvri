import { Link } from 'react-router'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import { ORG, PROJECTS, VALUES } from '../site'

function WhoWeAre() {
  const { ref, inView } = useInView(0.15)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.1)', color: '#F47C20', fontWeight: 700 }}>Who We Are</span>
          <h2 className="mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0D2B45' }}>Dedicated to Rural Development and Empowerment</h2>
          <div className="flex flex-col gap-5 text-gray-600 text-base leading-relaxed">
            <p>
              KV Rao International Foundation (KVRI) is committed to rural development and the empowerment of communities across India. We work alongside villages, families, and farmers to create opportunities that last.
            </p>
            <p>
              Our key focus areas are education, sanitation, healthcare, agriculture, and farmer empowerment. Each one addresses a root cause of rural poverty — and together they help communities stand on their own feet.
            </p>
            <p>
              We envision self-reliant communities and a more equitable, sustainable rural India. With the support of our partners, volunteers, and donors, we are turning that vision into reality, one village at a time.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.15s' }}>
          <div className="rounded-2xl overflow-hidden col-span-2" style={{ height: 260 }}>
            <img src="/images/camp-2.jpeg" alt="KVRI medical camp in Tanuku" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
            <img src="/images/farmers.jpeg" alt="Farmers in a training session" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: 180 }}>
            <img src="/images/education.jpeg" alt="Children and adults learning together" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FocusAreas() {
  const { ref, inView } = useInView(0.15)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#0D2B45' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(244,124,32,0.15)', color: '#F47C20', fontWeight: 700 }}>Focus Areas</span>
          <h2 className="text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Where We Work</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROJECTS.map((p, i) => (
            <Link key={p.slug} to={`/programs#${p.slug}`} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', opacity: inView ? 1 : 0, transition: `all 0.6s ease ${i * 0.08}s` }}>
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="text-white mb-2" style={{ fontWeight: 700 }}>{p.title}</div>
              <div className="text-white/50 text-sm leading-relaxed">{p.subtitle}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  const { ref, inView } = useInView(0.15)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-5" style={{ background: 'rgba(46,139,87,0.1)', color: '#2E8B57', fontWeight: 700 }}>Our Values</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0D2B45' }}>We Are Driven by Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <div key={v.title} className="rounded-2xl p-8 bg-white" style={{ boxShadow: '0 2px 20px rgba(13,43,69,0.05)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transition: `all 0.6s ease ${i * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: 'rgba(244,124,32,0.1)' }}>{v.icon}</div>
              <h3 className="text-xl mb-2" style={{ color: '#0D2B45', fontWeight: 700 }}>{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
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
        <h2 className="text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Let's Talk</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Want to partner with us, volunteer, or learn more about our work? Book a call with our team.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={ORG.phoneHref} className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105" style={{ background: '#0D2B45', color: 'white', fontWeight: 700 }}>Book a Call</a>
          <Link to="/contact" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700 }}>Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero image="/images/camp-3.jpeg" alt="KVRI team at a community medical camp" crumb="Who is KVRI" eyebrow="About Us" title="Who is KVRI">
        {ORG.name} works for rural development and empowerment — building self-reliant communities and a more equitable, sustainable rural India.
      </PageHero>
      <WhoWeAre />
      <FocusAreas />
      <Values />
      <Cta />
    </>
  )
}
