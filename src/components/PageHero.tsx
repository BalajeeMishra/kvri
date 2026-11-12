import { Link } from 'react-router'
import type { ReactNode } from 'react'

export default function PageHero({
  image,
  alt,
  crumb,
  eyebrow,
  title,
  children,
}: {
  image: string
  alt: string
  crumb: string
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ minHeight: 440 }}>
      <div className="absolute inset-0">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,43,69,0.92) 0%, rgba(13,43,69,0.6) 60%, rgba(13,43,69,0.35) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,69,0.85) 0%, transparent 60%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-36 w-full">
        <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">{crumb}</span>
        </div>
        <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4" style={{ background: 'rgba(244,124,32,0.2)', color: '#F47C20', fontWeight: 700 }}>{eyebrow}</span>
        <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800 }}>{title}</h1>
        {children && <div className="text-white/70 text-lg max-w-2xl leading-relaxed">{children}</div>}
      </div>
    </section>
  )
}
