import { Link } from 'react-router'
import { ORG, PROJECTS } from '../site'
import { Wordmark } from './Nav'

const footerLinks = {
  Projects: PROJECTS.map(p => ({ label: p.title, to: `/programs#${p.slug}` })),
  Foundation: [
    { label: 'Who is KVRI', to: '/about' },
    { label: 'Our Values', to: '/about' },
    { label: 'Blog', to: '/news' },
    { label: 'Contact Us', to: '/contact' },
  ],
  'Get Involved': [
    { label: 'Donate', to: '/donate' },
    { label: 'Volunteer', to: '/volunteer' },
    { label: 'Partner With Us', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D2B45' }} className="pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <Wordmark size="lg" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{ORG.mission}</p>
            <p className="text-sm" style={{ color: '#F47C20', fontWeight: 600 }}>{ORG.closing}</p>
          </div>

          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white text-sm uppercase tracking-wider mb-5" style={{ fontWeight: 700 }}>{group}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/45 hover:text-white text-sm transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap gap-8 py-8 mb-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2 text-white/45 text-sm"><span>📍</span><span>{ORG.office}</span></div>
          <a href={ORG.phoneHref} className="flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors"><span>📞</span><span>{ORG.phone}</span></a>
          <a href={`mailto:${ORG.email}`} className="flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors"><span>✉️</span><span>{ORG.email}</span></a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} {ORG.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white/60 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
