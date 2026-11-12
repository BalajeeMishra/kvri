import { useState } from 'react'
import { Link } from 'react-router'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import { DonorFields, validateDonorInfo, type DonorInfo, type DonorErrors } from '../components/DonorFields'
import { ORG, PROJECTS } from '../site'

// Suggested amounts (INR). Impact lines are illustrative — confirm with the KVRI team.
const donationAmounts = [
  { amount: '₹500', impact: 'Helps provide medicines at a rural medical camp' },
  { amount: '₹1,000', impact: 'Supports learning materials for children in a village' },
  { amount: '₹2,500', impact: 'Supports hygiene awareness sessions for a community' },
  { amount: '₹5,000', impact: 'Helps fund training for farmers in sustainable techniques' },
  { amount: '₹10,000', impact: 'Contributes to a free medical camp for a rural village' },
  { amount: '₹25,000', impact: 'Supports clean water and sanitation work in a village' },
]

function WhyDonate() {
  const { ref, inView } = useInView(0.2)
  const pillars = [
    { icon: '🔍', title: 'Integrity', desc: 'We uphold transparency, accountability, and ethical practices.' },
    { icon: '🌱', title: 'Sustainability', desc: 'We fund long-term, self-sufficient solutions — not quick fixes.' },
    { icon: '🏘️', title: 'On the Ground', desc: 'Your support reaches rural communities directly through our projects.' },
    { icon: '🤝', title: 'Collaboration', desc: 'We work with local professionals, volunteers, and communities.' },
  ]
  return (
    <section ref={ref} className="py-16 lg:py-20" style={{ backgroundColor: 'white', borderBottom: '1px solid rgba(13,43,69,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex items-start gap-4" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.6s ease ${i * 0.1}s` }}>
              <div className="text-2xl flex-shrink-0 mt-1">{p.icon}</div>
              <div>
                <div className="text-sm mb-1" style={{ color: '#0D2B45', fontWeight: 700 }}>{p.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DonationForm() {
  const [selected, setSelected] = useState(1)
  const [custom, setCustom] = useState('')
  const [area, setArea] = useState('Where it is needed most')
  const [donor, setDonor] = useState<DonorInfo>({ name: '', mobile: '', email: '' })
  const [errors, setErrors] = useState<DonorErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof DonorInfo, value: string) => {
    setDonor(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleDonate = () => {
    const e = validateDonorInfo(donor)
    setErrors(e)
    if (Object.keys(e).length === 0) setSubmitted(true)
  }

  const amountLabel = selected >= 0 && !custom ? donationAmounts[selected].amount : `₹${custom}`

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: '#0D2B45', boxShadow: '0 20px 60px rgba(13,43,69,0.2)' }}>
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="text-white text-2xl mb-3" style={{ fontWeight: 800 }}>Thank You, {donor.name.split(' ')[0]}!</h3>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          We have noted your pledge of <span style={{ color: '#F47C20' }}>{amountLabel}</span> towards <span style={{ color: '#F47C20' }}>{area}</span>. Our team will contact you at{' '}
          <span style={{ color: '#F47C20' }}>{donor.email}</span> with payment details.
        </p>
        <button
          onClick={() => { setSubmitted(false); setDonor({ name: '', mobile: '', email: '' }) }}
          className="px-6 py-3 rounded-full text-white text-sm transition-all duration-200 hover:opacity-90"
          style={{ background: '#F47C20', fontWeight: 600 }}
        >
          Make Another Pledge
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#0D2B45', boxShadow: '0 20px 60px rgba(13,43,69,0.2)' }}>
      <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <h3 className="text-white text-base flex items-center gap-2 mb-5" style={{ fontWeight: 700 }}>
          <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center text-white flex-shrink-0" style={{ background: '#F47C20', fontWeight: 700 }}>1</span>
          Choose an Amount (INR)
        </h3>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {donationAmounts.map((d, i) => (
            <button key={d.amount} onClick={() => { setSelected(i); setCustom('') }}
              className="py-3 rounded-xl text-base transition-all duration-200 hover:scale-105"
              style={{ fontWeight: 700, background: selected === i && !custom ? '#F47C20' : 'rgba(255,255,255,0.08)', color: selected === i && !custom ? 'white' : 'rgba(255,255,255,0.7)', border: selected === i && !custom ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
              {d.amount}
            </button>
          ))}
        </div>

        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" style={{ fontWeight: 600 }}>₹</span>
          <input type="number" placeholder="Custom amount" value={custom}
            onChange={e => { setCustom(e.target.value); setSelected(-1) }}
            className="w-full pl-8 pr-4 py-3.5 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all duration-200"
            style={{ fontWeight: 500, background: 'rgba(255,255,255,0.08)', border: custom ? '1px solid #F47C20' : '1px solid rgba(255,255,255,0.1)' }} />
        </div>

        <label className="text-sm flex flex-col gap-1.5 mb-4" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
          Support a project
          <select value={area} onChange={e => setArea(e.target.value)}
            className="px-4 py-3.5 rounded-xl text-white text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            {['Where it is needed most', ...PROJECTS.map(p => p.title)].map(o => <option key={o} value={o} style={{ color: '#0D2B45' }}>{o}</option>)}
          </select>
        </label>

        {selected >= 0 && !custom && (
          <div className="rounded-xl p-4 text-sm leading-relaxed" style={{ background: 'rgba(244,124,32,0.12)', border: '1px solid rgba(244,124,32,0.2)' }}>
            <span style={{ color: '#F47C20' }}>Your impact: </span>
            <span className="text-white/70">{donationAmounts[selected].impact}</span>
          </div>
        )}
      </div>

      <div className="px-8">
        <DonorFields info={donor} errors={errors} onChange={handleChange} />
      </div>

      <div className="px-8 py-6">
        <h4 className="text-white text-base mb-5 flex items-center gap-2" style={{ fontWeight: 700 }}>
          <span className="w-6 h-6 rounded-full text-xs flex items-center justify-center flex-shrink-0 text-white" style={{ background: '#F47C20', fontWeight: 700 }}>3</span>
          Confirm
        </h4>
        <button onClick={handleDonate}
          className="w-full py-4 rounded-xl text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          style={{ background: '#F47C20', fontWeight: 700 }}>
          Pledge {amountLabel !== '₹' ? amountLabel : ''} →
        </button>
        <p className="text-xs text-center mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Our team will reach out with payment details. Questions? Call {ORG.phone}.
        </p>
      </div>
    </div>
  )
}

function ImpactTable() {
  const { ref, inView } = useInView(0.2)
  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease' }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6" style={{ background: 'rgba(46,139,87,0.1)', color: '#2E8B57', fontWeight: 700 }}>Where Your Money Goes</span>
            <h2 className="mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0D2B45' }}>The Impact of Your Gift</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">Your donation supports our five focus areas across rural India.</p>
            <div className="flex flex-col gap-3">
              {PROJECTS.map(p => (
                <Link key={p.slug} to={`/programs#${p.slug}`} className="flex items-center gap-3 rounded-xl p-4 bg-white transition-all hover:-translate-y-0.5" style={{ border: '1px solid rgba(13,43,69,0.06)' }}>
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-sm" style={{ color: '#0D2B45', fontWeight: 600 }}>{p.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.15s' }}>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(13,43,69,0.08)' }}>
              <div className="px-5 py-3 grid grid-cols-2 gap-4 text-xs uppercase tracking-wider" style={{ background: '#0D2B45', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>
                <span>Amount (INR)</span><span>How it helps</span>
              </div>
              {donationAmounts.map((r, i) => (
                <div key={r.amount} className="px-5 py-4 grid grid-cols-2 gap-4 items-center" style={{ background: i % 2 === 0 ? '#FFF9F3' : 'white', borderBottom: '1px solid rgba(13,43,69,0.05)' }}>
                  <span className="text-sm" style={{ color: '#F47C20', fontWeight: 700 }}>{r.amount}</span>
                  <span className="text-gray-500 text-xs leading-snug">{r.impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function DonatePage() {
  const { ref, inView } = useInView(0.1)
  return (
    <>
      <PageHero image="/images/camp-5.jpeg" alt="Free medicines being distributed at a KVRI medical camp" crumb="Donate" eyebrow="Make a Difference" title="Every Contribution Creates Real Change">
        Your support helps us bring healthcare, education, sanitation, and farmer support to rural communities in India.
      </PageHero>
      <WhyDonate />

      <section ref={ref} className="py-24 lg:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6" style={{ background: 'rgba(244,124,32,0.1)', color: '#F47C20', fontWeight: 700 }}>Donate</span>
              <h2 className="mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0D2B45' }}>Make a Donation</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">Choose an amount and a project, then share your details. Our team will get in touch to complete your donation.</p>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  { num: '1', label: 'Choose your amount and project', desc: 'Select a suggested amount or enter your own.' },
                  { num: '2', label: 'Enter your details', desc: 'Your name, mobile, and email so we can reach you.' },
                  { num: '3', label: 'We get in touch', desc: 'Our team shares payment details and a receipt.' },
                ].map(s => (
                  <div key={s.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 text-white" style={{ background: '#F47C20', fontWeight: 700 }}>{s.num}</div>
                    <div>
                      <div className="text-sm mb-0.5" style={{ color: '#0D2B45', fontWeight: 700 }}>{s.label}</div>
                      <div className="text-gray-500 text-sm">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-5" style={{ background: 'rgba(46,139,87,0.06)', border: '1px solid rgba(46,139,87,0.15)' }}>
                <div className="text-sm mb-1" style={{ color: '#2E8B57', fontWeight: 700 }}>Need help?</div>
                <div className="text-gray-500 text-sm leading-relaxed">
                  Call us at <a href={ORG.phoneHref} className="underline" style={{ color: '#0D2B45' }}>{ORG.phone}</a> or email <a href={`mailto:${ORG.email}`} className="underline" style={{ color: '#0D2B45' }}>{ORG.email}</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease 0.15s' }}>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      <ImpactTable />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F47C20 0%, #e06010 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>Other Ways to Give</h2>
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">Volunteering your time, partnering with us, and spreading the word are just as valuable.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/volunteer" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105" style={{ background: '#0D2B45', color: 'white', fontWeight: 700 }}>Volunteer</Link>
            <Link to="/contact" className="px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/20" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700 }}>Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
