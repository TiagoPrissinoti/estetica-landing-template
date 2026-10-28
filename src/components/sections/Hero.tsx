import { ArrowDown, ArrowUpRight, Sparkle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { ContactAction } from '@/components/ui/ContactAction'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  return <section id="inicio" className="hero-section" aria-labelledby="hero-heading">
    <div className="hero-inner">
      <div className="hero-copy">
        <Reveal><p className="eyebrow"><span />Estética avançada & bem-estar</p></Reveal>
        <Reveal delay={0.08}><h1 id="hero-heading">Sua beleza,<br />sua <em>melhor</em><br /><em>versão.</em><Sparkle className="hero-sparkle" strokeWidth={0.8} aria-hidden="true" /></h1></Reveal>
        <Reveal delay={0.16}><p className="hero-description">Descubra uma experiência de cuidado personalizada, onde tecnologia, sofisticação e naturalidade se encontram.</p></Reveal>
        <Reveal delay={0.23} className="hero-buttons"><ContactAction>Agendar minha avaliação <ArrowUpRight size={18} /></ContactAction><a className="text-link" href="#tratamentos">Conhecer tratamentos <ArrowDown size={16} /></a></Reveal>
        <Reveal delay={0.3} className="hero-signature"><span className="signature-line" /><p>O cuidado é nosso.<br /><strong>A essência é sua.</strong></p></Reveal>
      </div>
      <Reveal className="hero-visual" delay={0.12}>
        <img src={siteConfig.images.hero} alt="Retrato editorial de modelo fictícia com expressão serena e luz natural" width={1120} height={1400} fetchPriority="high" className="hero-photo" />
        <div className="hero-photo-shade" />
        <span className="hero-image-note">BELEZA QUE RESPEITA SUA HISTÓRIA</span>
        <div className="hero-image-caption"><Sparkle className="caption-star" strokeWidth={0.8} aria-hidden="true" /><p>Naturalmente você.<br /><em>Extraordinariamente única.</em></p></div>
        <span className="image-credit">Imagem editorial ilustrativa</span>
      </Reveal>
    </div>
    <div className="hero-bottom"><span>Um novo olhar para o seu cuidado</span><a href="#tratamentos" aria-label="Explorar tratamentos">Explore a Aura <ArrowDown size={15} /></a><span className="hero-bottom-end">Naturalidade em primeiro lugar</span></div>
  </section>
}
