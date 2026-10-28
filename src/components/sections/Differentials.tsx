import { differentials } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Differentials() {
  return <section className="section differentials-section"><div className="container">
    <SectionHeading eyebrow="A diferença está no cuidado" title="Por que escolher a Clínica Aura?" light />
    <div className="differentials-grid">{differentials.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 0.07}><article><span className="differential-number">0{index + 1}</span><Icon size={32} strokeWidth={1.2} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
  </div></section>
}
