import { ArrowUpRight, Sparkle } from 'lucide-react'
import { ContactAction, WhatsAppIcon } from '@/components/ui/ContactAction'
import { Reveal } from '@/components/ui/Reveal'

export function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><Reveal><Sparkle className="cta-sparkle" size={44} strokeWidth={0.7} aria-hidden="true" /><p className="eyebrow">Um convite a você</p><h2>Seu momento de se cuidar<br />começa <em>aqui.</em></h2><p>Entre em contato e conheça as possibilidades<br className="desktop-break" /> de cuidado disponíveis para você.</p><ContactAction className="button button-dark"><WhatsAppIcon />Agendar avaliação pelo WhatsApp <ArrowUpRight size={18} /></ContactAction><span className="cta-note">Uma conversa. Um cuidado. Um novo começo.</span></Reveal></div><span className="cta-ring ring-one" aria-hidden="true" /><span className="cta-ring ring-two" aria-hidden="true" /></section>
}
