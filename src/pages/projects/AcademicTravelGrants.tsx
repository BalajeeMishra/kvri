import { Link } from 'react-router'
import { useInView } from '../../hooks/useInView'

function PageHero() {
  return (
    <section className="relative h-[420px] flex items-end">
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1800&h=800&fit=crop&auto=format"
        alt="Academic Travel Grants"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.92) 0%, rgba(13,43,69,0.4) 60%, transparent 100%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/projects/inf-projects" className="hover:text-white">Projects</Link>
          <span>/</span>
          <span className="text-white">Academic Travel Grants</span>
        </div>
        <h1 className="text-5xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Travel Grants to Academics in India</h1>
        <p className="text-white/80 text-lg max-w-xl">Empowering Indian researchers and academics to share their work with the global community.</p>
      </div>
    </section>
  )
}

function AboutProgram() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&h=500&fit=crop&auto=format"
              alt="Academic"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="inline-block rounded-full text-xs font-700 px-4 py-1.5 mb-4" style={{ background: '#F47C20', color: 'white', fontFamily: 'Manrope, sans-serif' }}>About the Program</span>
            <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Bridging Indian Research with the World</h2>
            <div className="space-y-4 text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <p>INF's Academic Travel Grant program supports Indian researchers, PhD scholars, and faculty members in presenting their work at premier international conferences, workshops, and symposia worldwide.</p>
              <p>By facilitating knowledge exchange between India's academic community and global institutions, we help build lasting collaborations and elevate Indian research on the world stage.</p>
              <div>
                <h3 className="font-700 mb-1" style={{ color: '#0D2B45' }}>What the Grant Covers</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>International airfare (economy class)</li>
                  <li>Conference registration fees</li>
                  <li>Accommodation for the duration of the event</li>
                  <li>Daily subsistence allowance</li>
                </ul>
              </div>
              <p>Applications are open year-round, with decisions communicated within four weeks of submission. Grant amounts are determined based on destination, duration, and available funds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const WHO_CAN_APPLY = [
  {
    icon: '🎓',
    title: 'PhD Students',
    desc: "Enrolled doctoral students at recognized Indian universities presenting original research at peer-reviewed international conferences.",
  },
  {
    icon: '🔬',
    title: 'Post-Doctoral Researchers',
    desc: 'Early-career researchers in post-doctoral positions at Indian institutions with accepted conference papers or invited presentations.',
  },
  {
    icon: '🏛️',
    title: 'Faculty Members',
    desc: 'Full-time faculty at accredited Indian universities and research institutes presenting at international academic events.',
  },
]

function WhoCanApply() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="py-20" style={{ background: '#FFF9F3' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-800" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Who Can Apply</h2>
            <p className="text-gray-500 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Three categories of eligible applicants</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHO_CAN_APPLY.map(item => (
              <div key={item.title} className="rounded-2xl p-8 bg-white shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-800 text-xl mb-3" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{item.title}</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TIMELINE_STEPS = [
  { step: '01', label: 'Application Opens', desc: 'Rolling applications accepted year-round via the INF portal' },
  { step: '02', label: 'Document Submission', desc: 'Acceptance letter, CV, and budget estimate submitted within 2 weeks of acceptance' },
  { step: '03', label: 'Committee Review', desc: 'INF academic committee evaluates applications within 4 weeks' },
  { step: '04', label: 'Award Notification', desc: 'Awardees notified and funds disbursed at least 3 weeks before travel' },
]

function GrantDetails() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div>
            <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Grant Details</h2>
            <div className="space-y-5 text-sm text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <div className="rounded-2xl p-6" style={{ background: '#FFF9F3' }}>
                <h3 className="font-700 text-base mb-2" style={{ color: '#0D2B45' }}>Grant Amounts</h3>
                <p>Individual grants range from <span className="font-700" style={{ color: '#F47C20' }}>$500 to $2,000</span> per conference, based on destination country, duration, and conference tier.</p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: '#FFF9F3' }}>
                <h3 className="font-700 text-base mb-2" style={{ color: '#0D2B45' }}>Application Deadlines</h3>
                <p>Applications must be submitted at least 6 weeks prior to the conference start date. Rolling review — no fixed cycles.</p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: '#FFF9F3' }}>
                <h3 className="font-700 text-base mb-2" style={{ color: '#0D2B45' }}>Covered Expenses</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Economy airfare (round trip)</li>
                  <li>Conference registration</li>
                  <li>Hotel accommodation (up to 5 nights)</li>
                  <li>Daily allowance ($50–$80/day)</li>
                  <li>Visa fees (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-800 mb-6" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>Application Timeline</h2>
            <div className="space-y-5">
              {TIMELINE_STEPS.map((item, idx) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-800 text-white" style={{ background: '#F47C20', fontFamily: 'Manrope, sans-serif' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-700" style={{ color: '#0D2B45', fontFamily: 'Manrope, sans-serif' }}>{item.label}</h3>
                    <p className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="py-20" style={{ background: '#0D2B45' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          {[
            { stat: '200+', label: 'Grants Awarded' },
            { stat: '45+', label: 'Countries Reached' },
            { stat: '$400K+', label: 'Disbursed' },
          ].map(item => (
            <div key={item.stat}>
              <div className="text-5xl font-800 mb-2" style={{ color: '#F47C20', fontFamily: 'Manrope, sans-serif' }}>{item.stat}</div>
              <div className="text-white/70 font-700" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="py-20" style={{ background: '#F47C20' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-800 text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Apply for a Travel Grant</h2>
        <p className="text-white/80 mb-8 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>Share your research with the world. INF will help you get there.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="rounded-full px-8 py-3.5 font-700 text-base" style={{ background: '#0D2B45', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Apply Now</Link>
          <Link to="/programs/education" className="rounded-full px-8 py-3.5 font-700 text-base" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: 'Manrope, sans-serif' }}>Learn More</Link>
        </div>
      </div>
    </section>
  )
}

export default function AcademicTravelGrantsPage() {
  return (
    <div>
      <PageHero />
      <AboutProgram />
      <WhoCanApply />
      <GrantDetails />
      <Stats />
      <Cta />
    </div>
  )
}
