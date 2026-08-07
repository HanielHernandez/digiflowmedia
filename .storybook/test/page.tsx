'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MoveUpRight,
  Palette,
  Sparkles,
  X,
} from 'lucide-react'

const services = [
  { number: '01', icon: Palette, title: 'Brand systems', copy: 'Strategy, identity, and visual worlds that make your next chapter unmistakable.' },
  { number: '02', icon: Layers3, title: 'Digital products', copy: 'Websites and products that turn attention into action, built for how people really behave.' },
  { number: '03', icon: Code2, title: 'Growth engineering', copy: 'High-performance platforms, experiments, and analytics that compound over time.' },
]

const faqs = [
  ['What kind of projects do you take on?', 'We partner with ambitious teams on brand launches, digital products, campaigns, and growth systems. If it matters to your business, it is probably worth a conversation.'],
  ['How do you work with in-house teams?', 'We plug in wherever you need momentum — as a focused specialist team, a creative partner, or an extension of your internal crew.'],
  ['How long does a typical engagement take?', 'Most projects take 6–12 weeks from first workshop to launch. We scope around the outcome, not an arbitrary number of deliverables.'],
  ['Do you work with early-stage companies?', 'Absolutely. We love building the first clear expression of a new idea, then giving teams the system and confidence to grow it.'],
]

const technologies = ['Next.js', 'TypeScript', 'React', 'Webflow', 'Shopify', 'Framer', 'Figma', 'Node.js']

