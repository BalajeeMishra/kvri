import { Link } from 'react-router';
import { useInView } from '../../hooks/useInView';

function PageHero() {
  const { ref, inView } = useInView();
  return (
    <section
      className="relative min-h-[480px] flex items-end pb-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1800&h=800&fit=crop&auto=format')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(13,43,69,0.82)' }} />
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-6 w-full transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/programs" className="hover:text-white transition-colors">Programs</Link>
          <span>/</span>
          <span className="text-white">Community Support</span>
        </div>
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#F47C20', color: 'white' }}>Community</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Community Support</h1>
        <p className="text-white/80 text-lg max-w-2xl">Building thriving diaspora networks through cultural events, mentorship programs, and resource centers that connect Indians across the globe.</p>
      </div>
    </section>
  );
}

function AboutProgram() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: '#FFF9F3' }} className="py-20">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop&auto=format"
          alt="Community Support"
          className="rounded-2xl w-full h-72 object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: '#0D2B45' }}>About the Program</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">INDNET's Community Support program fosters belonging and resilience among the Indian diaspora by creating spaces for connection, mentorship, and mutual aid.</p>
          <p className="text-gray-600 leading-relaxed">From cultural festivals to career mentorship and local resource centers, we ensure no member of our community feels isolated or unsupported in their journey abroad.</p>
        </div>
      </div>
    </section>
  );
}

function ObjectivesSection() {
  const { ref, inView } = useInView();
  const objectives = [
    { icon: '🎉', title: 'Cultural Events', desc: 'Organizing Diwali, Holi, and Independence Day celebrations that unite the diaspora.' },
    { icon: '🤝', title: 'Diaspora Networking', desc: 'Facilitating professional and social networks for Indian immigrants worldwide.' },
    { icon: '🧭', title: 'Mentorship', desc: 'Pairing newcomers with established community members for guidance and support.' },
    { icon: '🏢', title: 'Resource Centers', desc: 'Operating local centers providing legal, health, and social service assistance.' },
  ];
  return (
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: '#0D2B45' }}>Our Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: 'rgba(13,43,69,0.08)' }}>
              <div className="flex items-center justify-center h-16 text-3xl" style={{ background: '#0D2B45' }}>{obj.icon}</div>
              <div className="p-5">
                <h4 className="font-bold mb-2 text-base" style={{ color: '#0D2B45' }}>{obj.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{obj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoItSupports() {
  const { ref, inView } = useInView();
  const groups = [
    { title: 'New Immigrants', desc: 'Individuals and families recently arrived who need orientation and community connection.' },
    { title: 'Student Community', desc: 'Indian students studying abroad seeking cultural comfort and peer support.' },
    { title: 'Working Professionals', desc: 'Diaspora professionals looking to network and advance their careers.' },
    { title: 'Families', desc: 'Multi-generational Indian families preserving heritage while integrating locally.' },
  ];
  return (
    <section className="py-20" style={{ background: '#0D2B45' }}>
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">Who It Supports</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <h4 className="font-bold text-white mb-2">{g.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { ref, inView } = useInView();
  const steps = [
    { n: '01', title: 'Join the Network', desc: 'Register as a community member through our online portal or local chapter.' },
    { n: '02', title: 'Attend Events', desc: 'Participate in cultural celebrations, networking mixers, and community workshops.' },
    { n: '03', title: 'Get Matched', desc: "New arrivals are matched with a mentor based on their background and goals." },
    { n: '04', title: 'Give Back', desc: 'Experienced members volunteer as mentors and event organizers to strengthen the community.' },
  ];
  return (
    <section style={{ background: '#FFF9F3' }} className="py-20">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: '#0D2B45' }}>How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white shadow-sm">
              <div className="text-4xl font-extrabold mb-3" style={{ color: '#F47C20' }}>{s.n}</div>
              <h4 className="font-bold mb-2" style={{ color: '#0D2B45' }}>{s.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const { ref, inView } = useInView();
  const stats = [
    { value: '80+', label: 'Events per Year' },
    { value: '12,000+', label: 'Community Members' },
    { value: '950+', label: 'Mentorship Pairs' },
    { value: '30+', label: 'Cities Worldwide' },
  ];
  return (
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className="max-w-5xl mx-auto px-6 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: '#0D2B45' }}>Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 text-center" style={{ background: '#FFF9F3' }}>
              <div className="text-4xl font-extrabold mb-2" style={{ color: '#F47C20' }}>{s.value}</div>
              <div className="text-sm font-semibold" style={{ color: '#0D2B45' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const { ref, inView } = useInView();
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06510 100%)' }}>
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-6 text-center transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">Strengthen Our Community Together</h2>
        <p className="text-white/90 mb-8 text-lg">Every event, every mentorship, every connection makes our diaspora stronger.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/join" className="px-8 py-3.5 rounded-full font-bold bg-white transition-all hover:-translate-y-1 hover:scale-105" style={{ color: '#F47C20' }}>Join Us</Link>
          <Link to="/volunteer" className="px-8 py-3.5 rounded-full font-bold border-2 border-white text-white transition-all hover:-translate-y-1 hover:scale-105">Volunteer</Link>
          <Link to="/programs" className="px-8 py-3.5 rounded-full font-bold border-2 border-white text-white transition-all hover:-translate-y-1 hover:scale-105">All Programs</Link>
        </div>
      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <main>
      <PageHero />
      <AboutProgram />
      <ObjectivesSection />
      <WhoItSupports />
      <HowItWorks />
      <ImpactStats />
      <Cta />
    </main>
  );
}
