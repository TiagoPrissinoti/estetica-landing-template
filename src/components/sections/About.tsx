import { ArrowUpRight, Check } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { careValues } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'
import { ContactAction } from '@/components/ui/ContactAction'

export function About() {
  return <section id="sobre" className="section about-section"><div className="container about-grid">
    <Reveal className="about-visual"><img src={siteConfig.images.about} width={1448} height={1086} alt="Recepção ilustrativa da Clínica Aura, com luz natural, madeira e poltronas claras" loading="lazy" /><span className="image-credit">Ambiente conceitual ilustrativo</span><div className="about-seal"><span>AURA</span><span>cuidado<br />com essência</span></div></Reveal>
    <Reveal className="about-copy"><p className="eyebrow"><span />O jeito Aura de cuidar</p><h2>Mais do que estética,<br />uma experiência<br />de <em>cuidado.</em></h2><p>Na {siteConfig.name}, acreditamos que cada pessoa possui uma beleza única. Nossa proposta é oferecer uma experiência de cuidado acolhedora, personalizada e conectada às possibilidades da estética moderna.</p><p>Aqui, o tempo é seu. A escuta é atenta. E cada detalhe existe para que você se sinta bem sendo quem é.</p><ul className="care-values">{careValues.map(value => <li key={value}><Check size={16} />{value}</li>)}</ul><ContactAction className="text-link">Conheça a nossa proposta <ArrowUpRight size={18} /></ContactAction></Reveal>
  </div></section>
}
