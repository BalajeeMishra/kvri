import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ORG } from '../site'

const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Who is KVRI', to: '/about' },
  { label: 'Projects', to: '/programs' },
  { label: 'Blog', to: '/news' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Contact', to: '/contact' },
]

export function Wordmark({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'w-12 h-12 text-base' : 'w-10 h-10 text-sm'
  return (
    <span className="flex items-center gap-3">
      <span
        className={`${box} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
        style={{ background: '#F47C20', fontWeight: 800, letterSpacing: '0.02em' }}
      >
        KVRI
      </span>
      <span className="leading-tight">
        <span className="block text-white" style={{ fontWeight: 800, fontSize: size === 'lg' ? '1rem' : '0.95rem' }}>{ORG.name}</span>
        <span className="block text-white/50 text-xs" style={{ fontWeight: 500 }}>{ORG.tagline}</span>
      </span>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = !isHome || scrolled || mobileOpen

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: solid ? 'rgba(13,43,69,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        boxShadow: solid ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" style={{ height: 72 }}>
        <Link to="/" aria-label={`${ORG.name} home`}>
          <Wordmark />
        </Link>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) => `text-sm transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
              style={{ fontWeight: 500 }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/donate"
            className="hidden sm:inline-block px-5 py-2.5 rounded-full text-white text-sm transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ background: '#F47C20', fontWeight: 600 }}
          >
            Donate Now
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden text-white p-1" aria-label="Toggle menu">
            {mobileOpen
              ? <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l10 10M16 6L6 16" /></svg>
              : <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h14M4 12h14M4 17h14" /></svg>
            }
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden px-6 pb-6" style={{ backgroundColor: 'rgba(13,43,69,0.98)' }}>
          {navLinks.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/80 hover:text-white text-base border-b border-white/10 transition-colors"
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center py-3 rounded-full text-white text-base"
            style={{ background: '#F47C20', fontWeight: 600 }}
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  )
}
