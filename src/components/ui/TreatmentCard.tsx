import { ArrowUpRight } from 'lucide-react'
import type { Treatment } from '@/data/treatments'
import { TreatmentImage } from './TreatmentImage'

export function TreatmentCard({ treatment, onSelect }: { treatment: Treatment; onSelect: (treatment: Treatment) => void }) {
  return <article className="treatment-card">
    <button className="treatment-image-button" onClick={() => onSelect(treatment)} aria-label={`Conhecer ${treatment.name}`}><TreatmentImage src={treatment.image} index={treatment.imageIndex} alt={treatment.imageAlt} /><span className="image-arrow"><ArrowUpRight size={22} /></span></button>
    <div className="treatment-content"><p className="card-category">{treatment.category}</p><h3>{treatment.name}</h3><p>{treatment.description}</p><button className="text-link" onClick={() => onSelect(treatment)}>Saiba mais <ArrowUpRight size={16} /></button></div>
  </article>
}
