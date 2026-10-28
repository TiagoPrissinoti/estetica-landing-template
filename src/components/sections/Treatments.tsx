import { useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { treatments, type Treatment } from '@/data/treatments'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TreatmentCard } from '@/components/ui/TreatmentCard'
import { TreatmentImage } from '@/components/ui/TreatmentImage'
import { Modal } from '@/components/ui/Modal'
import { ContactAction } from '@/components/ui/ContactAction'

export function Treatments() {
  const [selected, setSelected] = useState<Treatment | null>(null)
  return <section id="tratamentos" className="section treatments-section" aria-label="Tratamentos">
    <div className="container"><div className="section-intro"><SectionHeading eyebrow="Cuidado com propósito" title="Tratamentos pensados para você" description="Cuidados personalizados para valorizar sua beleza natural." /><p className="intro-aside">Cada pessoa é única.<br />Seu cuidado também deve ser.</p></div>
      <div className="treatments-grid">{treatments.map((treatment, index) => <Reveal key={treatment.id} delay={(index % 3) * 0.07}><TreatmentCard treatment={treatment} onSelect={setSelected} /></Reveal>)}</div>
      <p className="section-footnote"><Sparkles size={16} />O primeiro passo é entender você. Todo cuidado começa com uma avaliação individual.</p>
    </div>
    {selected && <Modal title={selected.name} onClose={() => setSelected(null)} className="treatment-dialog">
      <TreatmentImage src={selected.image} index={selected.imageIndex} alt={selected.imageAlt} eager /><p className="card-category">{selected.category}</p><p>{selected.details}</p>
      <div className="treatment-info"><span>Uma escolha consciente</span><p>Informações gerais e ilustrativas. A indicação, os cuidados e as expectativas devem ser discutidos com um profissional habilitado. Resultados variam de pessoa para pessoa.</p></div>
      <ContactAction message={`Olá! Gostaria de saber mais sobre o tratamento de ${selected.name}.`}>Consultar pelo WhatsApp <ArrowUpRight size={18} /></ContactAction>
    </Modal>}
  </section>
}
