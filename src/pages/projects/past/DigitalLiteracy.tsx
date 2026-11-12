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

export default function DigitalLiteracyPage() {
  return (
    <div style={{ background: '#FFF9F3' }}>
      {/* Hero */}
      <section className="relative h-[480px] flex items-end">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1800&h=800&fit=crop&auto=format"
          alt="Digital Literacy Drive"
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
            <span className="text-white">Digital Literacy Drive</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: '#F47C20', color: 'white', fontFamily: 'Manrope, sans-serif' }}>2023</span>
            <span className="rounded-full px-4 py-1 text-sm font-700" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Education</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-800 text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Digital Literacy Drive — Bihar 2023</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&h=500&fit=crop&auto=format"
                alt="Students learning"
                className="rounded-2xl w-full object-cover shadow-lg"
                style={{ height: '380px' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Project Overview</h2>
              <div className="space-y-4">
                {[
                  { label: 'Duration', value: '8 months (Mar–Oct 2023)' },
                  { label: 'Location', value: '12 districts, Bihar' },
                  { label: 'Beneficiaries', value: '10,000+ students' },
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
                Rural Bihar had one of the lowest digital literacy rates in India among school-age children. Less than 3% of students had ever accessed a computer, and schools lacked both the equipment and trained educators to bridge this gap. Without foundational digital skills, these students faced a growing disadvantage in higher education and employment, further entrenching cycles of poverty in the region.
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
                  title: 'Community Learning Centers',
                  desc: 'Deployed 45 community learning centers across 12 districts, each equipped with computers, reliable internet, and a structured digital curriculum developed with education experts.',
                },
                {
                  step: '02',
                  title: 'Teacher Training Program',
                  desc: 'Trained 180 local government school teachers through an intensive 3-week certification program covering basic computing, digital safety, and pedagogical techniques for tech education.',
                },
                {
                  step: '03',
                  title: 'Tablet Distribution',
                  desc: 'Distributed 600 tablets to top-performing students to enable continued learning at home, accompanied by curated offline educational content covering math, science, and language skills.',
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
              <StatCard value="10,000+" label="Students Trained" />
              <StatCard value="45" label="Centers Established" />
              <StatCard value="180" label="Teachers Certified" />
              <StatCard value="600" label="Tablets Distributed" />
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
                'https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=400&h=300&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&auto=format',
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
                I learned to use a computer and now I help my whole village with government forms online.
              </p>
              <div className="font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Sunita Devi</div>
              <div className="text-sm text-gray-500" style={{ fontFamily: 'Manrope, sans-serif' }}>Student, Muzaffarpur</div>
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
