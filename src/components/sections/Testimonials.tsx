import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function Testimonials() {
  return <section id="depoimentos" className="section testimonials-section"><div className="container">
    <SectionHeading eyebrow="Histórias & conexões" title="Experiências que inspiram confiança" description="Um exemplo de como as histórias de quem se cuida podem ganhar espaço aqui." />
    <div className="testimonials-grid">{testimonials.map((item, index) => <Reveal key={item.name} delay={index * 0.07}><article className="testimonial-card"><div className="testimonial-top"><span className="stars" aria-label="Estrelas decorativas de exemplo; não representam uma avaliação real">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={13} fill="currentColor" aria-hidden="true" />)}</span><Quote size={26} strokeWidth={1} aria-hidden="true" /></div><blockquote>“{item.text}”</blockquote><div className="testimonial-person"><span className="person-initials">{item.initials}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div></div><span className="testimonial-demo">Depoimento demonstrativo · nome fictício</span></article></Reveal>)}</div>
    <p className="section-footnote">Conteúdo fictício para apresentação. Este espaço está preparado para depoimentos reais autorizados.</p>
  </div></section>
}
