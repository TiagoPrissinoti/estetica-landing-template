import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <Reveal className={`section-heading ${light ? 'section-heading-light' : ''}`}>
    <p className="eyebrow"><span />{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>
}
