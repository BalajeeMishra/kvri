import { useState } from 'react';
import { Link } from 'react-router';
import { useInView } from '../../hooks/useInView';

function PageHero() {
  const { ref, inView } = useInView();
  return (
    <section
      className="relative min-h-[480px] flex items-end pb-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1800&h=800&fit=crop&auto=format')",
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
          <span className="text-white">Education & Scholarships</span>
        </div>
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#F47C20', color: 'white' }}>Education</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Education & Scholarships</h1>
        <p className="text-white/80 text-lg max-w-2xl">Empowering the next generation of Indian diaspora leaders through NYU scholarships, digital literacy programs, and teacher training initiatives across India.</p>
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
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&auto=format"
          alt="Education Program"
          className="rounded-2xl w-full h-72 object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: '#0D2B45' }}>About the Program</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">India Network Foundation's Education & Scholarships program bridges opportunity gaps for talented students by funding NYU scholarships, building digital literacy, and equipping teachers with modern skills.</p>
          <p className="text-gray-600 leading-relaxed">We believe education is the most powerful investment in a community's future. Through partnerships with leading universities and NGOs, we have helped thousands of students achieve their academic dreams.</p>
        </div>
      </div>
    </section>
  );
}

function ObjectivesSection() {
  const { ref, inView } = useInView();
  const objectives = [
    { icon: '🎓', title: 'NYU Scholarships', desc: 'Providing full and partial scholarships to deserving Indian students at New York University.' },
    { icon: '💻', title: 'Digital Literacy', desc: 'Training students and communities in essential digital skills for the modern economy.' },
    { icon: '📚', title: 'Teacher Training', desc: 'Upskilling educators with contemporary pedagogical methods and classroom technology.' },
    { icon: '🎒', title: 'School Supplies', desc: 'Distributing books, stationery, and educational kits to underprivileged students across India.' },
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
    { title: 'Undergraduate Students', desc: 'Indian students pursuing bachelor degrees at accredited institutions.' },
    { title: 'Graduate Scholars', desc: 'Master and PhD candidates in STEM, humanities, and social sciences.' },
    { title: 'Rural Educators', desc: 'Teachers in underserved Indian communities seeking professional development.' },
    { title: 'Young Diaspora', desc: 'Children of Indian immigrants building cultural and academic bridges.' },
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
    { n: '01', title: 'Submit Application', desc: 'Eligible students submit their academic records and personal statement online.' },
    { n: '02', title: 'Review & Selection', desc: 'A panel of educators and INDNET trustees evaluates applications based on merit and need.' },
    { n: '03', title: 'Award Disbursement', desc: 'Selected scholars receive funds directly or through university financial aid offices.' },
    { n: '04', title: 'Ongoing Mentorship', desc: 'Scholars are paired with INDNET mentors for guidance throughout their academic journey.' },
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
    { value: '1,200+', label: 'Scholarships Awarded' },
    { value: '45,000+', label: 'Students Reached' },
    { value: '320+', label: 'Teachers Trained' },
    { value: '18', label: 'States in India' },
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

function ScholarshipForm() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', dob: '', address: '', education: '', exam: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.dob && form.address && form.education && form.exam) {
      setSubmitted(true);
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-gray-800 placeholder-gray-400 text-sm outline-none border focus:border-[#F47C20] transition-colors";
  const inputStyle = { border: '1px solid rgba(13,43,69,0.15)', background: 'white' };
  const labelClass = "text-sm mb-1.5 block";
  const labelStyle = { color: '#0D2B45', fontWeight: 600 };

  return (
    <section style={{ background: '#FFF9F3' }} className="py-20">
      <div
        ref={ref}
        className="max-w-2xl mx-auto px-6 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-3" style={{ color: '#0D2B45' }}>Interested in Scholarship Opportunities?</h2>
        <p className="text-center text-gray-600 mb-10">Eligible students are encouraged to submit their details for scholarship consideration.</p>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-extrabold mb-2" style={{ color: '#0D2B45' }}>Thank You!</h3>
              <p className="text-gray-600">Your interest has been received. Our team will review your details and reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className={labelClass} style={labelStyle}>Name <span style={{ color: '#F47C20' }}>*</span></label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>Date of Birth <span style={{ color: '#F47C20' }}>*</span></label>
                <input name="dob" type="date" required value={form.dob} onChange={handleChange} className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>Address <span style={{ color: '#F47C20' }}>*</span></label>
                <textarea name="address" required value={form.address} onChange={handleChange} placeholder="Your current address" rows={3} className={inputClass + " resize-none"} style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>Educational Background <span style={{ color: '#F47C20' }}>*</span></label>
                <input name="education" required value={form.education} onChange={handleChange} placeholder="e.g. B.Tech Computer Science, IIT Bombay" className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>Exam Taken <span style={{ color: '#F47C20' }}>*</span></label>
                <select name="exam" required value={form.exam} onChange={handleChange} className={inputClass} style={inputStyle}>
                  <option value="">Select an exam</option>
                  <option value="TOEFL">TOEFL</option>
                  <option value="GRE">GRE</option>
                  <option value="GMAT">GMAT</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 py-3.5 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:scale-105"
                style={{ background: '#F47C20' }}
              >
                Submit Interest
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const { ref, inView } = useInView();
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06510 100%)' }}
    >
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-6 text-center transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">Help a Student Reach Their Potential</h2>
        <p className="text-white/90 mb-8 text-lg">Your contribution funds scholarships, supplies, and training that transform lives.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="px-8 py-3.5 rounded-full font-bold bg-white transition-all hover:-translate-y-1 hover:scale-105" style={{ color: '#F47C20' }}>Donate Now</Link>
          <Link to="/programs" className="px-8 py-3.5 rounded-full font-bold border-2 border-white text-white transition-all hover:-translate-y-1 hover:scale-105">All Programs</Link>
          <Link to="/contact" className="px-8 py-3.5 rounded-full font-bold border-2 border-white text-white transition-all hover:-translate-y-1 hover:scale-105">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default function EducationPage() {
  return (
    <main>
      <PageHero />
      <AboutProgram />
      <ObjectivesSection />
      <WhoItSupports />
      <HowItWorks />
      <ImpactStats />
      <ScholarshipForm />
      <Cta />
    </main>
  );
}
