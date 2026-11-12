import { Link } from 'react-router'
import { useInView } from '../../../hooks/useInView'

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl p-6 text-center" style={{ background: '#0D2B45' }}>
      <div className="text-3xl font-800 mb-1" style={{ color: '#F47C20', fontFamily: 'Manrope, sans-serif' }}>{value}</div>
      <div className="text-sm text-white/70" style={{ fontFamily: 'Manrope, sans-serif' }}>{label}</div>
    </div>
  )
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
    >
      {children}
    </div>
  )
}

export default function MobileEyeCampsPage() {
  return (
    <div style={{ background: '#FFF9F3' }}>
      {/* Hero */}
      <section className="relative h-[480px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1800&h=800&fit=crop&auto=format"
          alt="Mobile Eye Camps"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.93) 0%, rgba(13,43,69,0.45) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects/inf-projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <Link to="/projects/past" className="hover:text-white transition-colors">Past Projects</Link>
            <span>/</span>
            <span className="text-white">Mobile Eye Camps</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: '#F47C20', color: 'white', fontFamily: 'Manrope, sans-serif' }}>2022</span>
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Healthcare</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-800 text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Mobile Eye Camps — Tamil Nadu 2022</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=500&fit=crop&auto=format"
                alt="Eye camp"
                className="rounded-2xl w-full object-cover shadow-lg"
                style={{ height: '380px' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Project Overview</h2>
              <div className="space-y-4">
                {[
                  { label: 'Duration', value: '6 weeks (Sep–Oct 2022)' },
                  { label: 'Location', value: 'Thanjavur District, Tamil Nadu' },
                  { label: 'Beneficiaries', value: '3,200+ patients' },
                  { label: 'Status', value: 'Completed' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 pb-4" style={{ borderBottom: '1px solid rgba(13,43,69,0.08)' }}>
                    <span className="text-sm font-700 w-32 shrink-0" style={{ color: '#F47C20', fontFamily: 'Manrope, sans-serif' }}>{item.label}</span>
                    <span className="text-sm" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16" style={{ background: '#FFF9F3' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>The Challenge</h2>
            <div className="rounded-2xl p-8" style={{ background: 'white', borderLeft: '4px solid #2E8B57' }}>
              <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Thousands of rural residents in Thanjavur District, Tamil Nadu, lived with untreated cataracts and uncorrected refractive errors. The nearest ophthalmology centre was over 80 km away, and the cost of travel and treatment placed proper eye care entirely out of reach for agricultural workers and the elderly. Many had accepted permanent vision loss as an inevitable fact of life, not knowing that affordable treatment was possible.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* Our Response */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <h2 className="text-3xl font-800 mb-8" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Our Response</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Mobile Clinic Deployment',
                  desc: 'Deployed 3 fully-equipped mobile eye clinics staffed by 8 experienced ophthalmologists and 24 support staff, rotating through 18 villages over six weeks to maximise reach.',
                },
                {
                  step: '02',
                  title: 'Cataract Surgery Program',
                  desc: 'Performed 850 free cataract surgeries at local partner hospitals, with patients transported by INDNET, operated on, and returned home within 48 hours — restoring sight at zero cost.',
                },
                {
                  step: '03',
                  title: 'Glasses & Permanent Clinics',
                  desc: 'Distributed 2,400 pairs of prescription spectacles and partnered with 3 local clinics to establish permanent vision care services that continue to serve communities today.',
                },
              ].map(item => (
                <div key={item.step} className="rounded-2xl p-6" style={{ background: '#FFF9F3', border: '1px solid rgba(13,43,69,0.08)' }}>
                  <div className="text-4xl font-800 mb-3" style={{ color: 'rgba(46,139,87,0.2)', fontFamily: 'Manrope, sans-serif' }}>{item.step}</div>
                  <h3 className="font-800 text-lg mb-3" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16" style={{ background: '#FFF9F3' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <h2 className="text-3xl font-800 mb-8 text-center" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Impact at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard value="3,200+" label="Patients Screened" />
              <StatCard value="850" label="Surgeries Performed" />
              <StatCard value="2,400" label="Glasses Distributed" />
              <StatCard value="3" label="Permanent Clinics" />
            </div>
          </Section>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <h2 className="text-3xl font-800 mb-8" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Project Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&h=300&fit=crop&auto=format',
              ].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden" style={{ height: '220px' }}>
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16" style={{ background: '#FFF9F3' }}>
        <div className="max-w-4xl mx-auto px-6">
          <Section>
            <div className="rounded-2xl p-10 text-center" style={{ background: 'white', border: '1px solid rgba(13,43,69,0.08)' }}>
              <div className="text-5xl mb-6" style={{ color: '#F47C20' }}>"</div>
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                After 12 years of blurred vision, I can finally see my grandchildren's faces clearly.
              </p>
              <div className="font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Murugan</div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'Manrope, sans-serif' }}>Age 67, Thanjavur</div>
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: '#F47C20' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Support Projects Like This</h2>
          <p className="text-white/80 mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>Explore our active initiatives or join our volunteer network to make a difference.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects/inf-projects" className="rounded-full px-8 py-3.5 font-700" style={{ background: '#0D2B45', color: 'white', fontFamily: 'Manrope, sans-serif' }}>View Active Projects</Link>
            <Link to="/volunteer" className="rounded-full px-8 py-3.5 font-700" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Become a Volunteer</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
