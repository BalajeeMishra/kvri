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

export default function KeralaFloodReliefPage() {
  return (
    <div style={{ background: '#FFF9F3' }}>
      {/* Hero */}
      <section className="relative h-[480px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1800&h=800&fit=crop&auto=format"
          alt="Kerala Flood Relief"
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
            <span className="text-white">Kerala Flood Relief</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: '#F47C20', color: 'white', fontFamily: 'Manrope, sans-serif' }}>2021</span>
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Disaster Relief</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-800 text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Kerala Flood Relief 2021</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&h=500&fit=crop&auto=format"
                alt="Relief operations"
                className="rounded-2xl w-full object-cover shadow-lg"
                style={{ height: '380px' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Project Overview</h2>
              <div className="space-y-4">
                {[
                  { label: 'Duration', value: '3 months (Jul–Sep 2021)' },
                  { label: 'Location', value: 'Kottayam & Idukki, Kerala' },
                  { label: 'Beneficiaries', value: '12,000+ families' },
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
            <div className="rounded-2xl p-8" style={{ background: 'white', borderLeft: '4px solid #F47C20' }}>
              <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif' }}>
                In July 2021, record monsoon rains triggered catastrophic flooding and landslides across Kottayam and Idukki districts in southern Kerala. Over 50,000 people were displaced within days, with entire villages cut off by washed-out roads and swollen rivers. Relief infrastructure was overwhelmed, and thousands of families were left without food, clean water, or medical access for the first critical 72 hours of the disaster.
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
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: '01',
                  title: 'Emergency Kits in 72 Hours',
                  desc: 'Pre-positioned emergency kits containing food rations, drinking water, hygiene supplies, and first-aid materials were dispatched to 40 distribution points within 72 hours of the disaster declaration, reaching over 8,000 families in the first wave.',
                },
                {
                  step: '02',
                  title: 'Temporary Shelter',
                  desc: 'Coordinated with local panchayats to establish 12 relief camps providing temporary shelter, meals, and sanitation for 2,400 families whose homes were completely destroyed or made uninhabitable by flooding.',
                },
                {
                  step: '03',
                  title: 'Medical Camps',
                  desc: 'Operated 8 medical camps across Kottayam and Idukki with volunteer doctors treating flood-related illnesses including leptospirosis, skin infections, and trauma injuries. Over 4,000 patients received care.',
                },
                {
                  step: '04',
                  title: 'Diaspora Fundraising',
                  desc: 'Activated the INDNET diaspora network across the US, UK, Canada, and the Gulf, raising $1.8 million in just six weeks through targeted campaigns, matching gift drives, and community fundraising events.',
                },
              ].map(item => (
                <div key={item.step} className="rounded-2xl p-6" style={{ background: '#FFF9F3', border: '1px solid rgba(13,43,69,0.08)' }}>
                  <div className="text-4xl font-800 mb-3" style={{ color: 'rgba(244,124,32,0.2)', fontFamily: 'Manrope, sans-serif' }}>{item.step}</div>
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
              <StatCard value="12,000+" label="Families Aided" />
              <StatCard value="2,400" label="Shelters Provided" />
              <StatCard value="$1.8M" label="Diaspora Raised" />
              <StatCard value="8" label="Medical Camps" />
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
                'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&auto=format',
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
                INDNET volunteers arrived before government aid. They gave us food, medicine, and hope.
              </p>
              <div className="font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Bindu Thomas</div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'Manrope, sans-serif' }}>Kottayam, Kerala</div>
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
