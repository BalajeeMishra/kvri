import { useState } from 'react'
import { Link } from 'react-router'
import { useInView } from '../hooks/useInView'
import PageHero from '../components/PageHero'
import { POSTS, type Post } from '../site'

function PostCard({ post, index, onOpen }: { post: Post; index: number; onOpen: () => void }) {
  const { ref, inView } = useInView(0.1)
  return (
    <article ref={ref} className="rounded-2xl overflow-hidden bg-white grid md:grid-cols-5" style={{ boxShadow: '0 2px 20px rgba(13,43,69,0.06)', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${index * 0.1}s` }}>
      <div className="md:col-span-2 overflow-hidden" style={{ minHeight: 260 }}>
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="md:col-span-3 p-8 flex flex-col">
        <span className="self-start px-3 py-1 rounded-full text-xs text-white mb-4" style={{ background: post.tag === 'Event' ? '#F47C20' : '#2E8B57', fontWeight: 700 }}>{post.tag}</span>
        <h2 className="text-2xl mb-2 leading-snug" style={{ color: '#0D2B45', fontWeight: 800 }}>{post.title}</h2>
        {post.subtitle && <p className="mb-3" style={{ color: '#F47C20', fontWeight: 600 }}>{post.subtitle}</p>}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
        <button onClick={onOpen} className="mt-auto self-start inline-flex items-center gap-2 text-sm" style={{ color: '#F47C20', fontWeight: 600 }}>
          Read More
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h7M8 4l3 3-3 3" /></svg>
        </button>
      </div>
    </article>
  )
}

function PostView({ post, onBack }: { post: Post; onBack: () => void }) {
  return (
    <article className="max-w-3xl mx-auto">
      <button onClick={onBack} className="text-sm mb-8 inline-flex items-center gap-2" style={{ color: '#F47C20', fontWeight: 600 }}>← Back to all posts</button>
      <span className="inline-block px-3 py-1 rounded-full text-xs text-white mb-4" style={{ background: post.tag === 'Event' ? '#F47C20' : '#2E8B57', fontWeight: 700 }}>{post.tag}</span>
      <h2 className="mb-3" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0D2B45', lineHeight: 1.2 }}>{post.title}</h2>
      {post.subtitle && <p className="text-lg mb-8" style={{ color: '#F47C20', fontWeight: 600 }}>{post.subtitle}</p>}
      <div className="rounded-2xl overflow-hidden mb-10" style={{ maxHeight: 460 }}>
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" style={{ maxHeight: 460 }} />
      </div>
      {post.sections.map((s, i) => (
        <section key={i} className="mb-8">
          {s.heading && <h3 className="text-xl mb-3" style={{ color: '#0D2B45', fontWeight: 700 }}>{s.heading}</h3>}
          {s.paragraphs?.map(p => <p key={p} className="text-gray-600 leading-relaxed mb-4">{p}</p>)}
          {s.bullets && (
            <ul className="flex flex-col gap-2 pl-1">
              {s.bullets.map(b => (
                <li key={b} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span style={{ color: '#F47C20' }}>●</span>{b}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <div className="rounded-2xl p-8 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ background: '#0D2B45' }}>
        <div>
          <div className="text-white text-lg mb-1" style={{ fontWeight: 700 }}>Want to help?</div>
          <div className="text-white/60 text-sm">Donate or volunteer to support our work in rural communities.</div>
        </div>
        <div className="flex gap-3">
          <Link to="/donate" className="px-5 py-3 rounded-full text-white text-sm" style={{ background: '#F47C20', fontWeight: 600 }}>Donate</Link>
          <Link to="/volunteer" className="px-5 py-3 rounded-full text-white text-sm" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', fontWeight: 600 }}>Volunteer</Link>
        </div>
      </div>
    </article>
  )
}

export default function NewsPage() {
  const [open, setOpen] = useState<Post | null>(null)
  const show = (p: Post | null) => { setOpen(p); window.scrollTo({ top: 380, behavior: 'smooth' }) }

  return (
    <>
      <PageHero image="/images/sanitation.jpeg" alt="Villagers gathered around a clean water point" crumb="Blog" eyebrow="Blog" title="Stories from the Field">
        News, events, and insights from our work in rural India.
      </PageHero>
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#FFF9F3' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {open ? (
            <PostView post={open} onBack={() => show(null)} />
          ) : (
            <div className="flex flex-col gap-8">
              {POSTS.map((p, i) => <PostCard key={p.slug} post={p} index={i} onOpen={() => show(p)} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
