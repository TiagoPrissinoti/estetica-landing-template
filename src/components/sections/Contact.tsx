import { ArrowUpRight, Clock3, MapPin, Navigation } from 'lucide-react'
import { InstagramIcon as Instagram } from '@/components/ui/InstagramIcon'
import { mapsEmbedUrl } from '@/lib/contact'
import { siteConfig } from '@/config/site'
import { Reveal } from '@/components/ui/Reveal'
import { ContactAction, WhatsAppIcon } from '@/components/ui/ContactAction'

export function Contact() {
  const mapUrl = mapsEmbedUrl()
  return <section id="contato" className="section contact-section"><div className="container contact-grid">
    <Reveal><p className="eyebrow"><span />Vamos conversar?</p><h2>Estamos esperando<br />por <em>você.</em></h2><p className="contact-description">Seu cuidado começa com uma boa conversa.<br />Será um prazer conhecer você.</p><div className="contact-details"><div><MapPin size={20} /><div><h3>Nosso endereço</h3><p>{siteConfig.address || 'Localização a personalizar'}</p>{!siteConfig.address && <span>O endereço será informado pela clínica.</span>}</div></div><div><Clock3 size={20} /><div><h3>Horário de atendimento</h3><p>{siteConfig.hours || 'Horários a personalizar'}</p></div></div><div><WhatsAppIcon size={20} /><div><h3>Vamos cuidar de você</h3><ContactAction className="text-link">Conversar pelo WhatsApp <ArrowUpRight size={15} /></ContactAction></div></div><div><Instagram size={20} /><div><h3>Acompanhe a Aura</h3><ContactAction platform="instagram" className="text-link">Conhecer nosso Instagram <ArrowUpRight size={15} /></ContactAction></div></div></div></Reveal>
    <Reveal className="contact-map">{mapUrl ? <iframe title={`Localização de ${siteConfig.name}`} src={mapUrl} width="600" height="540" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="map-placeholder"><div className="map-streets" aria-hidden="true" /><span className="map-pin"><MapPin size={30} strokeWidth={1.2} /></span><div className="map-label"><Navigation size={16} /><span>Seu próximo destino de cuidado</span></div><h3>Um espaço para<br />a sua localização.</h3><p>O mapa e o endereço serão personalizados<br />com os dados reais da clínica.</p><span className="demo-pill">Localização demonstrativa</span></div>}</Reveal>
  </div></section>
}
