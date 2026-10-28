import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon as Instagram } from '@/components/ui/InstagramIcon'
import { navigation, siteConfig } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { ContactAction, WhatsAppIcon } from '@/components/ui/ContactAction'

export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo light /><p>Estética com naturalidade.<br />Cuidado com essência.</p><div className="footer-socials"><ContactAction className="footer-social" label="WhatsApp da clínica"><WhatsAppIcon size={19} /></ContactAction><ContactAction platform="instagram" className="footer-social" label="Instagram da clínica"><Instagram size={19} /></ContactAction></div></div><div className="footer-navigation"><h2>Explore a Aura</h2><nav aria-label="Navegação do rodapé">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div className="footer-invitation"><span>SEU TEMPO. SEU CUIDADO.</span><p>A sua melhor versão<br />começa com você.</p><ContactAction className="text-link">Vamos conversar <ArrowUpRight size={17} /></ContactAction></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p><p>Site demonstrativo <span /> Clínica fictícia</p><a href="#inicio" aria-label="Voltar ao início">Voltar ao topo <ArrowUpRight size={15} /></a></div></div></footer>
}
