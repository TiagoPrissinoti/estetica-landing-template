import { useState, type ReactNode } from 'react'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { InstagramIcon as Instagram } from './InstagramIcon'
import { instagramUrl, whatsappUrl } from '@/lib/contact'
import { siteConfig } from '@/config/site'
import { Modal } from './Modal'

export function WhatsAppIcon({ size = 21 }: { size?: number }) {
  return <span className="whatsapp-icon" style={{ width: size, height: size }} aria-hidden="true"><MessageCircle size={size} strokeWidth={1.6} /><Phone size={size * 0.48} strokeWidth={2} /></span>
}

export function ContactAction({ children, className = 'button button-gold', message, platform = 'whatsapp', label }: { children?: ReactNode; className?: string; message?: string; platform?: 'whatsapp' | 'instagram'; label?: string }) {
  const [demo, setDemo] = useState(false)
  const href = platform === 'whatsapp' ? whatsappUrl(message) : instagramUrl()
  const content = children ?? <>{platform === 'whatsapp' ? <WhatsAppIcon /> : <Instagram size={21} />} {platform === 'whatsapp' ? 'Agendar avaliação' : 'Instagram'}<ArrowUpRight size={17} /></>
  return <>
    {href ? <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>{content}</a> : <button type="button" className={className} aria-label={label} onClick={() => setDemo(true)}>{content}</button>}
    {demo && <Modal title="Uma prévia do seu próximo cuidado" onClose={() => setDemo(false)} className="demo-dialog">
      <span className="demo-pill">Site demonstrativo</span>
      <p>Você está conhecendo uma clínica fictícia. O {platform === 'whatsapp' ? 'WhatsApp' : 'Instagram'} será conectado ao canal oficial quando este site for personalizado.</p>
      {platform === 'whatsapp' && <div className="message-preview"><span>Sua mensagem</span><p>{message || siteConfig.whatsappMessage}</p></div>}
      <button className="button button-dark" onClick={() => setDemo(false)}>Continuar explorando <ArrowUpRight size={17} /></button>
    </Modal>}
  </>
}