export function AgencyLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="font-mono text-sm font-bold tracking-[-0.08em] text-foreground">BRIGHT//SHIFT<span className="text-primary">●</span></a>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-foreground">Services</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#work" className="transition-colors hover:text-foreground">Approach</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 md:flex">Start a project <ArrowUpRight className="size-4" /></a>
        <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-border p-2 md:hidden">
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {menuOpen && <div className="mx-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-primary">Start a project <ArrowUpRight className="inline size-4" /></a></div>}

      <section id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><span className="size-2 rounded-full bg-success" /> Independent digital studio · NYC / Everywhere</div>
            <h1 className="max-w-4xl text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-[7.8rem]">Make the <span className="text-primary">next</span> move impossible to ignore.</h1>
          </div>
          <div className="flex flex-col gap-7 lg:pb-2">
            <p className="max-w-md text-lg leading-7 text-muted-foreground">We build brands, products, and digital experiences for teams ready to move culture — and their numbers.</p>
            <a href="#contact" className="group flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.12em]">Let&apos;s make something <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45"><ArrowUpRight className="size-5" /></span></a>
          </div>
        </div>
        <div className="relative mt-20 min-h-[360px] overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:min-h-[490px] sm:p-10 lg:mt-28">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e17cf6 1px, transparent 0)', backgroundSize: '22px 22px' }} />
          <div className="relative flex h-full min-h-[310px] flex-col justify-between sm:min-h-[410px]">
            <div className="flex items-start justify-between"><span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-pink">Signal / 001</span><Globe2 className="size-6 text-brand-pink" /></div>
            <div className="max-w-2xl"><p className="mb-5 max-w-lg text-sm leading-6 text-background/60">The internet is noisy. Your next idea shouldn&apos;t be.</p><div className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Good work<br /><span className="text-brand-pink">travels fast.</span></div></div>
            <div className="flex items-end justify-between"><span className="font-mono text-xs uppercase tracking-[0.16em] text-background/50">Strategy · Design · Technology</span><MoveUpRight className="size-7 text-brand-pink" /></div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-border bg-card px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">What we do</p><h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Clarity at the speed of culture.</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">One senior team. Fewer layers. More momentum for the ideas that matter.</p></div><div className="grid border-t border-border md:grid-cols-3">{services.map(({ number, icon: Icon, title, copy }) => <article key={number} className="group border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><div className="mb-16 flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">{number}</span><Icon className="size-5 text-primary transition-transform group-hover:rotate-12" /></div><h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="max-w-xs text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">About Bright//Shift</p><div className="mt-20 hidden text-8xl font-semibold leading-none tracking-[-0.09em] text-primary/15 lg:block">BS<br />26</div></div><div><h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">We&apos;re a small, sharp studio with a <span className="text-primary">big belief:</span> the best work changes what people expect.</h2><div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2"><p className="text-sm leading-6 text-muted-foreground">Bright//Shift was built for the messy middle between a great idea and the world seeing it. We bring strategy, design, and technology into the same room — then stay until it works.</p><p className="text-sm leading-6 text-muted-foreground">No theater. No hand-offs to a different team. Just thoughtful work, made with care, and a point of view strong enough to be remembered.</p></div></div></section>

      <section id="work" className="bg-primary px-6 py-16 text-primary-foreground lg:px-10 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Built for the now</p><h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Our stack keeps up.</h2></div><div className="flex flex-wrap gap-3">{technologies.map((tech) => <span key={tech} className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary">{tech}</span>)}</div></div></section>

      <section className="border-b border-border px-6 py-16 lg:px-10 lg:py-24"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 md:grid-cols-4"><div><p className="text-5xl font-semibold tracking-[-0.07em] text-primary sm:text-7xl">8.4<span className="text-brand-pink">x</span></p><p className="mt-2 text-sm text-muted-foreground">average launch ROI</p></div><div><p className="text-5xl font-semibold tracking-[-0.07em] text-primary sm:text-7xl">42</p><p className="mt-2 text-sm text-muted-foreground">brands shifted</p></div><div><p className="text-5xl font-semibold tracking-[-0.07em] text-primary sm:text-7xl">96<span className="text-brand-pink">%</span></p><p className="mt-2 text-sm text-muted-foreground">client referrals</p></div><div><p className="text-5xl font-semibold tracking-[-0.07em] text-primary sm:text-7xl">12</p><p className="mt-2 text-sm text-muted-foreground">countries reached</p></div></div></section>

      <section className="px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl bg-secondary px-6 py-6 text-secondary-foreground sm:flex-row sm:px-8"><div className="flex items-center gap-3"><Sparkles className="size-5 text-brand-pink" /><p className="text-sm font-semibold">Have a good idea? Let&apos;s give it a better launch.</p></div><a href="#contact" className="flex items-center gap-2 text-sm font-bold underline underline-offset-4">Start a conversation <ArrowUpRight className="size-4" /></a></div></section>

      <section id="faq" className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The small print</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Questions,<br />answered.</h2></div><div className="border-t border-border">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-border"><button className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-semibold" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown className={`size-5 shrink-0 text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="max-w-2xl pb-6 text-sm leading-6 text-muted-foreground">{answer}</p>}</div>)}</div></section>

      <section id="contact" className="bg-foreground px-6 py-20 text-background lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-brand-pink">Make a move</p><h2 className="max-w-lg text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl">Let&apos;s make your next thing <span className="text-brand-pink">matter.</span></h2><p className="mt-8 max-w-sm text-sm leading-6 text-background/60">Tell us what you&apos;re building, where you want to go, and why now. We&apos;ll take it from there.</p></div><form className="flex flex-col gap-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="grid gap-5 sm:grid-cols-2"><label className="flex flex-col gap-2 text-xs font-medium text-background/60">Your name<input required name="name" className="border-b border-background/30 bg-transparent py-3 text-base text-background outline-none transition-colors placeholder:text-background/30 focus:border-brand-pink" placeholder="Jane Smith" /></label><label className="flex flex-col gap-2 text-xs font-medium text-background/60">Work email<input required type="email" name="email" className="border-b border-background/30 bg-transparent py-3 text-base text-background outline-none transition-colors placeholder:text-background/30 focus:border-brand-pink" placeholder="jane@company.com" /></label></div><label className="flex flex-col gap-2 text-xs font-medium text-background/60">What can we help with?<textarea required name="message" rows={4} className="resize-none border-b border-background/30 bg-transparent py-3 text-base text-background outline-none transition-colors placeholder:text-background/30 focus:border-brand-pink" placeholder="A new brand, a digital product, a big shift..." /></label><button type="submit" className="mt-4 flex w-fit items-center gap-3 rounded-full bg-brand-pink px-6 py-3 text-sm font-bold text-foreground transition-transform hover:-translate-y-1">{submitted ? <><Check className="size-4" /> Message received</> : <>Send inquiry <ArrowUpRight className="size-4" /></>}</button></form></div></section>

      <footer className="bg-foreground px-6 pb-8 text-background lg:px-10"><div className="mx-auto max-w-7xl border-t border-background/15 pt-8"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><a href="#top" className="font-mono text-sm font-bold tracking-[-0.08em]">BRIGHT//SHIFT<span className="text-brand-pink">●</span></a><p className="mt-3 text-xs text-background/50">Independent digital studio for ambitious teams.</p></div><div className="flex gap-5 text-xs text-background/60"><a href="#services" className="hover:text-background">Services</a><a href="#contact" className="hover:text-background">Contact</a><a href="#top" className="hover:text-background">Back to top <ArrowUpRight className="inline size-3" /></a></div></div><p className="mt-16 font-mono text-[10px] uppercase tracking-[0.15em] text-background/40">© 2026 Bright//Shift Studio. Make something worth sharing.</p></div></footer>
    </main>
  )
}
