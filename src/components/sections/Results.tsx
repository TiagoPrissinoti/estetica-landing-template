import { Info } from 'lucide-react'
import { results } from '@/data/results'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Results() {
  return <section id="resultados" className="section results-section"><div className="container">
    <SectionHeading eyebrow="A beleza está nos detalhes" title="Resultados que valorizam sua essência" description="Conheça a experiência visual de comparação dos nossos tratamentos." />
    <div className="results-grid">{results.map((result, index) => <Reveal key={result.id} delay={index * 0.08}><article className="result-card"><BeforeAfterSlider {...result} /><div className="result-caption"><span>0{index + 1}</span><div><h3>{result.title}</h3><p>{result.subtitle}</p></div></div></article></Reveal>)}</div>
    <p className="results-disclaimer"><Info size={16} />Comparações ilustrativas para demonstração da funcionalidade. Não representam resultados clínicos reais.</p>
  </div></section>
}
