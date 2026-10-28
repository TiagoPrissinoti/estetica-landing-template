import { InstagramIcon as Instagram } from './InstagramIcon'
import { ContactAction, WhatsAppIcon } from './ContactAction'
import { instagramUrl, whatsappUrl } from '@/lib/contact'

export function FloatingSocialButtons() {
  return <aside className="floating-socials" aria-label="Canais de contato"><div className="floating-item"><span className="floating-tooltip" role="tooltip">Instagram{!instagramUrl() && ' · demonstração'}</span><ContactAction platform="instagram" className="floating-button floating-instagram" label={`Instagram${!instagramUrl() ? ' — modo demonstrativo' : ''}`}><Instagram size={23} /></ContactAction></div><div className="floating-item"><span className="floating-tooltip" role="tooltip">WhatsApp{!whatsappUrl() && ' · demonstração'}</span><ContactAction className="floating-button floating-whatsapp" label={`Agendar pelo WhatsApp${!whatsappUrl() ? ' — modo demonstrativo' : ''}`}><WhatsAppIcon size={27} /></ContactAction></div><span className="floating-demo">DEMO</span></aside>
}
