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

export default function WomenSHGPage() {
  return (
    <div style={{ background: '#FFF9F3' }}>
      {/* Hero */}
      <section className="relative h-[480px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1593113630400-ea4288922559?w=1800&h=800&fit=crop&auto=format"
          alt="Women SHG Program"
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
            <span className="text-white">Women SHG Program</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: '#F47C20', color: 'white', fontFamily: 'Manrope, sans-serif' }}>2022</span>
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-800 text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Women SHG Program — Gujarat 2022</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=500&fit=crop&auto=format"
                alt="Women entrepreneurs"
                className="rounded-2xl w-full object-cover shadow-lg"
                style={{ height: '380px' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Project Overview</h2>
              <div className="space-y-4">
                {[
                  { label: 'Duration', value: '12 months (2022)' },
                  { label: 'Location', value: 'Saurashtra Region, Gujarat' },
                  { label: 'Beneficiaries', value: '900+ women' },
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
                Rural women in the Saurashtra region of Gujarat had virtually no economic independence. With limited education and no collateral, they were excluded from formal banking and microfinance systems. Cultural norms restricted their participation in markets, and most were entirely dependent on seasonal agricultural income. This financial vulnerability left them and their families exposed to any economic shock — illness, drought, or family crisis.
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
                  title: 'Self-Help Group Formation',
                  desc: 'Worked with village leaders and women\'s networks to form 60 self-help groups of 15 members each, with INDNET facilitators supporting weekly meetings, collective savings, and governance structures for each group.',
                },
                {
                  step: '02',
                  title: 'Microloan Access',
                  desc: 'Partnered with regional cooperative banks to unlock microloan access ranging from $200 to $1,000 per member, with flexible repayment terms and group-based credit guarantees that eliminated the need for individual collateral.',
                },
                {
                  step: '03',
                  title: 'Entrepreneurship Training',
                  desc: 'Delivered 40-hour entrepreneurship training modules covering business planning, pricing, marketing at local markets, digital payments, and basic bookkeeping — tailored to the local agricultural and artisan economy.',
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
              <StatCard value="900+" label="Women Empowered" />
              <StatCard value="60" label="SHGs Formed" />
              <StatCard value="$180K" label="Microloans Disbursed" />
              <StatCard value="240" label="New Businesses Started" />
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
                'https://images.unsplash.com/photo-1593113630400-ea4288922559?w=400&h=300&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&auto=format',
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
                My pickle business now earns three times what my husband makes. I am proud.
              </p>
              <div className="font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Rekha Patel</div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'Manrope, sans-serif' }}>Rajkot, Gujarat</div>
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
